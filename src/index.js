module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const openBrackets = {};
  const closeBrackets = {};

  
  for (const [open, close] of bracketsConfig) {
      openBrackets[open] = close;
      closeBrackets[close] = open;
  }

  for (const char of str) {
      
      if (openBrackets[char] && (!stack.length || openBrackets[char] !== char || stack[stack.length - 1] !== char)) {
          stack.push(char);
      }
      
      else if (closeBrackets[char]) {
          if (stack.length === 0 || stack[stack.length - 1] !== closeBrackets[char]) {
              return false;
          }
          stack.pop();
      }
  }


  return stack.length === 0;
};
