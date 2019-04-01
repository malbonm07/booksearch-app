const list = document.querySelector('.list-titles ul')
//delete book
list.addEventListener('click', (e) => {
  if(e.target.className === 'button delete') {
    let li = e.target.parentElement
    list.removeChild(li)
  }
})

const addForm = document.forms["add-book"] //add-book is the ID of the element.

addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = addForm.querySelector('input[type=text]').value


  //create element
  let li = document.createElement('li')
  let bookName = document.createElement('span')
  let deleteBtn = document.createElement('span')
  //add textContent / texto del elemento
  deleteBtn.textContent = 'Delete';
  bookName.textContent = value;
  //add class name
  deleteBtn.classList.add('button', 'delete')

  //append to document
  li.appendChild(bookName)
  li.appendChild(deleteBtn)
  list.appendChild(li)
})

const checkAll = document.querySelector('#check-all')

checkAll.addEventListener('change', e => {
  if(checkAll.checked) {
    list.style.display = 'none';
  }else {
    list.style.display = 'initial';
  }
})

const searchBook = document.getElementById('search-book').querySelector('input')

searchBook.addEventListener('keyup', (e) => {
  const searching = e.target.value.toLowerCase();
  const books = [...list.querySelectorAll('li')]

  books.forEach(book => {
    if(book.firstElementChild.textContent.toLowerCase().includes(searching)) {
      book.style.display = 'flex';
    }else{
      book.style.display = 'none';
    }
  })

})

//Atributes
// getAttribute
// setAttribute
// removeAttribute
// hasAttribute -> Boolean


// let buttons = [...document.querySelectorAll('.delete')]
//
// buttons.forEach(button => {
//   button.addEventListener('click', function(e) {
//   let li = e.target.parentElement;
//   li.parentNode.removeChild(li)
//   })
// })



// let titles = [...document.getElementsByClassName('title')];
//
// let appContainer = document.querySelector('#app-container')
//
// let appListSecondItem = document.querySelector('.list-titles li:nth-child(2) .name')
//
// let appTitle = [...document.querySelectorAll('.list-titles li .name')]
//
// let appListTitles = document.querySelector('.list-titles ul')
//
// let titleH1 = document.querySelector('#head-app h1')
//
//
// titleH1.addEventListener('click', function(e) {
//   console.log(e.target)
//   console.log(e)
// })
