const passwordBox = document.getElementById("password");
const lnth = 18;

const upperCaseL = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseL = "abcdefghijklmnopqrstuvwxyz";
const symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
const numbers = "01232456789";
const allCharacters = upperCaseL + lowerCaseL + symbols + numbers;

function generate_password(){
    let password = "";
    password += upperCaseL[Math.floor(Math.random() * upperCaseL.length)];
    password += lowerCaseL[Math.floor(Math.random() * lowerCaseL.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];

    while (lnth > password.length){
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
        passwordBox.value = password;
    }
}

function copy_password(){
    passwordBox.select();
    document.execCommand("copy");
}