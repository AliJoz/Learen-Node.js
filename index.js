// // const {isLogin}=require("./fun/fun")
// // const fun=require("./fun/fun")
// // let x=2
// // let y=8

// // // console.log(x+y);//  تست نود یا تبدیل npm
// // // console.log(isLogin(5, x + y));
// //  console.log(fun);
// //  ------------------  Expers
// const http = require("http");
// const serve = http.createServer((req, res) => {
//   // console.log(req.method);
//   // console.log(req.url);
//   if (req.method == "GET" && req.url == "/Book") {
//     // res.writeHead(200,{"content-Type":"text/plain"})   این دیفالت
//     // res.writeHead(200,{"content-Type":"text/html"})
//     res.writeHead(200,{"content-type":"application/json"})
//     // res.write("<h1>man content-type</h1>");
//     res.end(JSON.stringify([
//         {id:1,title:"1"},
//         {id:2},
//         {id:3,title:"3"}
//     ]));
//   } else if (req.method == "GET" && req.url == "/user") {
//     res.end("is pase user");
//   }
//   else{
//     res.end("NOT found");
//   }
// });
// serve.listen(3005, () => {
//   console.log("server runing port 3005");
// });
////////////////  تمرین
// در تمرین زیر  اسم و نام خانوادگی زیر وارد کن و سن را وارد کن اگر بالای 22 سال بود در فایل ننویس
const readline = require("readline");
const fs = require("fs");
const { error } = require("console");
const { stringify } = require("querystring");

// ایجاد رابط برای ورودی و خروجی
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// // گرفتن ورودی از کاربر
// rl.question("pls inpu FName and lastName ", (name) => {
//   rl.question("pls input phone: ", (phone) => {
//     rl.question("pls num student: ", (studentId) => {
//       rl.question("pls input age: ", (age) => {
//         // ساختن رشته اطلاعات
//         const data = `${name}\t ${phone}\t ${studentId}\t ${age}\n`;

//         // نوشتن داده‌ها به فایل
//         fs.appendFile('user_data.txt', data, (err) => {
//           if (err) throw err;
//           console.log('اطلاعات شما در فایل ذخیره شد.');
          
//           // بستن رابط پس از ذخیره اطلاعات
//           rl.close();
//         });
//       });
//     });
//   });
// });
fs.readFile("./data.json",(err,data)=>{
  if(err){
     throw err
  }
  console.log(JSON.parse(data))
})