const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const server = require('http').createServer(app);

app.use(cors());

server.listen(8080, function () {
  console.log('listening on 8080');
});

// 해당폴더의 정적파일들을 사용
app.use(express.static(path.join(__dirname, 'stock-trading/build')));

// 라우팅은 리액트에서 하므로 서버에서는 빌드 파일 하나만 라우팅하면 됨
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/stock-trading/build/index.html'));
});

app.get('/hello', function (req, res) {
  res.send('asdad');
});

app.get('/api', function (req, res) {
  res.send({ message: 'Helloasd' });
});

app.get('/api2', function (req, res) {
  res.send({ message: 'api2' });
});
