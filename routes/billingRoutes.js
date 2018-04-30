const privateKeys = require('../config/keys');
const stripe = require('stripe')(privateKeys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');


module.exports = app => {

  app.post('/api/stripe', requireLogin, async (req, res) => {

    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 FOR 5 CREDITS',
      source: req.body.id
    });

    // update the user credits and then update it in the database
    req.user.credits += 5;
    const user = await req.user.save();

    res.send(user);
  });

};
