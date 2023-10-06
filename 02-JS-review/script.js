const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
]

function getBooks() {
  return data
}
getBooks()

function getBook(id) {
  return data.find((d) => d.id === id)
}

/*
// Destructuring
const book = getBook(2) //select id
console.log(book)

// const title = books.title
// const author = books.author
// console.log(author, title)

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book //Object Destructuring

console.log(author, title, genres)

// const primaryGenre = genres[0]
// const secondaryGenre = genres[1]

const [primaryGenre, secondaryGenre, ...otherGenres] = genres //array destructuring //Spread Operator - must be last in a destructure
console.log(primaryGenre, secondaryGenre, otherGenres)

// const newGenres = [...genres, "epic fantasy"] // add into an array with a spread operator (last)
const newGenres = ["epic fantasy", ...genres] // add into an array with a spread operator (front)
console.log(newGenres)

const updatedBook = { ...book, moviePublication: "2001-12-19", pages: 1210 } //adding new properties using spread operator //overwriting an existing property
console.log(updatedBook)

// function getYear(str) {
//     return str.split("-")[0]
// }

const getYear = (str) => str.split("-")[0]
console.log(getYear(publicationDate))

const summary = `${title}, a ${pages}-page long book was written by ${author} and published in ${getYear(
  publicationDate
)}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie` //Template literal //any kind of expression //interesting .split
console.log(summary)

const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000" //Ternary Operator
console.log(pagesRange)
console.log(`The book has ${pagesRange}`)

console.log(true && "some string")
console.log(false && "some string") //short circuiting - doesn't look further
console.log(hasMovieAdaptation && "This book has a movie")

//falsy: 0, '', null
console.log("jonas" && "some string")
console.log(0 && "some string") //short circuiting


console.log(true || 'some string') //short circuits when the 1st value is true
console.log(false || 'some string')

console.log(book.translations.spanish)

const spanishTranslation = book.translations.spanish || "NOT TRANSLATED"
console.log(spanishTranslation)

console.log(book.reviews.librarything.reviewsCount)
const countWrong = book.reviews.librarything.reviewsCount || "no data"
console.log(countWrong) //this operator could still spit the wrong info/expectation


//To counter =>
const count = book.reviews.librarything.reviewsCount ?? "no data" //Nullish coalescing operator
console.log(count) //will only return the 2nd value if the 1st value is null or undefined but not when it is 0 or an empty string ""

function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads.reviewsCount
  const librarything = book.reviews.librarything?.reviewsCount ?? 0 //optional chaining "?" only continues if it is not undefined or not null //?? 0 giving a default value
  return goodreads + librarything
}

console.log(getTotalReviewCount(book))
*/

/*
function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads.reviewsCount
  const librarything = book.reviews.librarything?.reviewsCount ?? 0 //optional chaining "?" only continues if it is not undefined or not null //?? 0 giving a default value
  return goodreads + librarything
}

const books = getBooks()
console.log(books)

const x = [1, 2, 3, 4, 5].map((el) => el * 2)
console.log(x)

const titles = books.map((book) => book.title)
console.log(titles)
*/

// const essentialData = books.map(book => {
//     return {
//         title: book.title,
//         author: book.author
//     }
// })

/*
const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}))
console.log(essentialData)

const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation) //Filter Method
console.log(longBooksWithMovie)

const adventureBooks = books
  .filter((books) => books.genres.includes("adventure"))
  .map((book) => book.title) //combining array filter and map methods
console.log(adventureBooks)

// most common use case of Reduce method
const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0) //acc - the current value of the final value that we want to boil the array down to which in this case is the pages of all the books combined //acc is like a storage when iterating
console.log(pagesAllBooks)

const arr = [3, 7, 1, 9, 6]
const sorted = arr.sort((a, b) => a - b) //sorting in ascending way // b - a sorting in descending way
console.log(sorted)
console.log(arr) //sort is a method that mutates the original array

//To counter =>
const arrs = [3, 7, 1, 9, 6]
const sorteds = arrs.slice().sort((a, b) => a - b) //slice return a brand new array which is a copy of the original array
console.log(sorteds)
console.log(arrs)

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages)
console.log(sortedByPages)

//Working with immutable Arrays
// 1) Add a book object to array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
}
const booksAfterAdd = [...books, newBook] //if you want to add a new object into an array
console.log(booksAfterAdd)

// 2) Delete a book object from an Array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3) //Removes the book with id: 3
console.log(booksAfterDelete)

// 3) Update a book object in the Array - map is the choice whenever we want to update an object that is inside an array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1 } : book //Update a property
)
console.log(booksAfterUpdate)
*/

//PROMISES
//fetch - returns a promise //json - also returns a promise so it will take some time
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data))

// console.log("jonas") //This executes first

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos")
  const data = await res.json()
  console.log(data)

  return data
}

const todos = getTodos() //another promise
console.log(todos)

// getTodos()

console.log("jonas") //This executes first