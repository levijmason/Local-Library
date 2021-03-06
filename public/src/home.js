// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.filter((book) => {
    const[recent] = book.borrows;
    return !recent.returned;
  }).length
}

function sortFunction(obj) {
  const key = Object.keys(obj);
  return key.sort((keyA, keyB) => {
    if (obj[keyA] > obj[keyB]) {
      return -1;
    } else if (obj[keyA] < obj[keyB]) {
      return 1;
    } else { return 0 }
  })
}

function getMostCommonGenres(books) {
  const count = books.reduce((acc, {genre}) => {
    if (acc[genre]) {
      acc[genre] += 1;
    } else {
      acc[genre] = 1;
    }
    return acc;
  }, {})
  const sortValues = sortFunction(count);
  return sortValues.map((name) => ({name, count: count[name]})).slice(0, 5);

}

function getMostPopularBooks(books) {
  const result = books.map((book) => {
    const popular = {
      name: book.title, count: book.borrows.length
    } 
    return popular;
  })
  return result.sort((titleA, titleB) => titleB.count - titleA.count).slice(0,5);
}

function getMostPopularAuthors(books, authors) {
  let popAuthors = [];
  for (let book in books){
    let aBook = books[book].authorId;
    let aMatch = authors.find((auth) => auth.id === aBook);
    let aName = aMatch.name.first + " " + aMatch.name.last;
    popAuthors.push({ name: aName, count: books[book].borrows.length });
  }
  return popAuthors.sort((authA, authB) => (authA.count > authB.count ? -1 : 1)).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
 