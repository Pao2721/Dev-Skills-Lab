import * as skillDb from '../data/skill-db.js'

export{
 index,
 show
}

function index(req, res) {
 skillDb.find({},(err, skills) => {
  res.render('skills/index', {
   skills,
   err
  })
 })
}

function show(req, res) {
 skillDb.findById(req.params.id, (err, skill) => {
  res.render('skills/show', {
   skill,
   err 
  })
 })
}