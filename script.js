let mainBtn = document.querySelector(".main_btn");
let pass1 = document.querySelector("#pass_1");
let pass2 = document.querySelector("#pass_2");
let passwords = document.querySelector(".result");
let generateClicked = false;

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

mainBtn.addEventListener("click", function() {
    generateClicked = true;
    let p1 = generatePassword();
    let p2 = generatePassword();
    pass1.textContent = p1;
    pass2.textContent = p2;
} );

passwords.addEventListener("click", function() {
    if ( !generateClicked ) {
        return;
    }
    let text = passwords.textContent;
    navigator.clipboard.writeText(text);
    showSnackbar();
});

function generatePassword() {
    let ans = "";
    for ( let i = 0; i < 8; ++i ) {
        let index = Math.floor( Math.random() * characters.length );
        ans += characters[index];
    }
    return ans;
}

function showSnackbar() {
    let x = document.querySelector("#snackbar");
    x.className = "show";
    setTimeout(function() {
        x.className = x.className.replace("show", "");
    }, 3000);
}