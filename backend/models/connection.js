const mongo = require('./mongo')();
const mongoose = require('mongoose');

const connection = mongoose.connect(
  'mongodb+srv://' + dbUser() + ':' + dbPass() + '@' + dbName().toLowerCase() + '.wos9g.mongodb.net/' + dbName() + '?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch(() => {
    console.log('Unable to connect to MongoDB Atlas');
  });

module.exports = connection;
