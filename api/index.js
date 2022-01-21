//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, Country } = require('./src/db.js');
const axios = require('axios').default;

//precargando datos de la api
const peticionApi = async function (){
  try{ //si no le ponía try and catch la promesa quedaba como unhandled
  const Api = await axios.get(`https://restcountries.com/v3/all`)
  const datosBd = Api.data.map(el =>{ //llamo una sola vez a la API y dejo toda la info en mi DB
    return {
      id: el.cca3,
      name: el.name.common,
      img: el.flags[0],
      continente: el.region,
      capital: el.capital === undefined || el.capital.lenght < 1 ? 'undefined' : el.capital[0],
      subregion: el.subregion,
      area: el.area,
      poblacion: el.population,
      region: el.region
    }})
  const aux = await Country.bulkCreate(datosBd) //guardando en la base de datos
  }
  catch(error){ //aca agarro el error si existe
  }
}
// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  peticionApi()

  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  })
});