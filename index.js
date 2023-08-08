const express = require('express')
const cors = require('cors')

const app = express();

require('./drivers/connect-db')

app.use(express.json())
app.use(cors())

app.set('PORT', process.env.PORT || 3500)

app.use('/products', require('./routes/products'))
app.use('/users', require('./routes/users'))

app.listen(app.get('PORT'), ()=> console.log(`Escuchando por el puerto ${app.get('PORT')}`))