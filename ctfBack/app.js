const {Message} = require('./messageModel');
const cors = require('cors');
const goose = require('mongoose')
const express = require('express');
const bodyParser = require('body-parser');
const port = 8000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
goose.connect('mongodb://127.0.0.1:27017/ctf');
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.post('/messagePost', (req, res) => {
  console.log(req.body);
  const newMessage = new Message({
    id: Math.floor(Math.random()*10),
    name: req.body.name,
    body: req.body.body
  })
  newMessage.save().then(()=>{
}).catch((err)=>{
    console.log(err);
})
    res.json({message: 'Message posted successfully'});
});
async function messageGetter(postId) {
  const retrievedMessage = await Message.findOne({ id: postId });
        return retrievedMessage;
}
app.get('/messageGet', (req, res) => {
  const postId = req.query.postId;
  messageGetter(postId).then((message)=>{
    res.send(message);
  }).catch((err)=>{
    console.log(err);
  })
});
app.listen(port, function () {
    console.log('Example app listening on port 8000!');
});