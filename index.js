const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 4200;
app.use(cors());

const chefs = require('./data/chefsData.json');
const recipes = require('./data/recipesData.json')
const bannerContent = require('./data/bannerData.json')
const faqs = require('./data/faqs.json')
app.get('/', (req,res)=>{
    res.send(chefs)
})
app.get('/chefs', (req, res)=>{
    res.send(chefs)
})
app.get('/faqs', (req, res) => {
    res.send(faqs)
})
app.get('/chefs/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    const selectedChef = chefs.find(chef => parseInt(chef.id) === id);
    res.send(selectedChef);
})
app.get('/recipes', (req,res)=> {
    res.send(recipes)
})
app.get('/recipes/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const chefRecipes = recipes.filter(recipe => parseInt(recipe.chefId) === id)
    res.send(chefRecipes)
})
app.get('/banner', (req,res)=>{
    res.send(bannerContent)
})
app.listen(port)