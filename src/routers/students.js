const express = require('express')
const router = express.Router()
const Student = require('../model/student')

router.get('/', async (req, res) => {
  try {
    const students = await Student.find()
    res.json(students)
  } catch(err) {
    res.send('Erro ao buscar estudantes')
  }
})

router.post('/', async (req, res) => { //cadastra aluno
  const student = new Student({
    nome: req.body.nome,
    idade_ate_31_12_2016: req.body.idade_ate_31_12_2016,
    ra: req.body.ra,
    campus: req.body.campus,
    municipio: req.body.municipio,
    curso: req.body.curso,
    modalidade: req.body.nivel_do_curso,
    data_inicio: req.body.data_inicio
  })
  try {
    const s1 = await student.save()
    res.json('Aluno cadastrado com sucesso!')
  } catch(err) {
    res.json('Erro ao cadastrar estudante :(')
  }
})

router.get('/:ra', async (req, res) => { //busca aluno por ra
  try {
    const students = await Student.find({ ra: req.params.ra })
    res.json(students)
  } catch(err) {
    res.send("Estudante não encontrado")
  }
})

router.delete('/', async (req, res) => { //deleta aluno
  try {
    const students = await Student.deleteMany(
      { ra: req.body.ra },
      { campus: req.body.campus }
    )
    res.json('Estudante deletado com sucesso!')
  } catch (error) {
    res.json('Erro ao deletar estudante :(')
  }
})

module.exports = router