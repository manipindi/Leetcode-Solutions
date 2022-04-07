let input = [3, 5, 7, 8, 2, 1, 4];

let sorted = (arr) => {
    let swap = true;
        let count = 0
        while (swap) {
            swap = false;
            for (i = 0; i < arr.length - count; i++) {
                if (arr[i] > arr[i + 1]) {
                    //if even[i] > even[i+1] the i'th is greater than next element(i+1) the elemets will be swapped 
                    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                    swap = true;
                }
            }
            count++
        }
    return arr;
};

let shuffle = (input) => {

    let number = Math.floor(Math.random() * (4 - 1) + 1);
    console.log("Random Number: " + number);

    if (number === 3) {
        console.log(`Highest discount token number: ${input[0]}`);
        return input;
    }

    if (number === 1) {
        //even numbers shuffle
        let even = [];
        for (let i = 0; i < input.length; i++) {
            if (input[i] % 2 == 0) {
                even.push(input[i])
            }
        }

        let result = sorted(even);
        // even.sort();
        let j = 0;
        for (let i = 0; i < input.length; i++) {
            if (input[i] % 2 == 0) {
                input[i] = even[j]
                j++
            }
        }
    }

    if (number === 2) {
        // odd numbers shuffle
        let odd = [];
        for (let i = 0; i < input.length; i++) {
            if (input[i] % 2 == 1) {
                odd.push(input[i])
            }
        }
        let result = sorted(odd).reverse();
        // console.log(odd);
        let j = 0;
        for (let i = 0; i < input.length; i++) {
            if (input[i] % 2 == 1) {
                input[i] = odd[j]
                j++
            }
        }
    }
    console.log(`Highest discount token number: ${input[0]}`);
    return input;

};

console.log(shuffle(input));