// function isIsogram(str){
//   // a place to store the count
//   const counts = {}
//   // iterate over the string
//   for (let i = 0; i < str.length; i++) {
//     const letter = str[i].toLowerCase();
//     if(!counts[letter]) {
//       counts[letter] = 1;
//     } else {
//       return false;
//     }
//   }
//   return true;
// }

function isIsogram(str){
  // create a new Set that checks for uniqueness and compare to the length of the original str.
  return new Set(str.toLowerCase()).size === str.length
}





console.log(isIsogram("Dermatoglyphics"), true); 
console.log(isIsogram("isogram"), true );
console.log(isIsogram("aba"), false, "same chars may not be adjacent" );
console.log(isIsogram("moOse"), false, "same chars may not be same case" );
console.log(isIsogram("isIsogram"), false );
console.log(isIsogram(""), true, "an empty string is a valid isogram" );