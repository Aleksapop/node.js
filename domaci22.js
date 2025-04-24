const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Unesi broj: ', (input) => {
    const broj = parseInt(input);

    if (isNaN(broj)) {
        console.log("Niste uneli validan broj.");
    } else if (broj % 2 === 0) {
        console.log("Broj je paran.");
    } else {
        console.log("Broj je neparan.");
    }

    readline.close();
});