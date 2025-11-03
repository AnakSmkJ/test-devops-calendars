const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connect Db Success');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
