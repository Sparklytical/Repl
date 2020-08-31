const isValid = s => {
  const pairs = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (pairs[s[i]]) {
      console.log(s[i])
      stack.push(s[i]);
      console.log(stack)
    } else {
      console.log(stack)
      let popValue = stack.pop();
      if (pairs[popValue] !== s[i]) return false;
      
    }
  }

  return stack.length === 0;
};

isValid("()[]{}");



// 2nd


var isValid = function(s) {   
    const stack = [];
    const map = {
      '(': ')',
      '[': ']',
      '{': '}'
    }
    
    for (let i = 0 ; i < s.length ; i++) {
        let c = s[i];
        
        console.log('c',c)
        // Add there is s[i] in c, push it to stack
        if (map[c]) {
        

          stack.push(map[c])
          console.log('stack',stack)
          // otherwise pop last one and return false
        } else if (c !== stack.pop()) {
          return false;
        } 
    }

    // if stack is 0, return false
    return stack.length === 0;
};

isValid("([])");