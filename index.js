// function fetchBooks() {
//   // To pass the tests, don't forget to return your fetch!
//   return fetch("https://example.com/api/books")
//     .then((response) => response.json()) // Parse the JSON from the response
//     .then((data) => {
//       renderBooks(data); // Pass the data to the renderBooks function
//     })
//     .catch((error) => {
//       console.error("Error fetching books:", error); // Handle any errors
//     });
// }

// function renderBooks(books) {
//   const main = document.querySelector("main");
//   books.forEach((book) => {
//     const h2 = document.createElement("h2");
//     h2.innerHTML = book.name;
//     main.appendChild(h2);
//   });
// }

// document.addEventListener("DOMContentLoaded", function () {
//   fetchBooks();
// });
function fetchBooks() {
  // Fetch data from the API endpoint
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json()) // Parse the JSON from the response
    .then((data) => {
      renderBooks(data); // Pass the data to the renderBooks function
    })
    .catch((error) => {
      console.error("Error fetching books:", error); // Handle any errors
    });
}

function renderBooks(books) {
  const main = document.querySelector("main");
  books.forEach((book) => {
    const h2 = document.createElement("h2");
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
});
