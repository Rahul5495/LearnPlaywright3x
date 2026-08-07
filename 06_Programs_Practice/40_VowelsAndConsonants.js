
let string="Automation Testing";
let str=string.toLowerCase();
let vowels = 0;
let consonants = 0;

for (let i = 0; i < str.length; i++){
    let ch = str[i];
    if (ch >= 'a' && ch <= 'z') {
        if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
            vowels++;
        } else {
            consonants++;
        }
    }
}
console.log(`Vowels: ${vowels} Consonants: ${consonants}`);