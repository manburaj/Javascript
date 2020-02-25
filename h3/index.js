document.getElementById("title").innerHTML="Peacock shuffle";

var images = document.getElementsByTagName("img");
var lenght = images.length;
var random = 0;
var randomnumber = [];


while(randomnumber.length<lenght){
    random = Math.floor(Math.random()*12)+1;
    if(randomnumber.lastIndexOf(random) == -1){  //this will serch for the last ocurance of the same number and will not save it
        randomnumber.push(random);    //this will add the random number that genetre to the empty array     
    }
   
}

//this will shuffle the picture but wil not contain the same image twice
random = 0;
for(var image in images){ //this will give the images numner to suffle in
    images[image].src = "img/image"+ randomnumber[random]+".jpg";
    random++;
}


//this is will shuffle the image but wil contain the same image twice
/*?
for(var i=0; i <images.length; i++){
    random = Math.floor(Math.random()*12)+1;
    images[i].src = "img/image"+random+".jpg";
}
*/


