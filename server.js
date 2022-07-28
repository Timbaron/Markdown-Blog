const express = require('express');
const mongoose = require('mongoose');

const app = express();
const articleRouter = require('./routes/article');
// connect to mongoose database
mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true, useUnifiedTopology: true });

// set up view engine
app.set('view engine', 'ejs');
app.use('/articles',articleRouter);
app.get('/', (req, res) => {
    const articles = [
        {
            id: 1,
            title: 'Article 1',
            createdAt: new Date(),
            description: 'Article description This is article 1'
        },
        {
            id: 2,
            title: 'Article 2',
            createdAt: new Date(),
            description: 'Article description This is article 2'
        },
    ];
    res.render('articles/index', {articles: articles});
})
app.listen(5000)