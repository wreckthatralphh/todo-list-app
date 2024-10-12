import express from "express";
const todosrouter = express.Router();

 
// reading all todo items
todosrouter.get("/api/todos", (req, res) => {
  res.send("Get All TODOS");
});
 
 
// getting specific todo item with id as parameter
todosrouter.get("/api/todos/:id", (req, res) => {
  // get the todo id from the url
  const todoId = req.params.id;
 
 
  res.send(`Gettomg todo with id ${todoId}`);
});
 
 
// creating a new todo item
todosrouter.post("/api/todos", (req, res) => {
  // get the data from the request body
  const data = req.body;
 
  console.log(data);
 
  // send back the data
  res.json({
    status: 200,
  });
});
 
 
// updating a todo item
todosrouter.put("/api/todos/:id", (req, res) => {
  // get the todo id from the url
  const todoId = req.params.id;
  const data = req.body;
 
 
  res.json({ ...data, id: todoId });
});
 
 
// deleting a todo item
todosrouter.delete("/api/todos/:id", (req, res) => {
  // get the todo id from the url
  const todoId = req.params.id;
 
 
  res.send(`Deleting todo with id ${todoId}`);
});
 
export default todosrouter;
