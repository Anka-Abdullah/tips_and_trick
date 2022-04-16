/**
 * // must return 2
 * cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
 * // must return 0
 * cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});
 */

function cakes(recipe, available) {
  let count = 0;
  const keyRecipe = Object.keys(recipe);
  const keyAvailable = Object.keys(available);

  keyRecipe.map((item) => {
    if (keyAvailable.includes(item)) {
      const mathCake = Math.floor(available[item] / recipe[item]);
      count += mathCake;
      if (mathCake < count) {
        count = mathCake;
      }
    } else {
      return 0;
    }
  });
  return count;
}

const recipe1 = { flour: 500, sugar: 200, eggs: 1 };
const available1 = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };

const recipe2 = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
const available2 = { sugar: 500, flour: 2000, milk: 2000 };

console.log(cakes(recipe1, available1));
console.log(cakes(recipe2, available2));
