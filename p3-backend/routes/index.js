const express = require('express');
const {Moneyhub} = require("@mft/moneyhub-api-client")
const config = require('../config');

const router = express.Router();

router.get('/', async (req, res) => {
  res.send({ message: 'Hello world' });

  const MoneyHubClient = await Moneyhub(config);
});

router.get('/accounts', async (req, res) => {
    const MoneyHubClient = await Moneyhub(config);
    try{
        res.send(await MoneyHubClient.getAccountsList({userId: '643689a230a27350665b0b6a', params: {offset: 0, limit: 10, showPerformanceScore: false, showTransactionData: false}}))
    } catch (err) {
        console.error(err);
    }
})

module.exports = router;