const mongoose = require('mongoose');
const { MONGODB_URI } = require('./utils/config');

const connectToDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {

      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
      useCreateIndex: true

    });

    console.log('Connected to MongoDB!');
  } catch (error) {
    console.error(`Error while connecting to MongoDB: `, error.message);
  }
};

module.exports = connectToDB;
