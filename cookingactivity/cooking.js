//Activity1 is creating a cooking recipe. 

function marinaraSauce(){
 
console.log("- Heat a medium-large saucepan over medium heat.");
console.log("- Add 2 tspns of oil and 5 carlic cloves, cook until golden, about 2 minutes");
console.log("- Add 1/4 cup water, 2 cans of crushed tomates, and salt and season with black pepper to taste.");
console.log("- Cover the pot, bring to a boil, reduce the heat to medium low, and simmer until the sauce is heated, about 10 minutes");
console.log("- Stir in 1/4 cup roughly chopped fresh basil, salt and pepper as needed.");

}
//Function prints out recipe for marinara sauce, no argument requred

// marinaraSauce();
//runs function with no arguments 

function marinaraSauce2(cookName){
    console.log(`Hey, ${cookName}! This is my marinara sauce recipe!\n`);
    
    console.log("- Heat a medium-large saucepan over medium heat.\n");
    console.log("- Add 2 tspns of oil and 5 carlic cloves, cook until golden, about 2 minutes\n");
    console.log("- Add 1/4 cup water, 2 cans of crushed tomates, and salt and season with black pepper to taste.\n");
    console.log("- Cover the pot, bring to a boil, reduce the heat to medium low, and simmer until the sauce is heated, about 10 minutes\n");
    console.log("- Stir in 1/4 cup roughly chopped fresh basil, salt and pepper as needed.\n");

}
//Updates the function marinara to include the cook name at the start of the recipe

// marinaraSauce2("Dani")
//runs the function

function marinaraSauce3(cookName){
    let two = 2;
    let oneFourth = "1/4";
    console.log(`Hey, ${cookName}! This is my marinara sauce recipe!\n`);
    
    console.log("- Heat a medium-large saucepan over medium heat.\n");
    console.log("- Add " +two+ " tspns of oil and 5 carlic cloves, cook until golden, about 2 minutes\n");
    console.log("- Add " +oneFourth+ " cup water, " +two+" cans of crushed tomates, and salt and season with black pepper to taste.\n");
    console.log("- Cover the pot, bring to a boil, reduce the heat to medium low, and simmer until the sauce is heated, about 10 minutes\n");
    console.log("- Stir in "+oneFourth+" cup roughly chopped fresh basil, salt and pepper as needed.\n");

}
//Updates marinara recipe to use variables to replaces 2 and 1/4 

// marinaraSauce3("Dani")

//Calls function

function marinaraSauce4(cookName){
    let two = 2;
    let oneFourth = "1/4";
    console.log(`Hey, ${cookName}! This is my marinara sauce recipe!\n`);

    let step1="- Heat a medium-large saucepan over medium heat.\n";
    let step2="- Add " +two+ " tspns of oil and 5 carlic cloves, cook until golden, about 2 minutes\n";
    let step3="- Add " +oneFourth+ " cup water, " +two+" cans of crushed tomates, and salt and season with black pepper to taste.\n";
    let step4="- Cover the pot, bring to a boil, reduce the heat to medium low, and simmer until the sauce is heated, about 10 minutes\n";
    let step5="- Stir in "+oneFourth+" cup roughly chopped fresh basil, salt and pepper as needed.\n";

    let recipe_steps=[step1, step2, step3, step4, step5];
    
    var i;
    for (i=0; i< recipe_steps.length; i++){
        console.log(recipe_steps[i]);
    }
    
    }
//Nestles the Marinara recipe steps into an array. Uses a for loop to start at the beggining
//of the array, index it and move up one printing out each recipe step stored in the arrow by indexing

    // marinaraSauce4("Dani")

//Calls updated function


    let two = 2;
    let oneFourth = "1/4";

    let step1="- Heat a medium-large saucepan over medium heat.\n";
    let step2="- Add " +two+ " tspns of oil and 5 carlic cloves, cook until golden, about 2 minutes\n";
    let step3="- Add " +oneFourth+ " cup water, " +two+" cans of crushed tomates, and salt and season with black pepper to taste.\n";
    let step4="- Cover the pot, bring to a boil, reduce the heat to medium low, and simmer until the sauce is heated, about 10 minutes\n";
    let step5="- Stir in "+oneFourth+" cup roughly chopped fresh basil, salt and pepper as needed.\n";

    let recipe_steps=[step1, step2, step3, step4, step5];

//Stores some Variables for recipe

function marinaraSauce5(cookName,recipe){
    console.log(`Hey, ${cookName}! This is my marinara sauce recipe!\n`);
    
    let i;
    for (i=0; i< recipe.length; i++){
        console.log(recipe[i]);
    }
    
}
//Creates a function that loops through the recipe array and prints out the steps

marinaraSauce5("Dani",recipe_steps)

    





