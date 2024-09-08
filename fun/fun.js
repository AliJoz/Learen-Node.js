const isLogin = (data, num) => {
  if (data === num) {
    return true;
  }
  return false;
};


const nums=555;
 
// module.exports.isLogin = isLogin;

module.exports={
isLogin,
nums
}