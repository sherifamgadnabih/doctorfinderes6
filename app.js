var express = require('express')
var app = express()
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
app.use('/Views', express.static('dist/index.html'))
app.use('/node_modules', express.static('node_modules'))
app.use('/dist', express.static('dist'))
app.use('/assests', express.static('dist/assests'))
app.use('/Images', express.static('Images'))
app.use('/styles', express.static('src/styles'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(function (req, res, next) {
 // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost')

    // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

    // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
})
mongoose.connect('mongodb://localhost/Doctors')
var Doctor = require('./Models/Doctor.js')
var Speciality = require('./Models/Speciality.js')
app.get('/', function (request, response) {
  response.write('Hello World')
  response.end()
})

app.post('/AddDoctor', function (request, response) {
  var newdoctor = Doctor(request.body)
  newdoctor.save(function (err) {
    if (err) {
      response.write('failed to add doctor')
    } else {
      response.write('Doctor Added')
    }

    response.end()
  })
})

app.get('/Doctors', function (request, response) {
  Doctor.find().populate('Speciality').exec(function (err, doctors) {
    if (err) {
      response.json({info: 'error during find Doctors', error: err})
    };
    response.json({info: 'Doctors found successfully', data: doctors})
  })
})
app.get('/Specialities', function (request, response) {
  Speciality.find(function (error, specialities) {
    if (error) {
      response.json({info: 'error during find Doctors', error: error})
    };
    response.json({info: 'specialities found successfully', data: specialities})
  })
})
app.post('/AddSpeciality', function (request, response) {
  var newSpeciality = Speciality(request.body)
  newSpeciality.save(function (error) {
    if (error) {
      response.write('failed to add doctor')
    } else {
      response.write('Speciality Added')
    }

    response.end()
  })
})
app.delete('/DeleteSpeciality/:Id', function (request, response) {
  Speciality.findById(request.params.Id, function (err, speciality) {
    if (err) {
      response.json({info: 'error during find doctor', error: err})
    };
    speciality.remove()
    response.end()
  })
})
app.get('/Doctors/:Id', function (request, response) {
  Doctor.findById(request.params.Id, function (err, doctor) {
    if (err) {
      response.json({info: 'error during find doctor', error: err})
    };
    response.json({info: 'doctor found successfully', data: doctor})
  })
})
app.delete('/DeleteDoctor/:Id', function (request, response) {
  Doctor.findById(request.params.Id, function (err, doctor) {
    if (err) {
      response.json({info: 'error during find doctor', error: err})
    };
    doctor.remove()
    response.end()
  })
})
app.listen(8080, function () {
  console.log('server is runnig')
})
