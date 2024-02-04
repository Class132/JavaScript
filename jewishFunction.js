

const hummus = function(factor) { 
    const ingredient = function(amount, unit, name) {                     //Берём три аргумента (количество, юнит, имя) 
        let ingredientAmount = amount * factor;                           // количество ингредиентов - умноженное на число 
        if (ingredientAmount > 1) { 
            unit += "s";                                                  // +s для того чтобы обозначать юниты во множественном числе 
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);              // ПРИМЕНЕНИЕ ИНТЕРПОЛЯЦИИ ВЫРАЖЕНИЙ
    };
    ingredient(1,"can", "chickpeas"); 
    ingredient(0.25,"cup", "tahini"); 
    ingredient(0.25,"cup", "lemon juice"); 
    ingredient(1,"clove", "garlic"); 
    ingredient(2,"tablespoon", "olive oil"); 
    ingredient(0.5,"teaspoon", "cumin"); 
};

