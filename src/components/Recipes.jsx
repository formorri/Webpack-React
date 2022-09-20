import {useState} from "react";

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

const Recipes = () => {
    const [recipelist, setRecipe] = useState({})
  return (
    <div>
    <h3>
    Current Recipe
    </h3>
    <button onClick={()=> setRecipe(recipe)}>recipe</button>
    <button onClick={()=> setRecipe(recipeV2)}>recipe2</button>
    <ul>
        {Object.keys(recipelist).map((material)=>(
            <li key={material}>
                {material}: {recipelist[material]}
            </li>
        ))}
    </ul>
    </div>
  )
}

export default Recipes