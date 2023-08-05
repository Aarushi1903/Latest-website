const Order = require('../../../models/order')

function orderController (){
    return {
        store(req, res){
            const {Name, Contactno, Tableno} = req.body
            if(!Contactno || !Name || !Tableno){
                req.flash('error',' All fields are required')
                return res.redirect('/cart')
            }
            const order = new Order({
                items: req.session.cart.items,
                Contactno,
                Name,
                Tableno
            })
            order.save().then(result =>{
                req.flash('success', 'Order Placed Successfully')
                return res.redirect('/')
            }).catch(err =>{
                req.flash('error')
                return res.redirect('/cart')
            })
        }
    }
}

module.exports = orderController