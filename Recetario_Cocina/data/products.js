let products = [
    { 
      "id": "1",
      "name": "Pepperoni Pizza",
      "description": "Fast food",
      "servings": "1",
      "love": "1",
      "status": false,
      "image": require("../images/pizza.jpg"),
      "ingredients": [
        {
          "ingredient": "Pepperoni",
          "quantity": "0.5 kg"
        },
        {
          "ingredient": "Cheese",
          "quantity": "100 mg"
        },
        {
          "ingredient": "Flour",
          "quantity": "4 cup"
        },
        {
          "ingredient": "Tomatoes",
          "quantity": "5"
        },
        {
          "ingredient": "Olive Oil",
          "quantity": "40ml"
        }
      ]
    },
    {
      "id": "2",
      "name": "Fried Chicken",
      "description": "Fast Food",
      "servings": "4",
      "love": "0",
      "status": false,
      "image": require("../images/pollito.jpg"),
      "ingredients": [
        {
          "ingredient": "Chicken",
          "quantity": "1"
        },
        {
          "ingredient": "Flour",
          "quantity": "1kg"
        },
        {
          "ingredient": "oil",
          "quantity": "1/2L"
        }
      ]
    },
    {
      "id": "3",
      "name": "Soup",
      "description": "Familiar food",
      "servings": "3",
      "love": "0",
      "status": true,
      "image": require("../images/sopa_verduras.jpg"),  //CHANGE TO FOOD
      "ingredients": [
        {
          "ingredient": "Water",
          "quantity": "1 jar"
        },
        {
          "ingredient": "Carrot",
          "quantity": "600g"
        },
        {
          "ingredient": "Milk",
          "quantity": "125ml"
        },
        {
          "ingredient": "Yellow Paper",
          "quantity": "2"
        }
      ]
    },
    {
      "id": "4",
      "name": "Waffles",
      "description": "Breakfast",
      "servings": "4",
      "love": "0",
      "status":false,
      "image": require("../images/Waffles.jpg"),
      "ingredients": [
        {
          "ingredient": "all-purpose flour",
          "quantity": "2 cup"
        },
        {
          "ingredient": "salt",
          "quantity": "1 teaspoon"
        },
        {
          "ingredient": "baking powder",
          "quantity": "4 teaspoons"
        },
        {
          "ingredient": "white sugar",
          "quantity": "2 tablespoons"
        },
        {
          "ingredient": "eggs",
          "quantity": "2"
        },
        {
          "ingredient": "warm milk",
          "quantity": "1 1/2"
        },
        {
          "ingredient": "butter melted",
          "quantity": "1/3 cup"
        },
        {
          "ingredient": "vanilla extract",
          "quantity": "1 teaspoon"
        }
      ]
    },
    {
      "id": "5",
      "name": "Cookies",
      "description": "",
      "servings": "4",
      "love": "0",
      "status":false,
      "image": require("../images/galletas.jpg"),
      "ingredients": [
        {
          "ingredient": "all-purpose flour",
          "quantity": "2 cup"
        },
        {
          "ingredient": "salt",
          "quantity": "1 teaspoon"
        },
        {
          "ingredient": "baking powder",
          "quantity": "4 teaspoons"
        },
        {
          "ingredient": "white sugar",
          "quantity": "2 tablespoons"
        },
        {
          "ingredient": "eggs",
          "quantity": "2"
        },
        {
          "ingredient": "warm milk",
          "quantity": "1 1/2"
        },
        {
          "ingredient": "butter melted",
          "quantity": "1/3 cup"
        },
        {
          "ingredient": "vanilla extract",
          "quantity": "1 teaspoon"
        }
      ]
    },
    {
      "id": "6",
      "name": "Spaghetti",
      "description": "",
      "servings": "4",
      "love": "0",
      "status":false,
      "image": require("../images/pasta.jpg"),
      "ingredients": [
        {
          "ingredient": "Spaghetti",
          "quantity": "1"
        },
        {
          "ingredient": "salt",
          "quantity": "1 teaspoon"
        },
        {
          "ingredient": "Water",
          "quantity": "1L"
        },
        {
          "ingredient": "butter",
          "quantity": "20g"
        }
      ]
    },
    {
      "id": "7",
      "name": "Pizza Bread",
      "description": "",
      "servings": "1",
      "love": "0",
      "status":false,
      "image": require("../images/molletes.jpg"),
      "ingredients": [
        {
          "ingredient": "Bread",
          "quantity": "1"
        },
        {
          "ingredient": "Ham",
          "quantity": "0.5 kg"
        },
        {
          "ingredient": "Cheese",
          "quantity": "100 mg"
        },
        {
          "ingredient": "Pineapple",
          "quantity": "200 g"
        }
      ]
    }
  ]
  
  export default products;