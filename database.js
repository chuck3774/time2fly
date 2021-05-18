const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/time2fly', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.set('useFindAndModify', false);

const Run = mongoose.model('Run', {
  distance: Number, time: Number, date: String, shoe: String, description: String
});
module.exports = {Run};