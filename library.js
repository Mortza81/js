let addbook = document.querySelector('#add-book a')
let bookname = document.querySelector('#add-book input')
let booklist = document.querySelector('ul')
// let del=document.querySelector('.delete')
// console.log(del)
// 
document.addEventListener('click',(e)=>{
    if(e.target.className=='delete'){
        booklist.removeChild(e.target.parentElement)
        deletebook(e.target.parentElement.children[0].innerHTML)
        
    }
})
addbook.addEventListener('click', (e) => {
    if (e.target.parentElement[0].value != null) {
        booklist.innerHTML += `<li>
        <span class="name">${bookname.value}</span>
        <span class="delete">حذف</span>
        </li>`
        store(bookname.value)
    }
    bookname.value=''
})
function store(name) {
    let books
    if (localStorage.getItem('books') == null) {
        books = []
    }
    else {
        books = localStorage.getItem('books').split(',')
    }
    books.push(name)
    localStorage.setItem('books', books)
}
function deletebook(bookname) {
    let books = localStorage.getItem('books').split(',')
    index = books.indexOf(bookname)
    books.splice(index, 1)
    localStorage.setItem('books',books)
}
document.addEventListener('DOMContentLoaded', () => {
    let books=[]
    if (localStorage.getItem('books') != null) {
        books = localStorage.getItem('books').split(',')
    }
    for (book of books) {
        booklist.innerHTML += `<li>
        <span class="name">${book}</span>
        <span class="delete">حذف</span>
        </li>`
    }
})
document.querySelector('#hide input').
addEventListener('change',(e)=>{
    if(e.target.checked){
        booklist.style.display='none'
    }
    else{
        booklist.style.display='block'
        
    }
})
if(localStorage.getItem('books')==''){
    localStorage.removeItem('books')
}
document.querySelector('#search-books').addEventListener('keyup',(e)=>{
    for(i of booklist.children){
        if(i.children[0].innerHTML.indexOf(e.target.value)==-1){
            i.style.display='none'
        }
        else{
            i.style.display='block'
        }
    }})