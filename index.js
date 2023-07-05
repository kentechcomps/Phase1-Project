const jcontainer = document.getElementById("displaydrinks")
nonalcoholicdrinks()

Alcoholicdrinks()


function nonalcoholicdrinks(){

  fetch ("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic")
  .then (resp => resp.json())
  .then(Nonalcoholicdata =>{
 console.log(Nonalcoholicdata);

 Nonalcoholicdata.drinks.forEach(element => {
  
  nonalcoholcontainer(element)
 })

})
}


function Alcoholicdrinks(){
    fetch ("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
    .then (resp => resp.json())
    .then(Alcoholicdata =>{

   Alcoholicdata.drinks.forEach(element => {
    console.log(element);
    
    alcoholcontainer(element)
   })
  
})
}
//Alcoholicdrinks()
function alcoholcontainer(alcoholdrink){
    const alcoholbutton = document.getElementById('alcoholbuttonid')
   
    alcoholbutton.addEventListener('click' , ()=>{

      jcontainer.innerHTML = ""
    const alcoholdrinkname = document.createElement('p')
    alcoholdrinkname.innerText = alcoholdrink.strDrink
    console.log(alcoholdrinkname);
    jcontainer.append(alcoholdrinkname)
    
    const alcoholdrinkimg = document.createElement('img')
    alcoholdrinkimg.src = alcoholdrink.strDrinkThumb
    jcontainer.append(alcoholdrinkimg)
    })
    
}

function nonalcoholcontainer(nonalcoholitem){

 
 const nonalcoholbutton = document.getElementById('nonalcoholid')
 nonalcoholbutton.addEventListener('click', ()=>{

 jcontainer.innerHTML = ""
  const nonalcoholdrinkname = document.createElement('p')
  nonalcoholdrinkname.innerText = nonalcoholitem.strDrink
  console.log( nonalcoholdrinkname);
  jcontainer.append( nonalcoholdrinkname)
  
  const nonalcoholdrinkimg = document.createElement('img')
  nonalcoholdrinkimg.src = nonalcoholitem.strDrinkThumb
  jcontainer.append(nonalcoholdrinkimg)

  
 })


}

