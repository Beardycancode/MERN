var input = prompt("Enter a character:");

if (input == 'a' || input == 'A' || input == 'e' || input == 'E' || input == 'i' || input == 'I' || input == 'o' || input == 'O' || input == 'u' || input == 'U') {
    console.log("Its a vowel");
} 
  else if ((input >= 'a' && input <= 'z') || (input >= 'A' && input <= 'Z')) 
{
      console.log("Its a consonant");
} 
    else 
{
        console.log("not a character");
}
