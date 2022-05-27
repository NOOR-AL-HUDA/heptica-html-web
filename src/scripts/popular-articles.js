import { popularArticlesList } from "./articles-data.js";

const poplarArticleElement = document.querySelector(".popular-articles-screen");

let articleContent = ``;

for (const i of popularArticlesList) {
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

poplarArticleElement.innerHTML = articleContent;
