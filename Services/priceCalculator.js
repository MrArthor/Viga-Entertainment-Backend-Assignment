// services/priceCalculator.js
const calculatePrice = (distance, basePrice, perKmPrice) => {
    let totalPrice = basePrice;
    if (distance > 5) {
      totalPrice += (distance - 5) * perKmPrice;
    }
    return totalPrice;
 };
 module.exports = { calculatePrice };
 