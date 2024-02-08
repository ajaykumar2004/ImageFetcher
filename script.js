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
    searchresults.innerHTML="";
    results.map((result)=>{
        const imagewrapper= document.createElement('div')
        imagewrapper.classList.add('result')
        const image=document.createElement('img')
        image.src = result.urls.small
        image.alt=result.alt_description;
        const anchor=document.createElement('a')
        anchor.href= result.links.html
        anchor.target="_blank"
        anchor.textContent=result.alt_description

        imagewrapper.appendChild(image);
        imagewrapper.appendChild(anchor);
        searchresults.appendChild(imagewrapper)
    });
    page++;
}
search.addEventListener(("click") ,()=>{
    event.preventDefault();
    searchImage();
})