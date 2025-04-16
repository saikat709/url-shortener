const express = require('express');
const UrlModel = require('../models/Url.model');
const BasicRouter = express.Router();


const getUrlOfId = ( id ) => {
    return `localhost:3000/${id}`;
}

BasicRouter.get('/', (req, res)=>{
    res.render('index', { title: 'Saikats site', 'shortUrl': ''  });
});

BasicRouter.post('/generate', async (req, res) => {
    const { url } = req.body;
    try {
        const urls = await UrlModel.find();
        const newId = urls.length > 0 ? urls[urls.length-1].id + 1 : 1;
        const result = await UrlModel.create({ 
            id: parseInt(newId),
            actual: url,
        });
        //res.render('home', { title:'Generated short url', 'shortUrl':  getUrlOfId(result.id) });
        res.render('output', {
            originalUrl: 'https://example.com/your-long-url',
            shortUrl: `https://sho.rt/9328`
        });
    } catch( err ){
        res.send(`An error occured.\n${err}`)
    }
});

BasicRouter.get("/contact", ( req, res)=>{
    res.render("contact");
})

BasicRouter.get("/about", ( req, res)=>{
    res.render("about");
})


BasicRouter.get('/:id', async (req, res)=>{
    try {
        const { id } = req.params;
        const urlObj = await UrlModel.findOne({ id: parseInt(id) });
        res.redirect(urlObj.actual);
    } catch ( err ){
        res.status(404).render("404"); //.send({ message: err.message });
    }
}); 


module.exports = BasicRouter;