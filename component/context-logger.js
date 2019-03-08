
function Logger() {
   this.methods = "get";
}

Logger.prototype.response = function(string) {
  var start = "\n" + "*************** response log start ***************" + "\n";
  var end = "\n" + "*************** response log end ***************" + "\n";
  console.info(start + string + end)
};

Logger.prototype.request = function(string) {
  var start = "\n" + "*************** request log start ***************" + "\n";
  var end = "\n" + "*************** request log end ***************" + "\n";
  console.info(start + string + end)
};

Logger.prototype.error = function(string) {
  var start = "\n" + "*************** error log start ***************" + "\n";
  var end = "\n" + "*************** error log end ***************" + "\n";
  console.error(start + string + end);
};


module.exports = new Logger();
