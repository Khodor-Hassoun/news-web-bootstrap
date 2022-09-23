const title = document.getElementById('title');
const date = document.getElementById('date');
const article = document.getElementById('news-article');
const articlesLink = 'http://localhost/news-web-bootstrap/api/getArticles.php'


// const $ = require( "jquery" );
// getJSON returns an array of objects
$.getJSON(articlesLink, (e)=>{
    // console.log(e);

    res = e;
    console.log(res[0].id)
})



