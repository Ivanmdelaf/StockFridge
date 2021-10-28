const main = require('../controllers/maincontroller');

const mainRoutes = (app)=>{
    //Show Main Page method : GET
    app.get('/', main.show);
    //Add New Food method: POST
    app.post('/',main.add);
    //Delete Food
    app.get('/delete/:id',main.remove);
    //Update Food
    app.get('/edit/:id',main.edit);
    app.post('/edit/:id',main.update)
}

module.exports = mainRoutes;