const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://nknk:blood@ticket.s3d29.mongodb.net/?retryWrites=true&w=majority&appName=ticket', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

module.exports = mongoose;
