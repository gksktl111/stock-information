const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const server = require('http').createServer(app);
const dotenv = require('dotenv');
const axios = require('axios');

// dotenv를 사용하여 .env 파일 로드
dotenv.config();

app.use(cors());

server.listen(8080, function () {
  console.log('listening on 8080');
});

// 해당 폴더의 정적 파일들을 사용
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

app.get('/api2', async function (req, res) {
  console.log(process.env.API_KEY);

  try {
    const searchQuery = req.query.search;
    console.log('Search Query:', searchQuery);

    // OpenAPI에 요청을 보내고 응답을 받아옴
    const response = await axios.get(
      'https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo',
      {
        params: {
          serviceKey: process.env.API_KEY,
          numOfRows: 1,
          resultType: 'json',
          itmsNm: searchQuery,
        },
      }
    );

    // 바디 내부의 아이템의 값 가져오기
    const items = response.data.response.body.items.item;

    // 종목 번호만 추출
    const srtnCd = items.map((item) => item.srtnCd);

    console.log(srtnCd);

    // 응답 데이터 출력 또는 클라이언트에게 전송
    res.send(srtnCd);
  } catch (error) {
    // 오류 처리
    console.error('Error:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
});
