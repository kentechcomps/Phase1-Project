
const nonalcoholcontainer = document.getElementById("Nonalcoholicocktail")
const alcoholcontainer = document.getElementById("alcoholicocktaill")
const searchedimgcontainer = document.getElementById("searchedimg")

searchfunction()
Alcoholicdrinks()
nonalcoholicdrinks()


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
    searchedimgcontainer.innerHTML =''
    searchdata.drinks.forEach(element => {
       console.log(element);
     const seracheddrinkslist = document.createElement('li')
     seracheddrinkslist.id = 'searcheditem'

      const searchedimg = document.createElement('img')
      searchedimg.src = element.strDrinkThumb
      seracheddrinkslist.append(searchedimg)
      
    
      const price = document.createElement('p')
      price.id = 'itemsremain'
      price.innerText = "Click to buy"
      seracheddrinkslist.append(price)

      const buycocktail = document.createElement('button')
      buycocktail.id = 'buydrinkbutton' 
      buycocktail.innerText = "Buy drink "

      buycocktail.addEventListener('click' , ()=>{
      buycocktail.style.backgroundColor = '#ff0000'
      buycocktail.innerText = "Sold"
     console.log(itemsremain);
      })

      seracheddrinkslist.append(buycocktail)
    
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
  
  nonalcoholcontainerfunction(element)
 })

})
}


function Alcoholicdrinks(){
    fetch ("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
    .then (resp => resp.json())
    .then(Alcoholicdata =>{

   Alcoholicdata.drinks.forEach(element => {
     
    alcoholcontainerfunction(element)
   })
  
})
}
//Alcoholicdrinks()
function alcoholcontainerfunction(alcoholdrink){
  
  const alcoholcocktaillist = document.createElement('li')
  alcoholcocktaillist.id = 'alcoholiclisttem'

    const alcoholdrinkimg = document.createElement('img')
    alcoholdrinkimg.src = alcoholdrink.strDrinkThumb
    alcoholcocktaillist.append(alcoholdrinkimg)


    const aprice = document.createElement('p')
    aprice.id = 'aitemsremain'
    aprice.innerText = "Click to like"
    alcoholcocktaillist.append(aprice)

    const buyacocktail = document.createElement('button')
    buyacocktail.id = 'abuydrinkbutton' 
    buyacocktail.innerText = "Buy drink "

    buyacocktail.addEventListener('click' , ()=>{
      buyacocktail.style.backgroundColor = '#ff0000'
      buyacocktail.innerText = "Sold"
      alert('Thanks for liking')
    })
    alcoholcocktaillist.append(buyacocktail)

    const alcoholdrinkname = document.createElement('p')
    alcoholdrinkname.id = 'nameofdrink'
    alcoholdrinkname.innerText = alcoholdrink.strDrink
    alcoholcocktaillist.append(alcoholdrinkname)
   
    alcoholcontainer.append(alcoholcocktaillist)

    }
    
function nonalcoholcontainerfunction(nonalcoholitem){

  const nonalcoholcocktailist =document.createElement('li')
  nonalcoholcocktailist.id = 'nonalcoholcocktailist'

  const nonalcoholdrinkimg = document.createElement('img')
  nonalcoholdrinkimg.src = nonalcoholitem.strDrinkThumb
  nonalcoholcocktailist.append(nonalcoholdrinkimg)

  const nonalcoholdrinkname = document.createElement('p')
  nonalcoholdrinkname.innerText = nonalcoholitem.strDrink
  nonalcoholcocktailist.append( nonalcoholdrinkname)

  nonalcoholcontainer.append( nonalcoholcocktailist)
  
 }



