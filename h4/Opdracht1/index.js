document.getElementById("title").innerHTML="Hello";

var mijnauto = {
    kleur: "blauw",
    merk: "Ford",
    snelhied: 0,


    gasgeven: function(){
        this.snelhied +=5 //this increases the count by 5
        console.log(this.snelhied);
    },

    toeteren : function(){
        console.log("toet")
    }

}


console.log(mijnauto.snelhied);
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.toeteren();