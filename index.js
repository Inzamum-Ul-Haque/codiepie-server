const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

const categories = require("./data/categories.json");
const allCourses = require("./data/courses.json");

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.get("/allCourses", (req, res) => {
  res.send(allCourses);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourses = allCourses.filter(
    (course) => course.category_id === id
  );
  res.send(selectedCourses);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
