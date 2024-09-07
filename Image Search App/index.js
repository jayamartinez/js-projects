const apiKey = "Gbn6m9-mtiA0Fy_4CaXWsQ5O9A8w_CNm-3qgY7pKenk";

const searchBox = document.getElementById("search-input");
const searchBtn = document.getElementById('search-button');
const searchResults = document.querySelector(".search-results");
const showMoreBtn = document.getElementById("show-more-button")

let inputData = '';
let page = 1;

async function searchImages(query) {
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${apiKey}`
    const response = await fetch(url);
    var data = await response.json();

    const results = data.results;

    if(page === 1) {
        searchResults.innerHTML = ""
    }

    results.map((result) => {
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add("search-result");
        const image = document.createElement('img');
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResults.appendChild(imageWrapper);
    })

    page++
    if(page > 1) {
        showMoreBtn.style.display = "block";
    }
}

searchBtn.addEventListener("click", () => {
    page = 1;
    searchImages(searchBox.value);
})

searchBox.addEventListener("keypress", (event) => {
    if(event.key === "Enter") {
        page = 1;
        searchImages(searchBox.value);
    }
})

showMoreBtn.addEventListener("click", () =>{
    searchImages(searchBox.value)
})