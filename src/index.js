import express from "express"
import routerProd from '../src/routes/products.router.js'
import routerCart from '../src/routes/carts.router.js'

const app=express()

const PORT=8080

app.use(express.json()) //mi app entiende json
app.use(express.urlencoded({extended:true})) //mi app usa url largas

//Routers
app.use('/api/products',routerProd)
app.use('/api/carts',routerCart)

app.listen(PORT,()=>{
    console.log(`server on port ${PORT}`)
})