import "./styles/index.scss";

const recipe= {
    food: 15,
    water: 12,
    salt: 11
}

const recipeV2={
    ...recipe,
    oil: 15,
    cinnamon:30
}
console.log(recipe);
console.log(recipeV2);