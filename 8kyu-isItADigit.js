// Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise. 

// solution 
String.prototype.digit = function() {
  if(/[0-9]/.test(this) && this.length === 1) {
    return true
  }  
  return false;
};
