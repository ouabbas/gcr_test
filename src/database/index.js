const mongoose = require('mongoose');
const { connect, set } = mongoose;

mongoose.connection.on('connected', () => {
  console.log('Connection mongodb Established');
});

mongoose.connection.on('reconnected', () => {
  console.log('Connection Reestablished');
});

mongoose.connection.on('disconnected', () => {
  console.log('Connection Reestablished');
});

mongoose.connection.on('close', () => {
  console.log('Connection Closed');
});

mongoose.connection.on('error', (error) => {
  console.log('DB ERROR', error);
});

set('debug', true);
connect(
  'mongodb+srv://admin:admin@cluster0.e7dvd2z.mongodb.net/?retryWrites=true&w=majority',
  { useUnifiedTopology: true, useNewUrlParser: true }
);
