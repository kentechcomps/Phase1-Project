
fetch ("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink")
.then (resp => resp.json())
.then(margaritadata =>{
    console.log(margaritadata)
} )