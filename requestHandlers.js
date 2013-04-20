var exec = require("child_process").exec;

function start(response) {
  console.log("Request handler 'start' was called.");

  exec("dir", function (error, stdout, stderr) {   //window下将当前文件信息打印出来
//  exec(" ls -lah", function (error, stdout, stderr) {	 //Linux下将当前文件信息打印出来
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(stdout);
    response.end();
  });
}

function upload(response) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello Upload");
  response.end();
}

exports.start = start;
exports.upload = upload;
;



