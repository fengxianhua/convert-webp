const exec = require('child_process').execFile;
const cwebp = require('./lib')('cwebp');
const dwebp = require('./lib')('dwebp');
const gifwebp = require('./lib')('gif2webp');
const webpmux = require('./lib')('webpmux');

/******************************************************* cwebp *****************************************************/

module.exports.cwebp = function (input_image, output_image, option={}, callback=()=>{}) {

  let query = option + ' ' + input_image + ' -o ' + output_image; 

  // console.log(query);

  exec(cwebp, query.split(/\s+/), function (error, stdout, stderr){
    if (error) {
      callback(error);
    } else {
      callback(null, 'succeed');
    }
  });
};

/******************************************************* dwebp *****************************************************/

module.exports.dwebp = function (input_image, output_image, option={}, callback=()=>{}) {

  let query = input_image + ' ' + option + ' ' + output_image; 


  // console.log(query);

  exec(dwebp, query.split(/\s+/), function (error, stdout, stderr){
    if (error) {
      callback(error);
    } else {
      callback(null, 'succeed');
    }
  });
};

/******************************************************* gif2webp *****************************************************/

module.exports.gwebp = function (input_image, output_image, option={}, callback=()=>{}) {

  let query = option + ' ' + input_image + ' -o ' + output_image;

  exec(gifwebp, query.split(/\s+/), function (error, stdout, stderr){
    if (error) {
      callback(error);
    } else {
      callback(null, 'succeed');
    }
  });
};

/******************************************************* webpmux *****************************************************/


module.exports.webpmux_add = function (input_image, output_image, icc_profile, option={}, callback=()=>{}) {

  let query = '-set ' + option + ' ' + icc_profile + ' ' + input_image + ' -o ' + output_image;

  exec(webpmux, query.split(/\s+/), function (error, stdout, stderr){
    if (error) {
      callback(error);
    } else {
      callback(null, 'succeed');
    }
  });
};


module.exports.webpmux_extract = function (input_image, icc_profile, option={}, callback=()=>{}) {

  let query = '-get ' + option + ' ' + input_image + ' -o ' + icc_profile;

  exec(webpmux, query.split(/\s+/), function (error, stdout, stderr){
    if (error) {
      callback(error);
    } else {
      callback(null, 'succeed');
    }
  });
};


module.exports.webpmux_strip = function (input_image, output_image, option={}, callback=()=>{}) {

  let query = '-strip ' + option + ' ' + input_image + ' -o ' + output_image;

  exec(webpmux, query.split(/\s+/), function (error, stdout, stderr){
    if (error) {
      callback(error);
    } else {
      callback(null, 'succeed');
    }
  });
};


module.exports.webpmux_animate = function (input_images, output_image, loop, bgcolor, callback=()=>{}) {
  let files = '-frame ' + input_images[0];

  let j = input_images.length;

  for (i = 1; i < j; i++) {
    files = files + ' -frame ' + input_images[i];
    // console.log(files);
  }

  let query = files + ' -loop ' + loop + ' -bgcolor ' + bgcolor + ' -o ' + output_image;

  exec(webpmux, query.split(/\s+/), function (error, stdout, stderr){
    if (error) {
      callback(error);
    } else {
      callback(null, 'succeed');
    }
  });
};


module.exports.webpmux_getframe = function (input_image, output_image, frame_number, callback=()=>{}) {

  let query = '-get frame ' + frame_number + ' ' + input_image + ' -o ' + output_image;

  exec(webpmux, query.split(/\s+/), function (error, stdout, stderr){
    if (error) {
      callback(error);
    } else {
      callback(null, 'succeed');
    }
  });
};