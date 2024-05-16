const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('All OK!');
  res.json({message: 'Hello World'});
});

module.exports = router;