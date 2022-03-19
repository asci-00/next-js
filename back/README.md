# BACK-END

![NODE][node-url]
![NPM][npm-url]
![ESLINT][eslint-url]

![img_2.png](img_2.png)

> Vue.js 공부용 Repository
>
> 기초부터 하나하나 실습해가며 유의미한 단위로 Repository 에 push

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Lints and fixes files
```
npm run lint
```

# 📋 공부 내용

## BACK-END

> node-js 와 express를 활용한 api server 구현 

## 📎 Dependency

### `sequelize`

- sequelize를 통해 데이터베이스를 직접 서버에 CREATE 할 수 있음
- models에 CREATE할 TABLE를 설계해놓고 해당 model을 db에 적용

### `nodemon`

- node app.js 명령은 핫 리로딩 기능을 제공하지 않기 때문에, nodemon을 통해 핫 리로딩 기능 적용

```bash
nodemon app.js
```

### `passport`

- kakao, naver, google, local 등 여러 Login 방식의 <br/>복잡한 처리를 도와주는 라이브러리
- session / cookie와 연계되어 login시, session에 값을 저장시키고 매 요청마다 검증
```javascript
const passport = require('passport');
...
router.post('/login',
  (req, res, next) => {
    passport.authenticate('type', (err, user, info) => { // done callback
      if (err) return errorHandling(err);
      if (info) return messageHandling(info);
      return req.login(user, async (loginError) => {
        if(loginError) return errorHandling(loginError);
        return res.json(user);
      });
    })(req, res, next);
  }
);
...

```

### `cors`

- 브라우저 CORS 정책위반을 해결하기 위한 모듈
```javascript
app.use(
  cors({
    origin: 'http://somedomain',
    credential: false,
  })
);
```

### `dotenv`
- 민감한 데이터나 환경에 따라 변경해야하는 환경변수 등을 관리하기 위한 모듈
- `.env` 파일을 만들어 key=value 형식으로 환경변수 설정
- dotenv.config() 호출 후, process.env.KEY 로 접근이 가능

### `express-session` & `cookie-parser`

[node-url]: https://shields.io/badge/node-v16.13.1-blue?style=for-the-badge
[npm-url]: https://shields.io/badge/npm-8.1.2-BLUE?style=for-the-badge
[eslint-url]: https://shields.io/badge/eslint-v8.10.0-orange?style=for-the-badge
[express-url]: https://shields.io/badge/express-%5E4.17.3-orange?style=for-the-badge