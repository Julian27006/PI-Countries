const { Router } = require('express');
const router = Router();
const { Country, Activity } = require('../db.js')

router.get('/', (req, res, next) => {
    return Activity.findAll({})
    .then((actividadesCreadas) => {
        res.json(actividadesCreadas)
    })
    .catch((error) => {
        next(error)
    }) 
})

router.post('/', async (req, res, next) => {
    const {name,dificultad,duracion,temporada,countryid} = req.body
    try {
        if(name && dificultad && duracion && temporada){
            let activityCreated = await Activity.create({
                    name,
                    dificultad ,
                    duracion ,
                    temporada,
                })
    try {
        let country = await Country.findAll({
            where:{
                id : countryid
            }})
            await activityCreated.addCountries(country)
            res.send(country)
    }
    catch (error) {
            next(error)
        }
    }
    else{
        res.status(404).send("Error no ingresaste los campos correctamente")
        }
    }
    catch (error) {
        next(error)
        }
    });

module.exports = router;