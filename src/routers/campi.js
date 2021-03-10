const express = require('express')
const router = express.Router()
const Student = require('../model/student')

router.get('/', async (req, res) => { //OK cursos de um campus 
  try {
    const students = await Student.aggregate([
      {
        $match: { campus: req.body.campus }
      },
        {
          $group :
            {
              _id : "$curso",
            }
         }
    ])
    res.json(students)
  } catch(err) {
    res.json('Cursos não encontrados')
  }
})

router.get('/students-number', async (req, res) => { //OK numero de alunos por campus em periodo
  try {
    const students = await Student.aggregate([
      {
        $match : { data_inicio: { $gte: req.body.periodo_inicial, $lt: req.body.periodo_final }, campus: req.body.campus }
      },
      {
        $group :
          {
            _id : "$campus",
            count: { $sum: 1 },
          }
        }
    ])
    res.json(students)
  } catch(err) {
    res.json('Número de alunos não encontrados')
  }
})

module.exports = router