const title = document.getElementById('title');
const date = document.getElementById('date');
const article = document.getElementById('news-article');

const container = document.querySelector(".container-fluid")
const articlesLink = 'http://localhost/news-web-bootstrap/api/getArticles.php'


// getJSON returns an array of objects
$.getJSON(articlesLink, (res)=>{
    console.log(res)
    for (let article of res){
        const card = document.createElement('div');
        card.classList.add('card');

        const cardBody = document.createElement('div')
        cardBody.classList.add('card-body')

        const title = document.createElement('h5')
        title.classList.add('card-title')
        title.innerHTML = `${article.title}`

        const content = document.createElement('p')
        content.classList.add('card-text')
        content.innerHTML = article.newsContent

        // append items
        cardBody.append(title)
        cardBody.append(content)

        card.append(cardBody)

        container.append(card);



    }
})



