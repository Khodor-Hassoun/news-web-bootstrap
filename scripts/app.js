const title = document.getElementById('title');
const date = document.getElementById('date');
const article = document.getElementById('news-article');
const articlesLink = 'http://localhost/news-web-bootstrap/api/getArticles.php'


// getJSON returns an array of objects
$.getJSON(articlesLink, (e)=>{
    res = e;
    console.log(res.title)
})



