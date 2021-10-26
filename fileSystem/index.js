global.console.log("Log Yazıldı");

global.console.log(__dirname);
// Prints: /Users/mjr
// console.log(path.dirname(__filename));
// Prints: /Users/mjr

setTimeout(() => {
  console.log("3 saniye bekle");
}, 3000);

console.log(window);
