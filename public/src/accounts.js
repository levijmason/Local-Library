// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, userId) {
  return accounts.find((accounts) => accounts.id == userId);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA,accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1);
} 

function getTotalNumberOfBorrows(account, books) { 
  const borrowed = books.filter((book) => { 
    return book.borrows.some((bookId) => bookId.id === account.id); 
  }); 
    return borrowed.length; 
}

function getBooksPossessedByAccount(account, books, authors) {
  return books.filter(
    ({borrows}) => borrows[0].id == account.id && !borrows[0].returned
  ).map((book) => {
      const author = authors.find(
        (auth) => auth.id == book.authorId
      );
      return { ...book, author };
    }
  );
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};