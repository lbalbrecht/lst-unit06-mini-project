console.log("linked");
var searchTerm = document.querySelector("#search-term");
var searchFormat = document.querySelector("#search-format");
var searchButton = document.querySelector("#search-button");
var searchWindow = document.querySelector("#search-window");
var articleTitle;
var articleAuthors;
var articleDate;
var articleSubject;
var articleDescription;
var articleLink;


// function displayArticles(data) {
//     console.log(data);
//     console.log(data.results.length);
//   for (let i = 0; i < data.results.length; i++) {
//     articleTitle = data.results[i].title; 
//     //console.log(articleTitle);
//     //console.log(articleAuthors);
//     articleDate = data.results[i].date;
//     articleSubject = data.results[0].subject.join(", ");
//     articleDescription = data.results[0].description[0];
//     articleLink = data.results[0].url;
//   }
// }

var articleCardEL = document.querySelector('#article-card');
var articleTitle = document.getElementById("article-title");
var articleDate = document.getElementById("article-date");
var articleSubject = document.getElementById("article-subject");
var articleLink = document.getElementById("article-link");

var displayArticle = function (article) {
    if (article.length === 0) {
      articleCardEl.textContent = 'No articles found.';
      return;
    }

    for (var i = 0; i < article.length; i++) {
      var articleTitle = article.results[i].title;
      var articleDate = article.results[i].date;
      var articleSubject = article.results[i].description[0];
      var articleLink = data.results[i].url;

    // testing variables
      // var articleTitle = "article.results[i].title";
      // var articleDate = "article.results[i].date";
      // var articleSubject = "article.results[i].description[0]";
      // var articleLink = "data.results[i].url";

      var varText =  
      `
      <div class="col s12">
      <div class="card blue-grey darken-1">
          <div class="card-content white-text">
              <span class="article-title" id="article-title">`+articleTitle+`</span>
              <p id="article-date">`+articleDate+`</p>
              <p id="article-subject">`+articleSubject+`</p>
              <p id="article-description">Description</p>
          </div>
          <div class="card-action">
              <a href="#`+articleLink+`" class="waves-effect waves-light btn-small" id="read-more">Read More</button> </a>
          </div>
      </div>
  </div>
    `;
  
      articleCardEl.innerHTML = varText;
    }
};

function formSubmitHandler(term, format) {
  if (!format) {
    format = "search";
  }
  var apiUrl = `https://www.loc.gov/${format}/?q=${term}&fo=json`;

  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        displayArticle(data);
      });
    }
  });
}


formSubmitHandler("constitution");

// searchButton.addEventListener(
//   "submit",
//   formSubmitHandler(searchTerm, searchFormat)
// );

