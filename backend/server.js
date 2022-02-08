//필요한 모듈 가져오기
const express = require('express')
const bodyParser = require('body-parser')

const pg = require('./db')

//express 서버를 생성
const app = express()

//json 형태로 오는 요청의 본문을 해석해줄 수 있게 등록
app.use(bodyParser.json())
app.listen(5000, () => {
    console.log('애플리케이션이 5000번 포트에서 시작되었습니다.')
})

//api 작성
app.get('/api/values', (req, res) => {
    pg.connect((err, client, done) => {
        if (err) {
            console.log("Can not connect to the DB" + err)
        }
        client.query('SELECT * FROM "lists"', (err, results, fields) => {
            done()
            if(err) return res.status(500).send(err)
            else return res.json(results)
        })
    })
})

app.post('/api/value', (req, res, next) => {
    pg.connect((err, client, done) => {
        if (err) {
            console.log("Can not connect to the DB" + err)
        }
        client.query(`INSERT INTO "lists"(content) VALUES('${req.body.value}')`, (err, results, fields) => {
            done()
            if(err) return res.status(500).send(err)
            else return res.json({ success: true, content: req.body.value })
        })
    })
})