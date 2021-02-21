const http = require('http');
const https = require('https');
const unzipper = require('unzipper');
const querystring = require('querystring');
const {callbackify} = require('util');

// 2. auth路由：接收code，调用github接口，用code + client_id + client_secret换token，将换取的token回传给客户端
function auth(request, response) {
  const query = querystring.parse(request.url.match(/^\/auth\?([\s\S]+)$/)[1]);
  getToken(query.code, (info) => {
    // response.write(JSON.stringify(info));
    response.write(`<a href="http://localhost:8083/?token=${info.access_token}">publish</a>`);
    response.end();
  });
}

function getToken(code, callback) {
  const request = https.request({
    hostname: 'github.com',
    path: `/login/oauth/access_token?code=${code}&client_id=Iv1.4cb620e7c7fe7ac1&client_secret=0981001b0c8cbac6c4a5858513384722d8b86c2f`,
    port: 443,
    methid: 'POST'
  }, (response) => {
    let body = '';
    response.on('data', chunk => {
      body += chunk.toString();
    });
    response.on('end', chunk => {
      callback(querystring.parse(body));
    });
  });
  request.end();
}

function getUser(token, callback) {
  const request = https.request({
    hostname: 'api.github.com',
    path: `/user`,
    port: 443,
    methid: 'GET',
    headers: {
      Authorization: `token ${token}`,
      'User-Agent': 'toy-publish1230'
    }
  }, (response) => {
    let body = '';
    response.on('data', chunk => {
      body += chunk.toString();
    });
    response.on('end', chunk => {
      callback(JSON.parse(body));
    });
  });
  request.end();
}

// 4. publish路由：用token获取用户信息，检查权限，接受发布
function publish(request, response) {
  const query = querystring.parse(request.url.match(/^\/publish\?([\s\S]+)$/)[1]);
  
  getUser(query.token, (info) => {
    if (info.login === 'jtandy123') {
      request.pipe(unzipper.Extract({
        path: '../server/public/'
      }));
      
      request.on('end', () => {
        response.end('Success');
      });
    } else {
      request.on('end', () => {
        response.end('No publish permission');
      });
    }
  });
}


http.createServer((request, response) => {
  if (request.url.match(/^\/auth\?/)) {
    return auth(request, response);
  }
  if (request.url.match(/^\/publish\?/)) {
    return publish(request, response);
  }
}).listen(8082);
