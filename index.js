var express = require('express')
var multer  = require('multer')

var app = express()
var upload = multer({ dest: 'uploads/'  }) // => dest: 파일을 업로드할 경로 

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (_, res) => {
    res.render("index");
});

/**
 * multer는 미들웨어 형태로 등록한다 
 *
 *  single 메소드
 *  @param filedName: string
 */
app.post('/upload', upload.single('someFile'), (req, res) => {
    console.log(req.file);
    res.send("업로드 성공");
});

app.listen(8080, () => {
    console.log(`✅ Server Listen: http://localhost:8080`);
})