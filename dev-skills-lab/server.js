import createError from 'http-errors'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import methodOverride from 'method-override'

import { router as indexRouter } from './routes/index.js'
import { router as skillsRouter} from './routes/skills.js'


const app = express()

//View Engine Steup
app.set(
 'views',
 path.join(path.dirname(fileURLToPath(import.meta.url)), 'views')
)

app.set('view engine', 'ejs')

app.use((req,res,next) => {
 console.log('Hello SEi')
 req.time = new Date().tolocateTimeString()
 next()
})

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(
express.static(
  path.join(path.dirname(fileURLToPath(import.meta.url)), 'public')
  )
)

app.use(methodOverride('_method'))
app.use('/', indexRouter)
app.use('/todos', todosRouter)

//404 Error Handler
app.use(function (err, req, res, next) {
 res.locals.message = err.message
res.locals.error = req.app.get('env') === 'development' ? err : {}

//Renders the Error Page
res.status(err.status || 500)
res.render('error')
})

export { app }