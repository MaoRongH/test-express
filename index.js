var express = require('express');
var { graphqlHTTP } = require('express-graphql');
const sequelize = require("./model/db");


var app = express();
var PORT = process.env.PORT || 8000;

 
var app = express();
tectConnectDB();

const schema = require("./graphql/schema.js");
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.use((err, req, res, next) => {
    if (err) {
      res.status(500).send({ code: 1, msg: err.message });
    }
});
  

app.use('/',(req,res,next) => {
    res.send('<p>容器化Express应用!!</p>')
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}! http://localhost:8000`));

async function tectConnectDB() {
    try {
      //  用于测试数据库链接情况
      await sequelize.authenticate();
      console.log("数据库链接成功");
    } catch (error) {
      console.error("数据库链接错误: ", error);
    }
}