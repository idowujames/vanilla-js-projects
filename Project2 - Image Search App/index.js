const accessKey = "1rgcq2gDeuWkGtrimBkDxE7XQx9fcBCupd_Xl_hdx-8"

const formEl = document.querySelector("form");
const searchInputEl = document.getElementById("search-input");
const searchResultsEl = document.querySelector(".search-results");
const showMoreButton = document.getElementById("search-more-button");

let inputData = "";
let page = 1;

function searchImages(){
    inputData = searchInputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`
    console.log(url)
}

formEl.addEventListener("submit", (event)=> {
    event.preventDefault();
    searchImages();

});

