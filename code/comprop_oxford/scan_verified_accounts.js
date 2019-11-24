"use strict"

const fs = require('fs');
const resolve = require('path').resolve;
const miss = require('mississippi2');
const child_process = require('child_process');

var inputFile = resolve(__dirname, '../../data/comprop_oxford/verified_accounts.ndjson.xz');

var timeStart = Date.parse('2018-11-20T00:00:00Z');
var timeEnd   = Date.parse('2018-11-29T00:00:00Z');
var duration  = (timeEnd-timeStart)/86400000;

var xz = child_process.spawn('xz',['-dc', inputFile]);
xz.stderr.pipe(process.stderr);

miss.pipeline(
	// open file end decompress with xz
	xz.stdout,
	
	// split at every line break
	miss.split(),

	// count tweets
	miss.through.obj((data, enc, cb) => {
		if (!data) return cb(null);

		data = JSON.parse(data);

		if (!data.user.verified) return cb(null);
		if (data.user.protected) return cb(null);

		var count = 0;
		data.tweets.forEach(t => {
			var time = Date.parse(t.created_at);
			if (time < timeStart) return;
			if (time > timeEnd) return;
			count++
		})
		
		var result = [
			data.user.screen_name,
			count,
			(count/duration).toFixed(2)
		].join('\t')+'\n';

		cb(null, result);
	}),

	// output results to stdout
	process.stdout
)


