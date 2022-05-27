import { featuredArticlesList } from "./articles-data.js";

const featuredArticleElement = document.querySelector(
  ".featured-articles-screen"
);

let articleContent = ``;

for (const i of featuredArticlesList) {
  articleContent += `
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

featuredArticleElement.innerHTML = articleContent;
