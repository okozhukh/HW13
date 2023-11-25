//Завдання 1
document.getElementById('getDataButton').addEventListener('click', getData);

function getData() {
  var xhr = new XMLHttpRequest();
  
  xhr.open('GET', 'serverEndpoint', true);
  
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      document.getElementById('result').innerHTML = xhr.responseText;
    }
  };
  
  xhr.send();
}


//Завдання 2
document.getElementById('getDataButton').addEventListener('click', getAuthors);

function getAuthors() {
  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'books.json', true);

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var books = JSON.parse(xhr.responseText);

      displayAuthors(books);
    }
  };

  xhr.send();
}

function displayAuthors(books) {
  var authorsList = document.getElementById('authorsList');
  authorsList.innerHTML = ''; 

  books.forEach(function(book) {
    var authorItem = document.createElement('li');
    authorItem.textContent = book.author;
    authorsList.appendChild(authorItem);
  });
}


//Завдання 3
