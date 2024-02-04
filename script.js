const searchForm = document.getElementById("search-form")
const searchBox = document.getElementById("search-box")
const searchResult = document.getElementById("search-result")
const showMoreBtn = document.getElementById("show-more-btn")
const accesskey = '4exDg6_sCPKF-1S5My7_sI8LTBcf2ZRoeswEy9IkpIs'
const btn = document.getElementById("btn")
let keyword = ""
let page = 1


async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=15`;

    
    try {
        if (page === 1){
            searchResult.innerHTML = ""
        }
    
        const response = await fetch(url)
        console.log(response)
        const data  = await response.json()
        console.log(data)
        const result = data.results
        // console.log(result)
        result.map((result)=>{
            const image = document.createElement("img")
            image.src = result.urls.small
            const imageLink = document.createElement("a")
            imageLink.href = result.links.html
            imageLink.target = "_blank"
            imageLink.appendChild(image)
            searchResult.appendChild(imageLink)
        })
    } catch (error) {
        console.log(error)
    }

    showMoreBtn.style.display = "block"
}

searchForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    page = 1
    searchImages()

})


showMoreBtn.addEventListener("click",()=>{
    page++
    searchImages()
})