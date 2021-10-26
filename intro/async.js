// function getData(data) {
//     return new Promise((resolve, reject) => {
//         console.log('Veriler alınmaya çalışılıyor...');

//         data ? resolve('Veriler alındı') : reject('Veriler alınamadı');
//     })
// };

// function cleanData(receivedData) {
//     return new Promise((resolve, reject) => {
//         console.log('Veriler düzenleniyor...');
//         receivedData ? resolve('Veriler düzenlendi') : reject('Veriler düzenlenemedi');
//     })
// };

// // getData(true)
// //     .then(result => {
// //         console.log(result);
// //         return cleanData(true)
// //     }).then(result => {
// //         console.log(result);
// //     })
// //     .catch(error => {
// //         console.log(error);
// //     })

// // Async - Await

// async function processData() {
//     try {
//         const receivedData = await getData(false);
//         console.log(receivedData);
//         const cleanedData = await cleanData(true);
//         console.log(cleanedData);
//     }
//     catch (error) {
//         console.log(error)
//     }
// }

// processData();

const books = [
    { name: 'Kitap 1', author: 'Yazar 1' },
    { name: 'Kitap 2', author: 'Yazar 2' },
    { name: 'Kitap 3', author: 'Yazar 3' },
];

const listBooks = () => {
    books.map(book => {
        console.log(book.name);
    });
};


const addBook = (newBook) => {
    const promise1 = new Promise((resolve, reject) => {
        books.push(newBook);
        resolve(books);
        reject('Bir Hata Oluştu');
    })
    return promise1;
};

// listBooks();

// addBook({ name: 'Kitap 4', author: 'Yazar 4' }, listBooks)
//     .then(() => {
//         console.log('Yeni Liste');
//         listBooks();
//     }).catch((error) => {
//         console.log(error);
//     });

async function showBooks() {
    try {
        await addBook({ name: 'Kitap 4', author: 'Yazar 4' })
    listBooks();
    }
    catch (error) {
        console.log(error);
    }
}

showBooks();