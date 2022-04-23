
function getmovie(){
    fetch(url).then(reponse =>{
        
        return reponse.json();

    }).then(result=>{
        console.log(result);
        if(result.Title === undefined){
            notFound();
        }
        else{
            display(result);
        }
       
    }).catch(error=>{
        console(`can't find movie ${error}`);
    });

}

function notFound(){
    document.querySelector("#details").innerHTML = "";
    var box = document.createElement("div");

    var poster = document.createElement("img");
    poster.src = "https://www.archanaprojects.com/Frontend/images/not-found.png";

    box.append(poster);
    document.querySelector("#details").append(box);

}

function display(data){
    document.querySelector("#details").innerHTML="";
    var box = document.createElement("div");
   
    var title = document.createElement("h1");
    title.innerText = data.Title;

    var poster = document.createElement("img");
    poster.src = data.Poster;

    var releaseDate = document.createElement("p");
    releaseDate.innerText = data.Released;

    var actors = document.createElement("p");
    actors.innerText = data.Actors;

    var genre = document.createElement("p");
    genre.innerText = data.Genre;

    var rating = document.createElement("p");
    rating.innerText = data.imdbRating;

    if (data.imdbRating > 8.5){
        var recommenended = document.createElement("p");
        recommenended.innerText = "Recommended";
        box.append(title, poster, releaseDate, actors, genre, rating,recommenended);
    }
    else
    {
        box.append(title, poster, releaseDate, actors, genre, rating);
    }
   
    document.querySelector("#details").append(box);
}


var url;

function searchMovie(){
   
    var movie = document.querySelector("#search").value;
    if(movie === ""){
        alert("enter movie name");
    }
    else{
        url = `http://www.omdbapi.com/?t=${movie}&apikey=502195f4`;
        getmovie();
    }
   
}

