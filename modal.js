var articleCardEL = document.querySelector('#article-card');
var articleTitle = document.getElementById("article-title");
var articleDate = document.getElementById("article-date");
var articleSubject = document.getElementById("article-subject");
var articleLink = document.getElementById("article-link");

var displayArticle = function (article) {
    // if (article.length === 0) {
    //   articleCardEl.textContent = 'No articles found.';
    //   return;
    // }

    // for (var i = 0; i < article.length; i++) {
    for (var i = 0; i < 4; i++) {
    //   var articleTitle = article.results[i].title;
    //   var articleDate = article.results[i].date;
    //   var articleSubject = article.results[i].description[0];
    //   var articleLink = data.results[i].url;

    // testing variables
      var articleTitle = "article.results[i].title";
      var articleDate = "article.results[i].date";
      var articleSubject = "article.results[i].description[0]";
      var articleLink = "data.results[i].url";

      var varText =  
      `
<div id="article-card" class="list-group">
    <h6 id="article-title">`+articleTitle+`<span id="article-date">`+articleDate+`</span></h6>
      <p id="article-subject">`+articleSubject+`</p>
      <p id="Description">blah blah blah</p>
    <div id="article-link"><a href="`+articleLink+`">Read more...</a></div>
</div>
    `;
  
      articleCardEl.innerHTML = varText;
    }
};
  
displayArticle();
