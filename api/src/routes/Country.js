const { Router } = require('express');
const { Country, Activity } = require('../db');
const { Op } = require('sequelize');
const router = Router();

router.get('/', async (req, res, next) =>{
    let Name = req.query.name
        if (Name) {    //ACA ME TRAIGO TODOS LOS PAISES
            try{
                let paQuery = await Country.findAll({
                    include: Activity,
                    where:{
                        name:{
                            [Op.iLike]: '%' + Name + '%'}}})
                if (!paQuery.length) {
                    return res.status(404).json('No se encontro el pais que estas buscando')
                }else{
                    return res.json(paQuery)
                }
            }
            catch(errro){
                next(error);
            }
        }
    try{
        const paisesBd = await Country.findAll({
            include: {model: Activity}
        })
        return res.json(paisesBd)
    }
    catch(error){
        next(error);
    }
    })
    
    router.get('/:id', async (req, res, next)=>{   
    try{
        const {id} = req.params;
        var ap = await Country.findByPk(id,{
        include: Activity,
        })
        return res.send(ap)
        }
    catch(error){
        next(error)
    }
    })

    // {                     ASI ME TRAIGO LA INFO PARA USAR EN DETAIL
    //     "id": "ARG",
    //     "name": "Argentina",
    //     "img": "https://flagcdn.com/ar.svg",
    //     "continente": "Americas",
    //     "capital": "Buenos Aires",
    //     "subregion": "South America",
    //     "area": 2780400,
    //     "poblacion": 45376763,
    //     "Activities": []  Lo incluyo en todas pero solo da informacion si viene con actividades
    // }
    
    
module.exports = router;



