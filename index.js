// const {isLogin}=require("./fun/fun")
// const fun=require("./fun/fun")
// let x=2
// let y=8

// // console.log(x+y);//  تست نود یا تبدیل npm
// // console.log(isLogin(5, x + y));
//  console.log(fun);
//  ------------------  Expers
const http = require("http");
const serve = http.createServer((req, res) => {
  // console.log(req.method);
  // console.log(req.url);
  if (req.method == "GET" && req.url == "/Book") {
    res.write("is page book ");
    res.end();
  } else if (req.method == "GET" && req.url == "/user") {
    res.end("is pase user");
  }
  else{
    res.end("NOT found");
  }
});
serve.listen(3005, () => {
  console.log("server runing port 3005");
});
