    // routes/pricing.js
const express = require('express');
const router = express.Router();
const { calculatePrice } = require('../Services/priceCalculator');

router.post('/calculate', async (req, res) => {
   const { zone, organization_id, total_distance, item_type } = req.body;
   // Fetch pricing details from the database based on the request parameters
   // For simplicity, we'll assume we have a function `getPricingDetails` that does this
   const pricingDetails = await getPricingDetails(zone, organization_id, item_type);
   const totalPrice = calculatePrice(total_distance, pricingDetails.fixPrice, pricingDetails.kmPrice);
   res.json({ total_price: totalPrice });
});

module.exports = router;
