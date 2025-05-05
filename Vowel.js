function Vowel(str){
let count = 0;
let vowel = "aeiouAEIOU"


for(let i  = 0 ; i < str.length; i++){
    if(vowel.includes((str[i]))){
        count++
    }
}
return  count
}

console.log(Vowel("pneumonoultramicroscopicsilicovolcanoconiosis"))