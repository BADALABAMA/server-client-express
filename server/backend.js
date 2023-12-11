const express = require('express');
const cors = require('cors');
const app = express();
const blogData = [];
app.use(cors());
app.use(express.json());

app.get('/post', (req, res) => {
  res.send({
    label: 'hello',
    descr: 'world',
  });
});
app.get('/data', (req, res) => {
  res.send({
    blogData,
  });
});
app.post('/data', (req, res) => {
  const requestBody = req.body;
  blogData.push({
    id: requestBody.id,
    title: requestBody.title,
    isRead: requestBody.isRead,
  });
  res.setHeader('Content-Type', 'application/json');
  res.status(201).json({
    id: requestBody.id,
    title: requestBody.title,
    isRead: requestBody.isRead,
  });
});

// app.post('/blog', (req, res) => {
//   res.setHeader('Content-Type', 'application/json');
//   res.status(201);
//   res.send({
//     id: 1,
//     title: 'kivi',
//     isDead: true,
//   });
// });

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
