const http = require('http');
const fs = require('fs');
const archiver = require('archiver');
const child_process = require('child_process');
const querystring = require('querystring');

// 1. 登录，打开https://github.com/login/oauth/authorize?client_id=xxx
child_process.exec(`open https://github.com/login/oauth/authorize?client_id=Iv1.4cb620e7c7fe7ac1`);

// 3. 创建本地server，接收token，后点击发布
http.createServer((request, response) => {
  const query = querystring.parse(request.url.match(/^\/\?([\s\S]+)$/)[1]);
  publish(query.token);
}).listen(8083);

function publish(token) {
  const request = http.request({
    hostname: '127.0.0.1',
    port: 8082,
    method: 'POST',
    path: `/publish?token=${token}`,
    headers: {
      'Content-Type': 'application/octet-stream'
    }
  }, response => {
    console.log(response);
  });

  const archive = archiver('zip', {
    zlib: {
      level: 9
    }
  });
  
  archive.directory('./sample/', false);
  archive.finalize();
  archive.pipe(request);

  request.end();
}
