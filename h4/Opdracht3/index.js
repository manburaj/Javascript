
var images1 = [1,2,3]
var images2 = [1,2,3]
var images3 = [1,2,3]

var box1 = document.querySelector("#box1");
box1.style.backgroundImage = "url(img/image3.jpg)";

var box2 = document.querySelector("#box2");
box2.style.backgroundImage = "url(img1/image2.jpg)";

var box3 = document.querySelector("#box3");
box3.style.backgroundImage = "url(img2/image1.jpg)";
var count = 0;


box1.addEventListener("click",function () {   
    box1.style.backgroundImage = "url(img/image"+getimages1()+".jpg)";
});

box2.addEventListener("click",function () {   
    box2.style.backgroundImage = "url(img1/image"+getimages2()+".jpg)";
});

box3.addEventListener("click",function () {   
    box3.style.backgroundImage = "url(img2/image"+getimages3()+".jpg)";
});

function getimages1() {
    if(count >=images1.length){
        count= 1;
    }else{
        count++;
    }
    console.log(count);
    return count;
}

function getimages2() {
    if(count >=images2.length){
        count= 1;
    }else{
        count++;
    }
    console.log(count);
    return count;
}

function getimages3() {
    if(count >=images3.length){
        count= 1;
    }else{
        count++;
    }
    console.log(count);
    return count;
}
