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

function formSubmitHandler(term, format) {
  if (!format) {
    format = "search";
  }
  var apiUrl = `https://www.loc.gov/${format}/?q=${term}&fo=json`;

  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        displayArticles(data);
      });
    }
  });
}

function displayArticles(data) {
    console.log(data);
    console.log(data.results.length);
  for (let i = 0; i < data.results.length; i++) {
    articleTitle = data.results[i].title; 
    console.log(articleTitle);
    console.log(articleAuthors);
    articleDate = data.results[i].date;
    articleSubject = data.results[0].subject.join(", ");
    articleDescription = data.results[0].description[0];
    articleLink = data.results[0].url;
  }
}

formSubmitHandler("constitution");

searchButton.addEventListener(
  "submit",
  formSubmitHandler(searchTerm, searchFormat)
);
