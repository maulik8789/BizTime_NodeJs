/** Server startup for BizTime. */


const app = require("./app");


app.listen(5000, "0.0.0.0", function () {
  console.log("Listening on 5000");
});