const find = (letter) => {
    let arra1 = letter.split('');
    let result = '';
    let i = 0;
   
    for (var x = 0; x < arra1.length; x++) {
      i = 0;
   
      for (var y = 0; y < arra1.length; y++) 
      {
        if (arra1[x] === arra1[y]) {
          i+= 1;
        }
      }
   
      if (i < 2) {
        result = arra1[x];
        break;
      }
    }
    return result;
  }
  console.log(find('the quick brown fox jumps over the calm kitten quietly'));