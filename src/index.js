const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

// function decode(expr) {
//     // write your solution here
//     let arrDiv = expr.split('');
//     const arrKeys = Object.keys(MORSE_TABLE);
//     const arrValues = Object.values(MORSE_TABLE);
  
    

//     let arrMorse = arrDiv.map(item => {
//         if(item === ' ') {
//            return item = '**********';
//         } else {
//            return item = arrKeys[arrValues.findIndex(el => el === item)];
//         }
//     });
  
  

//     return arrMorse.reduce((sum, item) => {
//         if(item !== '**********') {
//             item = item.split('').reduce((sum, item) => {
//                 if (item === '.') {
//                     return sum + '10';
//                 } else {
//                     return sum + '11';
//                 }
//             }, '');
          
//             if (item.length < 10) {
//                 let num = item.length;
              
//                 for (let i = 1; i <= 10 - num; i++) {
//                     item = '0' + item;
                  
//                 }
              
//             }
          
//         } 
//         return sum + item;
//     }, '');
// }

function decode(expr) {
    // write your solution here
    let arrDiv = expr.split('');
    let DivLength = arrDiv.length;
    let compondArr = [];
    const arrKeys = Object.keys(MORSE_TABLE);
    const arrValues = Object.values(MORSE_TABLE);
  
    
  
    while (compondArr.length !== DivLength/10) {
        compondArr.push(arrDiv.slice(0, 10).join(""));
        // console.log(compondArr);
        arrDiv = arrDiv.slice(10); 
       // console.log(arrDiv);
    };
   
    compondArr = compondArr.map(item => {
      if (item !== '**********') {
        return item.slice(item.split('').findIndex(elem => elem > 0));    
      }
      return item;
    });
  
    compondArr = compondArr.map(item => {
      if (item !== '**********') {
        
        
        return item.split('').reduce((sum, it, ind) => {
            if(ind % 2 === 0) {
              
              if(item.slice(ind, ind + 2) === '11') {
                
                return sum += '-';
                
              } else {
                
                return sum += '.';
               
              }
            } else {
              return sum;    
            }
          
          
        } ,'');
      }

      return item;
    }) 
  
  
  console.log(compondArr);
  
  return compondArr.map(item => {
    if (item === '**********') {
      return item = ' ';
    };
    
    return item = arrValues[arrKeys.findIndex(el => el === item)];
  }).join('');
  
  
  
  
};

module.exports = {
    decode
}