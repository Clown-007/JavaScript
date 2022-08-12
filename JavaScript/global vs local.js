var outerWear = "T-shirt"  //This is Global Function because its outside the function and can be access by both by inside and outside the function

function myOutfit()
{
    var outerWear = "Sweater"; //This is Local Function
    return outerWear;
}
console.log(myOutfit());    //This access the data of outerWear inside myOufit or say from Local Function
console.log(outerWear);     //This accessed the data from the Global Function as it wasn't called from the Function
  
