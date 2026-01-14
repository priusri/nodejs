// const apple = require("./apple");
// const orange=require("./orange");
// const banana=require("./banana");
// let fruits=[apple,orange,banana];
// module.exports=fruits;

const figlet= require("figlet");
figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});