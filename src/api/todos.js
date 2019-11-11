const todos = require("./todosdata");
module.exports.handler = (event, ctx, done) => {
  done(null, {
    statusCode: 200,
    body: JSON.stringify({ data: todos })
  })
}
