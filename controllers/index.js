//controllers talk to model so we need to make sure that occurs.
const schemas = require('../models/schemas.js')

//export methods so we can ref. in our routers.
module.exports = {
    //render our index.ejs (homepage) and find all restaurant data we have in database and display
    getHome:  async (req, res) => {
        let menu = schemas.menu
        let sesh = req.session

        let menuResult = await menu.find({})
        .then((menuData) => {
            res.render('index', {title: 'Menu Tracker', data: menuData, search: '', loggedIn: sesh.loggedIn})
        })
    }
    //query database based on what user typed on search box
    getSearch: async (req, res) = > {
        let menu = schemas.menu
        let sesh = req.session
        let q = req.body.searchInput
        let menuData = null 
        //set up parameters of the search, tell mongoose to only look for things that start with our query, and ignore case
        let qry = {name:{$regex: '^' + q, $options: 'i'}}

        if (q != null) {
            let menuResult = await menu.find(qry)
            .then((data) => {
                menuData = data
            })
        } else {
            q = 'search'
            let menuResult = await menu.find({})
            .then((data) => {
                menuData = data
            })
        }
        res.render('index', {title: 'Menu Tracker', data: menuData, search: q, loggedIn: sesh.loggedIn}) 


    }
}