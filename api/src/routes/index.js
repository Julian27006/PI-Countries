const { Router } = require('express');
const CountryRoute = require ("./country.js");
const ActivityRoute = require ("./Activity.js")


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use ("/Country", CountryRoute);
router.use ("/Activity", ActivityRoute);


module.exports = router;
