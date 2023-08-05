const homeController = require('../app/http/controllers/homeController')
const cartController = require('../app/http/controllers/customers/cartController')
const orderController = require('../app/http/controllers/customers/orderController')
const { stripPublicDir } = require('laravel-mix/src/File')
function initRoutes(app){
   
    app.get('/',  homeController().index)
  
   app.get('/cart', cartController().index)

   app.post('/update-cart', cartController().update)

   app.post('/orders', orderController().store)
}
module.exports = initRoutes