const express = require('express')
const router = express.Router()
const Student = require('../model/student')

router.get('/', async (req, res) => { //OK lista por modalidade
  try {
    const students = await Student.aggregate([
      {
        $match: { data_inicio: { $gte: req.body.periodo_inicial, $lt: req.body.periodo_final }, modalidade: req.body.modalidade }
      }
    ]).sort({ data_inicio: -1 })
    res.json(students)
  } catch(err) {
    res.json('Erro ao encontrar itens por modalidade e período')
  }
})




module.exports = router