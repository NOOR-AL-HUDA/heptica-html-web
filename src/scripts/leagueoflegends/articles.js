import {
  mainScreenArticle,
  popularArticlesList,
  featuredArticlesList,
} from "./articlesData.js";

const mainScreen = document.querySelector(".lol-main-screen");

mainScreen.innerHTML = `
<div class="lol-main-article">

  <a href=${mainScreenArticle.url}> 
  <div class="lol-main-article-image">
  </div>
  <div class='lol-main-article-detail'>
      <p>${mainScreenArticle.category}</p>
      <h4>${mainScreenArticle.title}</h4>
    </div>
  </a>
</div>
`;

const mainArticleElement = document.querySelector(".lol-main-article-image");
if (mainArticleElement) {
  mainArticleElement.style.background = `url(${mainScreenArticle.image}) no-repeat center center`;
  mainArticleElement.style.backgroundSize = `100% 100%`;
}

// * Popular Articles

const poplarArticleElement = document.querySelector(".popular-articles-screen");

let pArticleContent = ``;

for (const i of popularArticlesList) {
  pArticleContent += `
    <div class="particle-box" id=${i.keywords}>
        <a href=${i.url}>
            <div class="particle-image">
                <img src=${i.image} alt="${i.title}">
            </div>
            <div class="particle-detail">
                <p>${i.category}</p>
                <h4>${i.title}</h4>
            </div>
        </a>
    </div>
    `;
}

poplarArticleElement.innerHTML = pArticleContent;

// * Featured Articles
const featuredArticleElement = document.querySelector(
  ".featured-articles-screen"
);

let fArticleContent = ``;

for (const i of featuredArticlesList) {
  fArticleContent += `
    <div class="particle-box" id=${i.keywords}>
        <a href=${i.url}>
            <div class="particle-image">
                <img src=${i.image} alt="${i.title}">
            </div>
            <div class="particle-detail">
                <p>${i.category}</p>
                <h4>${i.title}</h4>
            </div>
        </a>
    </div>
    `;
}

featuredArticleElement.innerHTML = fArticleContent;
