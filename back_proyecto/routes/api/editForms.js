const { Router } = require("express").Router();
const { json } = require("express");
const editReserva = require('../../models/editForm');

//todo  FALTA PROBAR LA PETICIÓN 
router.get('/:id', async (req, res) => {
    try {
        const editar = await getReservasById();
        res.json({ editar });
    } catch (error) {
        res, json({ error: error.message })
    }
})


module.exports = Router; 