const express = require('express')
const mergePDFs = require('./utils/mergePDFs')
const bodyPsrser = require('body-parser')
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyPsrser.urlencoded({ extended: false }))
app.use(express.json())

const upload = multer({
  dest: 'uploads/'
})

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Merge your pdfs for free'
  })
})

app.post('/merge', upload.array('pdfs', 2), async (req, res) => {
  const title = req.body.title;
  const filename = await mergePDFs(req.files[0].path, req.files[1].path, title);

  res.redirect(`/pdfs/${filename}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})