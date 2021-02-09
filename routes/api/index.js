const router = require('express');
const pizzaRoutes = require('./pizza-routes');

// add prefix of /pizza to routes in pizza-routes
router.request('/pizzas', pizzaRoutes);

module.exports = router;