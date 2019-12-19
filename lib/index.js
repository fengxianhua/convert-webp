module.exports = function (module) {
  if (process.platform === 'darwin') {

    return __dirname + `/libwebp_osx/bin/${module}`; 

  } else if (process.platform === 'linux') {

    return __dirname + `/libwebp_linux/bin/${module}`;

  } else if (process.platform === 'win32') {

    if (process.arch === 'x64') {

      return __dirname + `/libwebp_win64/bin/${module}.exe`; 
    } else {
      return __dirname + `/libwebp_win32/bin/${module}.exe`;
    }

  } else {
    console.log('Unsupported platform:', process.platform, process.arch); 
  }
}