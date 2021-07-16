export {
 find,
 findById
}

const skills = [
 {text:'Procastination', done: true,  _id:001},
 {text:'Focus' , done: true,   _id:002},
 {text:'persistent', done: true,   _id:003},
]                

function findByIdAndDelete(id, callback) {
 try{
  const idx = skills.findIndex(skill =>  skill._id == parseInt(id))
  const deletedSkill = skills.splice(idx,1)
  if (!deletedSkill.length) throw new Error ('Skill was not deleted')
  return callback(null,deletedSkill[0])
 } catch(err) {
  return callback(err, null)
 }
}

function create(skill, callback) {
 skill._id = Date.now() % 1000000
skill.done = true
console.log(skill)
skills.push(skill)
return callback(null, skill)
}

const findById = (id, callback) => {
 try{
  const skill = skills.find(skill => skill._id === parseInt(id))
  if (!skill) throw new Error ('No skills here.')
  return callback(null, skill)
 } catch (err) {
  console.log(error)
  return callback(null, skill)
 }
}

const find = (conditions, callback) => {
 
 try {
  if (!(conditions instanceof Object)){
     throw new TypeError('Please pass in an object')
   }
    if (Object.keys(conditions).length === 0) return callback(null, skill)
 } catch (err) {
   console.log(error)
   callback(err, [])
 }
}