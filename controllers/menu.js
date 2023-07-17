const schemas = require('../models/schemas.js')

module.exports = {
    getIndex: function (req, res) {
       res.render ('index', {title: 'Menu Items'})
    },
    editMenu: async(req,res) => {
        let sesh = req.session
  
        if (!sesh.loggIn) { 
            res.render ('menu', {title: 'Edit', loggedIn: false, error: "Invalid Request"})
        } else {
            let id = req.params.id
            let err = ''

            let menu = schemas.menu
            let qry= {_id:id}

            let itermResult = await menu.find(qry)
            .then((itemData) => {
                if (itemData == null) {
                    err = 'Invalid ID'
                }

                res.render ('menu', {title: 'Edit Menu', loggedIn: sesh.loggedIn , error: err})
            })
        }
    }
}