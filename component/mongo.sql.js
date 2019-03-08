const mongodb = require("mongodb");
const assert = require("assert");

const MongoClient = mongodb.MongoClient;
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'webchat_user';

function MongodbServe() {
  this.db = null;
  this.client = MongoClient.connect(url, {
    useNewUrlParser: true
  });
}


// function step(data) {
//   data.then((client) => {
//     oprate(client);
//   }).catch(function(err) {
//     throw err;
//   })
// }
//
// function oprate(client) {
//   var dbo = client.db(dbName);
// }
//
// async function Connection(client) {
//   try {
//     await step(client);
//   } catch (err) {
//     console.log(err);
//   }
// }

function _insertOne(client, Collections, Objects) {
  var dbo = client.db(dbName);
  dbo.collection(Collections).insertOne(Objects, function(err, res) {
    if (err) throw err;
    console.log("文档插入成功");
  });
  return this;
}

MongodbServe.prototype.insertOne = function(Collections, Objects) {
  const _this = this;
  this.client.then(function(client) {
      _insertOne.call(_this, client, Collections, Objects)
    })
    .catch(function(err) {
      throw err;
    })
  return this;
};

const mongodbserver = new MongodbServe();

module.exports = mongodbserver;
