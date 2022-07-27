const router = require('express').Router();

//this is the router for all of the routes, connecting the front and back ends
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes');

router.use('/api', apiRoutes);

router.use('/', homeRoutes);

router.use('/dashboard', dashboardRoutes);

module.exports = router;
