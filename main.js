import { cocktails } from "./data.js"; // this is your data

///////////////////////////////////////////////////////////////
////////////////// DEVELOPE BELOW THIS LINE ///////////////////
///////////////////////////////////////////////////////////////

///// 1 - Display cocktails
//'in' for looping objects. 'of' for looping array
const cocktailWrapper = document.querySelector(".cocktail-wrapper") ; //Main div containing all cocktails

for(let item of cocktails){
    let singleCocktail = `
	<div class="single-cocktail" style="width:300px; margin: 20px">
		<img src="${item.strDrinkThumb}" style="width:100%"  />
		<p class="cocktail-name">${item.strDrink}</p> 
	</div>
`;
    const newDiv = document.createElement('div'); //create a div for each cocktail  1-st div
    newDiv.innerHTML = singleCocktail;    // 2-nd div
    cocktailWrapper.appendChild(newDiv);
}


//const wrapper = document.querySelector(".wrapper"); //Main div containing everything


///// 2 - Search function
let allCocktails = cocktailWrapper.querySelectorAll('div'); //Array of 25 cocktails
//console.log(allCocktails);
const searchButton = document.querySelector(".search-button");

let inputField = document.querySelector(".cocktail-search-name");

searchButton.addEventListener("click", (event) => onClick(event));

function onClick(event) {
  //   console.log(event.target);

  const searchedCocktailName = inputField.value.toUpperCase();
  let counter = 1;
    for(let element of cocktails){
        let cocktailName = element.strDrink.toUpperCase();
        if(cocktailName.includes(searchedCocktailName)){
            allCocktails[counter].style.display = 'block';
        } else { 
            allCocktails[counter].style.display = 'none'
        }
        counter = counter + 2;
    }
}


