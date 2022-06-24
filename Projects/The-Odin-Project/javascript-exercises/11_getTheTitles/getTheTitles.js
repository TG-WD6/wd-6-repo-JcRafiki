const getTheTitles = function(bookS) {
    let result=[];
    for (let index = 0; index < bookS.length; index++) {
        result.push(bookS[index].title);
    }
    return result;
};

    const books = [
      {
        title: 'Book',
        author: 'Name'
      },
      {
        title: 'Book2',
        author: 'Name2'
      }
    ]

getTheTitles(books);

// Do not edit below this line
module.exports = getTheTitles;
