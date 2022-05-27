import { mainScreenArticles } from "./articles-data.js";

const mainScreen = document.querySelector(".main-screen");

mainScreen.innerHTML = `
<div class="main-article">
  <a href=${mainScreenArticles.main.url}> 
    <div>
      <p>${mainScreenArticles.main.category}</p>
      <h4>${mainScreenArticles.main.title}</h4>
    </div>
  </a>
</div>


<div class="secondary-articles">
  <div class="sec-article-1">
    <a href=${mainScreenArticles.main.url}>
      <div>
        <p>${mainScreenArticles.secondary.sec1.category}</p>
        <h4> ${mainScreenArticles.secondary.sec1.title} </h4>
      </div>
    </a>
  </div>
    <div class="sec-article-2">
      <a href=${mainScreenArticles.main.url}>
        <div>
          <p>${mainScreenArticles.secondary.sec2.category}</p>
          <h4>${mainScreenArticles.secondary.sec2.title}</h4>
        </div>
      </a>
    </div>
</div>
`;

const mainArticleElement = document.querySelector(".main-article");
if (mainArticleElement) {
  mainArticleElement.style.background = `url(${mainScreenArticles.main.image}) no-repeat center center`;
  mainArticleElement.style.backgroundSize = `100% 100%`;
}

const sec1Article = document.querySelector(".sec-article-1");
if (sec1Article) {
  sec1Article.style.background = `url(${mainScreenArticles.secondary.sec1.image}) no-repeat center center`;
  sec1Article.style.backgroundSize = `100% 100%`;
}

const sec2Article = document.querySelector(".sec-article-2");
if (sec2Article) {
  sec2Article.style.background = `url(${mainScreenArticles.secondary.sec2.image}) no-repeat center center`;
  sec2Article.style.backgroundSize = `100% 100%`;
}
