let myLibrary = [];
function Book(title, author, pages, read) {
    this.title= title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  const hobbit = new Book("Hobbit","Tolkien",277,"Yes")
  const anotherBook= new Book("AnotherBook","AnotherAuthor",999,"No")
  function addBookToLibrary(obj) {
    myLibrary.push(obj);
  }
  addBookToLibrary(hobbit);
  addBookToLibrary(anotherBook);
  let cardContainer= document.querySelector("#container");
  let openButton = document.querySelector("[data-open-modal]");
  let closeButton = document.querySelector("[data-close-modal]")
  let submitButton = document.querySelector("#submit-button")
  const modal = document.querySelector("[data-modal]")
  openButton.addEventListener("click", ()=>{
    modal.showModal()
  })
  closeButton.addEventListener("click", ()=>{
    modal.close()
  })
  function showBook (){
  for (let counter=0; counter < myLibrary.length; counter++) {
    let div = document.createElement("div");
    cardContainer.append(div);
    div.className="card";
    div.setAttribute('data',`${counter}`);
    let p1 =document.createElement("p");
    p1.textContent=`Title:${myLibrary[counter].title}`;
    let p2=document.createElement("p");
    p2.textContent=`Author:${myLibrary[counter].author}`;
    let p3=document.createElement("p");
    p3.textContent=`Pages:${myLibrary[counter].pages}`;
    let p4=document.createElement("p");
    p4.textContent=`Read:${myLibrary[counter].read}`;
    let button = document.createElement("button");
    button.textContent="Delete book";
    button.className="delete-button"
    button.addEventListener("click", ()=>{
        div.remove();
        myLibrary=myLibrary.slice(counter);
    })
    div.append(p1);
    div.append(p2);
    div.append(p3);
    div.append(p4);
    div.append(button);
  }
}
  function addBookonclick(){
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("input[name=read]:checked").value;
    let bookOnClick= new Book(title,author,pages,read)
    addBookToLibrary(bookOnClick);
    showBook();
 }
   function removeBook(){
    for (let counter=0; counter < myLibrary.length; counter++) {
        let div = document.querySelector(`.card`);
        div.remove();
    }
   } 
  showBook();
  submitButton.addEventListener("click", ()=>{
    event.preventDefault();
    removeBook()
    addBookonclick();
  })
  
  