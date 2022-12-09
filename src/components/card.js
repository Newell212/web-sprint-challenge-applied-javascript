import axios from "axios";

const Card = (article) => {
  const div = document.createElement('div');
  div.setAttribute('class', 'card');

  const headline = document.createElement('div');
  headline.setAttribute('class', 'headline');
  headline.textContent = article.headline;
  div.appendChild(headline);

  const author = document.createElement('div');
  author.setAttribute('class', 'author');
  div.appendChild(author);

  const imgCont = document.createElement('div');
  imgCont.setAttribute('class', 'img-container');
  author.appendChild(imgCont);

  const imgTag = document.createElement('img');
  imgTag.src = article.authorPhoto;
  imgCont.appendChild(imgTag);

  const span = document.createElement('span');
  span.textContent = article.authorName;
  author.appendChild(span);

div.addEventListener("click", () => {
  console.log(headline);
})

  return div;  

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const cardAppender = (selector) => {
  let URL = 'http://localhost:5001/api/articles';
  console.log(URL)
  axios.get(URL)
  .then(res => {

    const articles = res.data.articles;
    
    articles.bootstrap.forEach(article => document.querySelector(selector).appendChild(Card(article)));
    articles.javascript.forEach(article => document.querySelector(selector).appendChild(Card(article)));
    articles.jquery.forEach(article => document.querySelector(selector).appendChild(Card(article)));
    articles.node.forEach(article => document.querySelector(selector).appendChild(Card(article)));
    articles.technology.forEach(article => document.querySelector(selector).appendChild(Card(article)));

  })
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
