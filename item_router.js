const express = require('express');

const router = express.Router();


//middleware only applicable to items
router.use((req, res, next) => {
    //insert logic here if you want middleware
    next();
});

// /api/items/
router.get('/', (req , res) => {
    res.json({ suppliers: [
        {name: 'coffee beans', s_id: 1},
        {name: 'more coffee beans', s_id: 1},
        {name: 'some tea', s_id: 3},
        {name: 'chocolate syrup', s_id: 2}
    ]});
});

// /api/items/
router.post('/', (req , res) => {
    const supplier = req.body; 
    res.status(201).json({ created: supplier });
})

// /api/items/:id
router.delete('/:id', (req , res) => {
    const id = req.params.id;
    res.json({ deleted: id });
});

module.exports = router;