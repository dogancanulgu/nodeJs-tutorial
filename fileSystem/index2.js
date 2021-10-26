const fs = require("fs");

// Dosya Okumak

// fs.readFile("password.txt", "utf-8", (err, data) => {
//   if (err) console.log(err);
//   console.log(data);
//   console.log("Dosya Okundu");
// });

// Dosya Yazmak

// fs.writeFile(
//   "example.json",
//   '{"name":"Doğancan", "age":26 }',
//   "utf8",
//   (err) => {
//     if (err) console.log(err);
//     console.log("Dosya Başarılı Bir Şekilde Oluşturuldu");
//   }
// );

// Veri Eklemek

// fs.appendFile("example.txt", "\nKodluyozz 2", "utf8", (err) => {
//   if (err) console.log(err);
//   console.log("Yeni Veri Eklendi");
// });

// Dosya Silmek

// fs.unlink("example.json", (err) => {
//   if (err) console.log(err);
//   console.log("Dosya Silindi");
// });

// Klasörler Oluşturmak

// fs.mkdir("uploads/img", { recursive: true }, (err) => {
//   if (err) console.log(err);
//   console.log("Klasörler Oluşturuldu");
// });

// Klasörler Silmek

fs.rmdir("uploads", { recursive: true }, (err) => {
  if (err) console.log(err);
  console.log("Klasörler Silindi");
});
