
var country = `in`;
var category = `business`;
let main_div = document.getElementById("main_news");
let sports = document.getElementById("sports");
sports.addEventListener('click', sports1);

function sports1() 
{
    main_div.innerHTML = null;
    category = "sports";
    getapi();
}

let business = document.getElementById("business");
business.addEventListener('click', business1);
function business1() 
{
    main_div.innerHTML = null;
    category = "business";
    getapi();
}


let technology = document.getElementById("technology");
technology.addEventListener('click', technology1);
function technology1() 
{
    main_div.innerHTML = null;
    category = "technology";
    getapi();
}



let science = document.getElementById("science");
science.addEventListener('click', science1);
function science1() 
{
    main_div.innerHTML = null;
    category = "science";
    getapi();
}

let Entertainment = document.getElementById("Entertainment");
Entertainment.addEventListener('click', Entertainment1);
function Entertainment1() 
{
    main_div.innerHTML = null;
    category = "Entertainment";
    getapi();
}


async function getapi()
{
    //let mov = document.getElementById("name").value;
    try {
        let res = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=c1e288420796484ea64f3d997bec1984`);
        
        let data = await res.json();

        homepage(data);
        console.log(data);
      //  showmovie(data);
    }
    catch(e) {
        console.log('err:',e);
    }
     
}

getapi();

function homepage(d)
{
    
    main_div.innerHTML = null;
    for (let i = 0; i < 15; i++)
    {
        let div=document.createElement("div");
        let img_news = document.createElement("img");
        img_news.src = `${d.articles[i].urlToImage}`;
       
        let div1=document.createElement("div");
        let p_title = document.createElement("H4");
        p_title.innerHTML = d.articles[i].title;

        let p_description = document.createElement("p");
        p_description.innerHTML = d.articles[i].description;
        
        let p_readme = document.createElement("a");
        

        div1.append(p_title,p_description,p_readme);
        div.append(img_news,div1);
        main_div.append(div);
        
    }

}