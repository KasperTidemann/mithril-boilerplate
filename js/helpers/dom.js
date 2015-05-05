// DOM:
var dom = function(key) {
  if (key[0] === '#') {
    return document.getElementById(key.slice(1));
  }

  return document.querySelectorAll(key);
};
