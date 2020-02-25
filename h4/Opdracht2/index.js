var images = [1,2,3,4,5,6,7,8,9,10,11,12];
var count = 0;
var slideholder = document.getElementById("slideholder");
slideholder.style.backgroundImage = "url(image/image3.jpg)";


slideholder.addEventListener("click",function () {   
    slideholder.style.backgroundImage = "url(image/image"+getimages()+".jpg)";
});

function getimages() {
    if(count >=images.length){
        count= 1;
    }else{
        count++;
    }
    console.log(count);
    return count;
}