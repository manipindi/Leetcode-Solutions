function printPattern(n)
    {
        if (n == 0 || n < 0)
        {
            console.log(n + ", ");
            return;
        }
 
        console.log(n + ", ");
        printPattern(n - 5);
 
        // Then print increasing order
        console.log(n + ", ");
    }
     
    // let n = 16;
    const n = prompt('enter number: ')
    printPattern(n);