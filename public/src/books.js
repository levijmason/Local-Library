// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, authorId) {
  return authors.find((authors) => authors.id == authorId);
}

function findBookById(books, bookId) {
  return books.find((books) => books.id == bookId);
}

function partitionBooksByBorrowedStatus(books) {
  let status = []; 
  status.push( books.filter( ( {borrows} ) => !borrows[0].returned) ); 
  status.push( books.filter( ( {borrows} ) => borrows[0].returned) ); 
  return status;
}

function getBorrowersForBook(book, accounts) {
  const accountId = accounts.reduce((acc, account) => {
    acc[account.id] = account;
    return acc;
  }, {})
  return book.borrows.map(({id, returned}) => ({
    ...accountId[id],
    returned
  })).slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};