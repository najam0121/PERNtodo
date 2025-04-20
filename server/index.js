const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middlware
app.use(cors());
app.use(express.json());

//routes

// create
app.post("/todos", async (req, res) => {
    console.log("reaced");
  try {
    const client = await pool.connect();
    console.log(client);
    const { description } = req.body; // Extract description from request body
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES ($1) RETURNING *",
      [description]
    );
    res.json(newTodo.rows[0]); // Send the new todo as JSON
    client.release();
  } catch (err) {
    console.log(err);
    res.json({"Error":err});
  }
});

// get all
app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ErrorMsg:"Something is wrong in the browser"})
  }
});

//get a
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id]
    );

    res.json("todo was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

//delete
app.delete('/todos/:id', async (req, res) => {
    try {
      const client = await pool.connect();
      const { id } = req.params; 
      const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
  
      res.json("Todo was deleted !");
    } catch (err) {
      console.error(err.message);
    }
  });



app.listen(5000, () => {
  console.log("srver has been started on the port 5000");
});

  