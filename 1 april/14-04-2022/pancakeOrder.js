const prompt = require("prompt-sync")({ sigint: true });

let pancakesFlipping = (panCakes) => {
    if (panCakes.length > 1) {
        let largestIndex = 0;

        for (let cake = 0; cake < panCakes.length; cake++) {
            largestIndex = panCakes[cake] > panCakes[largestIndex] ? cake : largestIndex;
        }

        //  Finding largest element index and slices from the largest index element
        let subStack = panCakes.slice(largestIndex);

        // Flips the substack and moves the largest elemnt to the top
        subStack = getflippedPancakes(subStack, subStack.length - 1);

        // adds the fliiped substack to the remaining pancakes
        let newCake = panCakes.slice(0, largestIndex).concat(subStack);

        // flips the whole pancakes which moves the latgest element to the bottom
        newCake = getflippedPancakes(newCake, newCake.length - 1);


        // recursive function untill all large pancakes places in the bottom
        return [newCake[0]].concat(pancakesFlipping(newCake.slice(1)));
    }
    return panCakes;
};

let getflippedPancakes = (cakes, index) => {
    //reverses the substack
    return cakes.slice(0, index + 1).reverse();
};


//dynamic input
let cakes = [];
const n = parseInt(prompt('Enter number of pancakes: '));
for (let i = 0; i < n; i++) {
    const cake = parseInt(prompt('Enter cake Size: '));
    cakes.push(cake);
}

console.log(cakes);
//function call
console.log(pancakesFlipping(cakes));