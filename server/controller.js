module.exports = {
    read: (req,res) => {
        // this grabs data from the "db" established in index.js file
        let db = req.app.get('db')

        // this works because inside the db folder we have the nationalParks.db file
        db.allHouses().then((response) => {
            res.send(response)
        })
    },


    create: (req, res, next) => {
        console.log(req.body)
        const dbInstance = req.app.get('db');
        const { name, address, city, state, zip, mortgage, rent } = req.body;
    
        dbInstance.createHouse(req.body)
          .then(() => res.sendStatus(200))
          .catch(err => {
            res.status(500).send({ errorMessage: "Something went wrong." });
            console.log(err)
          });
      },


    delete: (req, res) => {
        let db = req.app.get('db')
        let {id} = req.params
        let house = req.body
        house.id = id
        db.deleteHouse(house).then((response) => {
            res.send(response)
        }).catch(err => res.status(500).send(err))
    }
}
