const jcontainer = document.getElementById("displaydrinks")


    fetch ("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
    .then (resp => resp.json())
    .then(alcoholicdata =>{
   console.log(alcoholicdata);
   
   alcoholicdata.drinks.forEach(element => {
    console.log(element);
    alcoholcontaintainer(element)
   })
    .catch(error => {
        console.error('Error:', error);
      });
})

//Alcoholicdrinks()
function alcoholcontaintainer(alcoholdrink){
    const alcoholbutton = document.getElementById('alcoholbuttonid')
 
    alcoholbutton.addEventListener('click' , ()=>{
     
    const alcoholdrinkname = document.createElement('p')
    alcoholdrinkname.innerText = alcoholdrink.strDrink
    console.log(alcoholdrinkname);
    jcontainer.append(alcoholdrinkname)
    
    const alcoholdrinkimg = document.createElement('img')
    alcoholdrinkimg.src = alcoholdrink.strDrinkThumb
    jcontainer.append(alcoholdrinkimg)
    })
    
}
