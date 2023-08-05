const homeController = require('../app/http/controllers/homeController')
const cartController = require('../app/http/controllers/customers/cartController')
const { stripPublicDir } = require('laravel-mix/src/File')
function initRoutes(app){
   
    app.get('/',  homeController().index)
  
   app.get('/cart', cartController().index)

   app.post('/update-cart', cartController().update)
}

module.exports = initRoutes