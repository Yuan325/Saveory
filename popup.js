// When the user clicks on <div>, open the popup
function myFunction() {
}

async function getRecipe() {
	console.log("getting recipe");
	/*let url = "https://api.spoonacular.com/recipes/random?apiKey=dbb3a7d09dac4219b02c7ffd6a1098a5&number=1&tags=meat"
	let response = await fetch(url);
	console.log(response);
	
	let json = await response.json();
*/
let json={
    "recipes": [
        {
            "extendedIngredients": [
                {
                    "id": 4053,
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "image": "olive-oil.jpg",
                    "consistency": "liquid",
                    "name": "olive oil",
                    "original": "2 tablespoons olive oil",
                    "originalString": "2 tablespoons olive oil",
                    "originalName": "olive oil",
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 11143,
                    "aisle": "Produce",
                    "image": "celery.jpg",
                    "consistency": "solid",
                    "name": "celery",
                    "original": "1 cup celery, thinly sliced",
                    "originalString": "1 cup celery, thinly sliced",
                    "originalName": "celery, thinly sliced",
                    "amount": 1.0,
                    "unit": "cup",
                    "meta": [
                        "thinly sliced"
                    ],
                    "metaInformation": [
                        "thinly sliced"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "cup",
                            "unitLong": "cup"
                        }
                    }
                },
                {
                    "id": 11960,
                    "aisle": "Produce",
                    "image": "baby-carrots.jpg",
                    "consistency": "solid",
                    "name": "baby carrots",
                    "original": "1 cup baby carrots, thinly sliced",
                    "originalString": "1 cup baby carrots, thinly sliced",
                    "originalName": "baby carrots, thinly sliced",
                    "amount": 1.0,
                    "unit": "cup",
                    "meta": [
                        "thinly sliced"
                    ],
                    "metaInformation": [
                        "thinly sliced"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "cup",
                            "unitLong": "cup"
                        }
                    }
                },
                {
                    "id": 11282,
                    "aisle": "Produce",
                    "image": "brown-onion.png",
                    "consistency": "solid",
                    "name": "onion",
                    "original": "1 small onion, chopped",
                    "originalString": "1 small onion, chopped",
                    "originalName": "onion, chopped",
                    "amount": 1.0,
                    "unit": "small",
                    "meta": [
                        "chopped"
                    ],
                    "metaInformation": [
                        "chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "small",
                            "unitLong": "small"
                        }
                    }
                },
                {
                    "id": 1082047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt.jpg",
                    "consistency": "solid",
                    "name": "kosher salt",
                    "original": "1 teaspoon kosher salt",
                    "originalString": "1 teaspoon kosher salt",
                    "originalName": "kosher salt",
                    "amount": 1.0,
                    "unit": "teaspoon",
                    "meta": [],
                    "metaInformation": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 1002030,
                    "aisle": "Spices and Seasonings",
                    "image": "pepper.jpg",
                    "consistency": "solid",
                    "name": "ground pepper",
                    "original": "1 teaspoon fresh ground black pepper",
                    "originalString": "1 teaspoon fresh ground black pepper",
                    "originalName": "fresh ground black pepper",
                    "amount": 1.0,
                    "unit": "teaspoon",
                    "meta": [
                        "fresh",
                        "black"
                    ],
                    "metaInformation": [
                        "fresh",
                        "black"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 5006,
                    "aisle": "Meat",
                    "image": "whole-chicken.jpg",
                    "consistency": "solid",
                    "name": "chicken",
                    "original": "1 12.5 oz can Swanson Premium Chunk Chicken, drained",
                    "originalString": "1 12.5 oz can Swanson Premium Chunk Chicken, drained",
                    "originalName": "Swanson Premium Chunk Chicken, drained",
                    "amount": 12.5,
                    "metaInformation": [
                        "chunk",
                        "drained",
                        "canned"
                    ],
                    "measures": {
                        "us": {
                            "amount": 12.5,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        }
                    }
                },
                {
                    "id": 6194,
                    "aisle": "Canned and Jarred",
                    "image": "chicken-broth.png",
                    "consistency": "liquid",
                    "name": "chicken broth",
                    "original": "2 14.5 oz cans Swanson Chicken broth + 2 cans water",
                    "originalString": "2 14.5 oz cans Swanson Chicken broth + 2 cans water",
                    "originalName": "Swanson Chicken broth + 2 cans water",
                    "amount": 29.0,
                    "unit": "oz",
                    "meta": [
                        "canned"
                    ],
                    "metaInformation": [
                        "canned"
                    ],
                    "measures": {
                        "us": {
                            "amount": 29.0,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        }
                    }
                },
                {
                    "id": 2034,
                    "aisle": "Spices and Seasonings",
                    "image": "seasoning.jpg",
                    "consistency": "solid",
                    "name": "poultry seasoning",
                    "original": "1/8 teaspoon poultry seasoning",
                    "originalString": "1/8 teaspoon poultry seasoning",
                    "originalName": "poultry seasoning",
                    "amount": 0.125,
                    "unit": "teaspoon",
                    "meta": [],
                    "metaInformation": [],
                    "measures": {
                        "us": {
                            "amount": 0.125,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 10920420,
                    "aisle": "Pasta and Rice",
                    "image": "orzo.jpg",
                    "consistency": "solid",
                    "name": "orzo",
                    "original": "1 cup Orzo, uncooked",
                    "originalString": "1 cup Orzo, uncooked",
                    "originalName": "Orzo, uncooked",
                    "amount": 1.0,
                    "unit": "cup",
                    "meta": [
                        "uncooked"
                    ],
                    "metaInformation": [
                        "uncooked"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "cup",
                            "unitLong": "cup"
                        }
                    }
                },
                {
                    "id": 6016,
                    "aisle": "Canned and Jarred",
                    "image": "cream-of-chicken-soup.jpg",
                    "consistency": "liquid",
                    "name": "condensed cream of chicken soup",
                    "original": "1 cup cream of chicken condensed soup",
                    "originalString": "1 cup cream of chicken condensed soup",
                    "originalName": "cream of chicken condensed soup",
                    "amount": 1.0,
                    "unit": "cup",
                    "meta": [],
                    "metaInformation": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "cup",
                            "unitLong": "cup"
                        }
                    }
                }
            ],
            "id": 640619,
            "title": "Creamy Chicken Orzo Soup",
            "readyInMinutes": 45,
            "servings": 4,
            "sourceUrl": "https://www.foodista.com/recipe/RJZY48Q2/creamy-chicken-orzo-soup",
            "image": "https://spoonacular.com/recipeImages/640619-556x370.jpg",
            "imageType": "jpg",
            "summary": "Creamy Chicken Orzo Soup is a <b>dairy free</b> recipe with 4 servings. One portion of this dish contains about <b>16g of protein</b>, <b>18g of fat</b>, and a total of <b>383 calories</b>. For <b>$1.65 per serving</b>, this recipe <b>covers 17%</b> of your daily requirements of vitamins and minerals. 7 people found this recipe to be yummy and satisfying. It works well as a rather inexpensive main course for <b>Autumn</b>. Head to the store and pick up kosher salt, onion, baby carrots, and a few other things to make it today. From preparation to the plate, this recipe takes around <b>around 45 minutes</b>. It is brought to you by Foodista. All things considered, we decided this recipe <b>deserves a spoonacular score of 49%</b>. This score is solid. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/creamy-chicken-orzo-soup-618298\">Creamy Chicken Orzo Soup</a>, <a href=\"https://spoonacular.com/recipes/creamy-tomato-orzo-soup-548451\">Creamy Tomato Orzo Soup</a>, and <a href=\"https://spoonacular.com/recipes/creamy-tomato-soup-with-whole-wheat-orzo-615334\">Creamy Tomato Soup with Whole Wheat Orzo</a>.",
            "cuisines": [],
            "dishTypes": [
                "lunch",
                "soup",
                "main course",
                "main dish",
                "dinner"
            ],
            "diets": [
                "dairy free"
            ],
            "occasions": [
                "fall",
                "winter"
            ],
            "instructions": "In a large pot over medium heat, saute the vegetables in olive oil for about 10 minutes, until vegetables are tender.\nAdd the drained can of chicken and stir.\nSeason the chicken and vegetables with salt and pepper. Stir.\nIncrease the heat to medium-high and add the chicken broth plus 2 cans of warm water and stir.\nAllow the soup to simmer for 15 minutes then add the uncooked pasta and seasoning. Stir.\nLet the soup simmer for 20 minutes, stirring occasionally.\nAdd the condensed soup, stir until the broth is creamy and serve.",
					"analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "In a large pot over medium heat, saute the vegetables in olive oil for about 10 minutes, until vegetables are tender.",
                            "ingredients": [
                                {
                                    "id": 11583,
                                    "name": "vegetable",
                                    "localizedName": "vegetable",
                                    "image": "mixed-vegetables.png"
                                },
                                {
                                    "id": 4053,
                                    "name": "olive oil",
                                    "localizedName": "olive oil",
                                    "image": "olive-oil.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404752,
                                    "name": "pot",
                                    "localizedName": "pot",
                                    "image": "stock-pot.jpg"
                                }
                            ],
                            "length": {
                                "number": 10,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 2,
                            "step": "Add the drained can of chicken and stir.",
                            "ingredients": [
                                {
                                    "id": 5006,
                                    "name": "whole chicken",
                                    "localizedName": "whole chicken",
                                    "image": "whole-chicken.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 3,
                            "step": "Season the chicken and vegetables with salt and pepper. Stir.",
                            "ingredients": [
                                {
                                    "id": 1102047,
                                    "name": "salt and pepper",
                                    "localizedName": "salt and pepper",
                                    "image": "salt-and-pepper.jpg"
                                },
                                {
                                    "id": 11583,
                                    "name": "vegetable",
                                    "localizedName": "vegetable",
                                    "image": "mixed-vegetables.png"
                                },
                                {
                                    "id": 5006,
                                    "name": "whole chicken",
                                    "localizedName": "whole chicken",
                                    "image": "whole-chicken.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 4,
                            "step": "Increase the heat to medium-high and add the chicken broth plus 2 cans of warm water and stir.",
                            "ingredients": [
                                {
                                    "id": 6194,
                                    "name": "chicken broth",
                                    "localizedName": "chicken broth",
                                    "image": "chicken-broth.png"
                                },
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 5,
                            "step": "Allow the soup to simmer for 15 minutes then add the uncooked pasta and seasoning. Stir.",
                            "ingredients": [
                                {
                                    "id": 1042027,
                                    "name": "seasoning",
                                    "localizedName": "seasoning",
                                    "image": "seasoning.png"
                                },
                                {
                                    "id": 20420,
                                    "name": "pasta",
                                    "localizedName": "pasta",
                                    "image": "fusilli.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "soup",
                                    "localizedName": "soup",
                                    "image": ""
                                }
                            ],
                            "equipment": [],
                            "length": {
                                "number": 15,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 6,
                            "step": "Let the soup simmer for 20 minutes, stirring occasionally.",
                            "ingredients": [
                                {
                                    "id": 0,
                                    "name": "soup",
                                    "localizedName": "soup",
                                    "image": ""
                                }
                            ],
                            "equipment": [],
                            "length": {
                                "number": 20,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 7,
                            "step": "Add the condensed soup, stir until the broth is creamy and serve.",
                            "ingredients": [
                                {
                                    "id": 1006615,
                                    "name": "broth",
                                    "localizedName": "broth",
                                    "image": "chicken-broth.png"
                                },
                                {
                                    "id": 0,
                                    "name": "soup",
                                    "localizedName": "soup",
                                    "image": ""
                                }
                            ],
                            "equipment": []
                        }
                    ]
                }
            ]
        }
    ]
};

	let image=json['recipes'][0].image;
	let title=json['recipes'][0].title;
	let summary = json['recipes'][0].summary;
	let instruction = json['recipes'][0].analyzedInstructions[0].steps;
	var insList = "<ol>";
	for(ins of instruction){
		insList+= "<li>" + ins["step"] + "</li>";
	}
	insList+="</ol>";

	let ingredients = json['recipes'][0].extendedIngredients;
	console.log(title);

	var ing;
	var food="";
	for(ing of ingredients){
		food += ing['measures']['us']['amount'];
		food += " " + ing['measures']['us']['unitShort'];
		food += " " + ing['name'] + "<br>";
	}

	
	
	var titlediv=document.getElementById("recipeTitle");
	titlediv.innerHTML=title;

	var ingredientdiv=document.getElementById("ingredientsList");
	ingredientdiv.innerHTML=food;

	var instrucdiv=document.getElementById("recipeInstruc");
	instrucdiv.innerHTML=insList;
};

let randomButton = document.getElementById("randomRecipe");
console.log("got into js");
randomButton.onclick=getRecipe;
