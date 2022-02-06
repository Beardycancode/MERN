
num = parseInt(prompt("Enter your number: "));
let flag = true;

if (num === 1) 
{
    document.write("entry is 1");
}

else if (num > 1) 
{

     for (let i = 2; i < num; i++) {
        if (num % i == 0) {
         flag = false;
            break;
        }
    }

    if (flag) {
        document.write(`${num} is a prime number`);
    } else {
        document.write(`${num} is a not prime number`);
    }
}

else {
    console.log("The number is not a prime number.");
}
