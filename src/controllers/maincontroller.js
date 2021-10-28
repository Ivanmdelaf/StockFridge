const dishes = require('../models/dishes');

const mainController = {
    show: (req,res)=>{
        dishes.find({}).sort({expiry_date: 'asc'}).exec((err,item)=>{
            if(!err){
                res.render('index',{dish: item});
            }else{
                console.log(err)
            }
        });
        
    },
    add: async(req,res)=>{
        //Save Data into database.    
        const newDish = new dishes(req.body);
        await newDish.save()

        res.redirect('/');
    },
    remove: async(req,res)=>{
        //Delete Data into database.
        const {id} = req.params;
        await dishes.deleteOne({_id: id})
        res.redirect('/');
    },
    edit: async(req,res)=>{
        const {id} = req.params;
        const x = await dishes.findById(id)
        res.render('edit',{x});
    },
    update: async(req,res)=>{
        const {id} = req.params;
        const x = await dishes.updateOne({_id: id},req.body);
        res.redirect('/');
    }
}

module.exports = mainController;