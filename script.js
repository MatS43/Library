let myLibrary = [];
class Book {
  constructor(title, author, pages, read){
    this.title= title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

  const hobbit = new Book("Hobbit","Tolkien",277,true)
  const anotherBook= new Book("AnotherBook","AnotherAuthor",999,false)
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
    let buttonRead=document.createElement("button");
    buttonRead.textContent=`Read:${myLibrary[counter].read}`;
    buttonRead.className=`${myLibrary[counter].read}`;
    if(myLibrary[counter].read===true){
        buttonRead.textContent=`Read`;
    }else{
        buttonRead.textContent=`Unread`;  
    }
    buttonRead.addEventListener("click", ()=>{
        myLibrary[counter].read=!myLibrary[counter].read;
        buttonRead.className=`${myLibrary[counter].read}`;
        if(myLibrary[counter].read===true){
            buttonRead.textContent=`Read`;
        }else{
            buttonRead.textContent=`Unread`;  
        }
        
    })
    let buttonDelete = document.createElement("button");
    buttonDelete.textContent="Delete book";
    buttonDelete.className="delete-button"
    buttonDelete.addEventListener("click", ()=>{
        div.remove();
        myLibrary.splice(counter, 1);
    })
    div.append(p1);
    div.append(p2);
    div.append(p3);
    div.append(buttonRead);
    div.append(buttonDelete);
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
        if(div===null){
            return;
        }
        div.remove();
    }
   } 
  submitButton.addEventListener("click", ()=>{
    event.preventDefault();
    removeBook();
    addBookonclick();
  })
  showBook();
  
  