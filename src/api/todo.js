const todos = require("./todosdata");
module.exports.handler = (event, ctx, done) => {
  console.log(event.pathParameters.id);
  let todo = todos.filter(todo => todo.id == event.pathParameters.id)
  done(null, {
    statusCode: 200,
    body: JSON.stringify({
      data: todo
    })
  })
}
