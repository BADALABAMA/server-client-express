const express = require('express');
const cors = require('cors');
const app = express();
const toDoData = [];

app.use(cors());
app.use(express.json());

app.get('/todoList', (req, res) => {
  res.send({
    toDoData,
  });
});
app.post('/todoList', (req, res) => {
  const requestBody = req.body;

  res.setHeader('Content-Type', 'application/json');

  res.status(201).json({
    title: requestBody.title,
    description: requestBody.description,
  });
  if (requestBody.isReady === 'true') {
    toDoCompleteData.push({
      title: requestBody.title,
      description: requestBody.description,
    });
    console.log(toDoCompleteData);
  } else {
    toDoData.push({
      title: requestBody.title,
      description: requestBody.description,
    });
  }
});

app.delete('/todoList/:title', (req, res) => {
  const titleToRemove = req.params.title;
  const foundedTitle = toDoData.find((todo) => todo.title === titleToRemove);

  if (foundedTitle) {
    const indexToRemove = toDoData.indexOf(foundedTitle);
    toDoData.splice(indexToRemove, 1);
    res.status(200).json({ message: 'Todo deleted successfully' });
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
