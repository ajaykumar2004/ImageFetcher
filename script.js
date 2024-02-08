const accesskey="8oJnLp7gMJeC6Np5HVDJFrdQoDFWy4FYY5XIYzQmCTs";

const searchKey=document.getElementById("key");
const searchresults=document.querySelector(".images")
const search=document.getElementById("search");
let input=""
let page=1;
async function searchImage(){
    input=searchKey.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${input}&client_id=${accesskey}`;
    
    const response=await fetch(url);
    const data=await response.json();

    const results = data.results

    const gridContainer = document.getElementById("gridContainer");
    gridContainer.innerHTML='';
      results.forEach((result)=>{

        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        const img = document.createElement("img");
        img.alt = result.alt_description;
        img.src = result.urls.small;

        gridItem.appendChild(img);

        gridContainer.appendChild(gridItem);
    })
}
search.addEventListener(("click") ,()=>{
    event.preventDefault();
    searchImage();
})