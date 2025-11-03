const Events = require('../models/Events');

exports.createEvent = async (req, res) => {
  try {
    const eventData = await new Events(req.body).save();
    res.send(eventData);
    // console.log(req.body)
    // res.send('Create Event Success')
  } catch (err) {
    console.log(err);
    console.log('Server Error');
    res.status(500).send('Server Error');
  }
};

exports.listEvent = async (req, res) => {
  try {
    const listData = await Events.find({});
    res.send(listData);
    // console.log(req.body)
    // res.send('Create Event Success')
  } catch (err) {
    console.log(err);
    console.log('Server Error');
    res.status(500).send('Server Error');
  }
};

exports.currentMonth = async (req, res) => {
  try {
    // console.log(typeof req.body)
    const m = parseInt(req.body.mm);
    const currentM = await Events.find({
      $expr: {
        $eq: [
          {
            $month: '$start',
          },
          m,
        ],
      },
    }).sort({ start: 1 });
    res.send(currentM);
  } catch (err) {
    console.log(err);
    console.log('Server Error');
    res.status(500).send('Server Error');
  }
};
