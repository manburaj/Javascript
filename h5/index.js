document.getElementById("title").innerHTML="Peacock Chooser";
document.getElementById("sub").innerHTML="Choose your favorite image";


pics = document.getElementById("pics");
createPicsHolders();
createImages();


function createPicsHolders() {
    for(var i=0; i<9; i++){
        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id= "picture-holder-"+i;
        pics.appendChild(pictureHolder);
    }
}

function createImages() {
    pictureHolders = document.getElementsByClassName("picture-holder");
    for(var i=0;i<pictureHolders.length;i++){
        favorite = document.createElement("div");
        favorite.className="favorite";
        favorite.id = "favorite_"+(i+1);
        birdImage=document.createElement("img");
        birdImage.src="img/image"+(i+1)+".jpg";
        birdImage.id=(i+1);
        birdImage.addEventListener("click",function() {
            makeFavorite(this.id);
        });
        pictureHolders[i].appendChild(favorite);
        pictureHolders[i].appendChild(birdImage);
    }
    
}

function makeFavorite(id) {
    console.log("Make me a favorite! Het gaat om pauw " + id);
    notsofavorite = document.getElementsByClassName("favorite");

    for(var i = 0; i< notsofavorite.length; i++) {
        notsofavorite[i].style.backgroundImage = "none";
    }


    favorite = document.getElementById("favorite_" + id);
    favorite.style.backgroundImage = "url('img/heart.png')";
}

