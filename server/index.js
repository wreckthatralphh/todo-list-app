import express from "express"
import todosrouter from "./routes/todos.js";
const app = express()

const port = 3001;

app.get("/", (req, res) => {
    res.send("Hello Todo App!!!");
  });

  app.listen(port, () => {
    console.log(`Listening to port ${port}`);
  });
  app.use("/todo",todosrouter)