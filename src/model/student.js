const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
  nome: {
    type: String,
    require: true,
    upercase: true,
  },
  idade_ate_31_12_2016: {
    type: Number,
  },
  ra: {
    type: String, 
  },
  campus: {
    type: String,
    upercase: true,
  }, municipio: {
    type: String,
    upercase: true,
  },
  curso: {
    type: String,
    require: true,
    upercase: true,
  },
  modalidade: {
    type: String,
    require: true,
    upercase: true,
  },
  nivel_do_curso: {
    type: String,
    require: true,
    upercase: true,
  },
  data_inicio: {
    type: String,
    require: true,
  }
})

const Student = mongoose.model('Student', StudentSchema)

module.exports = Student