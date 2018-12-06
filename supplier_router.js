const express = require('express');

const router = express.Router();

//middleware only applicable to suppliers
router.use((req, res, next) => {
    //insert logic here if you want middleware
    next();
});

// /api/suppliers/
router.get('/', (req , res) => {
    res.json({ suppliers: [
        {name: 'coffee roaster', id: 1},
        'food vendor',
        'tea distributor'
    ]});
});

// /api/suppliers/
router.post('/', (req , res) => {
    const supplier = req.body; 
    res.status(201).json({ created: supplier });
})

// /api/suppliers/:id
router.delete('/:id', (req , res) => {
    const id = req.params.id;
    res.json({ deleted: id });
});

module.exports = router;