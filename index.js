const jcontainer = document.getElementById("displaydrinks")
const nonalcoholcontainer = document.getElementById("Nonalcoholicocktail")
const alcoholcontainer = document.getElementById("alcoholicocktaill")
const searchedimgcontainer = document.getElementById("searchedimg")
searchfunction()

nonalcoholicdrinks()

Alcoholicdrinks()





function searchfunction() {
const form = document.querySelector('form')
const searchbtn = document.getElementById('searchbutton')
console.log(searchbtn);
searchbtn .addEventListener('click' , (e)=>{
  e.preventDefault()
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${form.search.value}`)
  .then(resp =>  
    resp.json())
  .then(searchdata =>{
    console.log(searchdata);
    searchdata.drinks.forEach(element => {

     const seracheddrinkslist = document.createElement('li')
     seracheddrinkslist.id = 'searcheditem'

      const searchedimg = document.createElement('img')
      searchedimg.src = element.strDrinkThumb
      seracheddrinkslist.append(searchedimg)

      const detailname = document.createElement('p')
      detailname.innerText = element.strDrink
      seracheddrinkslist.append(detailname)
      
      searchedimgcontainer.append(seracheddrinkslist)

    })


  })

})
}
function nonalcoholicdrinks(){

  fetch ("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic")
  .then (resp => resp.json())
  .then(Nonalcoholicdata =>{


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
 
  jcontainer.append( nonalcoholdrinkname)
  
  const nonalcoholdrinkimg = document.createElement('img')
  nonalcoholdrinkimg.src = nonalcoholitem.strDrinkThumb
  jcontainer.append(nonalcoholdrinkimg)

  
 })


}

