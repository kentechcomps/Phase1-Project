const jcontainer = document.getElementById("displaydrinks")


    fetch ("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
    .then (resp => resp.json())
    .then(alcoholicdata =>{
   alcoholicdata.drinks.forEach(element => {
   
    alcoholcontainer(element)
   })
 
      });

nonalcoholcontaintainerfun()
//Alcoholicdrinks()
function alcoholcontainer(alcoholdrink){
    const alcoholbutton = document.getElementById('alcoholbuttonid')
 
    alcoholbutton.addEventListener('click' , ()=>{
     
    const alcoholdrinkname = document.createElement('p')
    alcoholdrinkname.innerText = alcoholdrink.strDrink
   
    jcontainer.append(alcoholdrinkname)
    
    const alcoholdrinkimg = document.createElement('img')
    alcoholdrinkimg.src = alcoholdrink.strDrinkThumb
    jcontainer.append(alcoholdrinkimg)
    })
    
}
function nonalcoholcontaintainerfun(){


  fetch ("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic")
  .then (resp => resp.json())
  .then(nonalcoholicdata =>{
 console.log(nonalcoholicdata);
 
 nonalcoholicdata.drinks.forEach(nonalcoldrink => {
  console.log(nonalcoldrink);




  const nonalcoholbutton = document.getElementById('nonalcoholid')

  nonalcoholbutton.addEventListener('click',()=>{

    const nonalcoholdrinkname = document.createElement('p')
    nonalcoholdrinkname.innerText = nonalcoldrink.strDrink
  console.log(nonalcoholdrinkname);
  jcontainer.append(nonalcoholdrinkname)
  
  const nonalcoholdrinkimg = document.createElement('img')
  nonalcoholdrinkimg.src = nonalcoldrink.strDrinkThumb
  jcontainer.append(nonalcoholdrinkimg)
  })  
 })
 })
 
  }
