function NumberOfWords(str:string):number{

    return str.split(" ").length;
}

console.log("Number Of Words....")
console.log(NumberOfWords ("Hello World and"));

function NumberOfCharacters(str:string):number{
    return str.split("").length - str.split(" ").length + 1;
}

console.log("Number of Characteres...");
console.log(NumberOfCharacters("Hello World and"));