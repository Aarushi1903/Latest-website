const Menu  = require('../../models/menu')
function homeController(){
     return{
        async index(req,res) {
            // Menu.find().then(function(food){
            //     console.log("Home page")
            //     res.render('home', {food:food})
            // })
            console.log("Home page")
            const food = await Menu.find()
            return res.render('home', {food:food})
            
        }
     }
}

module.exports = homeController