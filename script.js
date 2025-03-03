const myLibrary = [];
function Book(title, author, pages, read) {
    this.title= title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  const hobbit = new Book("Hobbit","Tolkien",277,"yes")
  const anotherBook= new Book("AnotherBook","AnotherAuthor",999,"No")
  function addBookToLibrary(obj) {
    myLibrary.push(obj);
  }
  addBookToLibrary(hobbit);
  addBookToLibrary(anotherBook);
  let cardContainer= document.querySelector("#container");
  counter=0;
  for (element in myLibrary) {
    let div = document.createElement("div");
    cardContainer.append(div);
    div.className="card";
    let p1 =document.createElement("p");
    p1.textContent=`Title:${myLibrary[counter].title}`;
    let p2=document.createElement("p");
    p2.textContent=`Author:${myLibrary[counter].author}`;
    let p3=document.createElement("p");
    p3.textContent=`Pages:${myLibrary[counter].pages}`;
    let p4=document.createElement("p");
    p4.textContent=`Read:${myLibrary[counter].read}`;
    div.append(p1);
    div.append(p2);
    div.append(p3);
    div.append(p4);
    counter++;
  }
  
  