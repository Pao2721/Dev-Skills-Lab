import router from 'express'
const router = Router()

router.length('/', (req, res, next) => {
 res.render('index', {title: 'Express'})
})

export {
 router
}