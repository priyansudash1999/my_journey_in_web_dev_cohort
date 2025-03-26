const grid_view = document.getElementsByClassName('grid-view')[0]
const list_view = document.getElementsByClassName('list-view')[0]

// header-items
const header_items = document.getElementsByClassName('header-items')[0]

// get all buttons
const sortSelects = document.querySelectorAll('.sort')
const list_grid = document.getElementById('view')

const toggle_theme = document.querySelectorAll('.bg-changer')

// get next and prev btns
const nextBtn = document.getElementById('next')
const prevBtn = document.getElementById('prev')

const page_number = document.getElementsByClassName('page-number')[0]

const fetchUrl = 'https://api.freeapi.app/api/v1/public/books'


let allBooks = []
let currPage = 1
let booksPerPage_on_grid_view = getBooksPerPageOnGridView()

function getBooksPerPageOnGridView(){
  if(window.innerWidth <= 600) return 8
  if(window.innerWidth <= 1024) return 12
  if(window.innerWidth > 1024) return 16
}

function getBooksPerPageOnListView(){
  return 10
}

const fetchBooks = async() => {
  try{
    let page = 1

    while(true){
      const response = await fetch(`${fetchUrl}?page=${page}`)
      if(!response.ok) return new Error('Failed to fetch the url ', fetchUrl)
      let res_data = await response.json()
      const books = res_data.data && res_data.data.data ? res_data.data.data : []
      if(books.length === 0) break
      allBooks = [...allBooks, ...books]
      page++
    }
    displayBooksOnScreen(currPage)
  }
  catch(err){
    console.error('Get error when fetching the url', err)
  }
}

function displayBooksOnScreen(page){
  booksPerPage = getBooksPerPageOnGridView()
  grid_view.innerHTML = ''
  let startIndex = (page - 1) * booksPerPage; 
  let endIndex = startIndex + booksPerPage;
  let booksToShow = allBooks.slice(startIndex, endIndex);

  if (booksToShow.length === 0) {
    console.log("No books found.");
    return;
  }

  booksToShow.forEach(book => {
    const {title, authors, publisher, publishedDate, imageLinks} = book.volumeInfo || {}
    const book_img = document.createElement('img')
    book_img.src = imageLinks.thumbnail
    book_img.alt = title 
    book_img.classList.add('book-image')

    const book_title = document.createElement('h3')
    book_title.innerText = title 
    book_title.classList.add('book-title')

    const book_authors = document.createElement('h5')
    book_authors.innerText = authors.join(', ') 
    book_authors.classList.add('book-authors')

    const book_publishers = document.createElement('p')
    book_publishers.innerText = publisher 
    book_publishers.classList.add('book-publisher')

    const book_publish_date = document.createElement('p')
    book_publish_date.innerText = publishedDate
    book_publish_date.classList.add('book-publish-date')

    const data_container = document.createElement('div')
    data_container.classList.add('data-container')
    data_container.append(book_title, book_authors, book_publishers, book_publish_date);

    const element_container = document.createElement('div')
    element_container.classList.add('element-container')
    element_container.append(book_img, data_container)

    grid_view.appendChild(element_container)
  });
  page_number.innerText = currPage
  
}
prevBtn.addEventListener('click', () => {
  if (currPage > 1) {
    currPage--;
    displayBooksOnScreen(currPage);
    // console.log('abcd');
  }
});

nextBtn.addEventListener('click', () => {
  let totalPages = Math.ceil(allBooks.length / booksPerPage);
  if (currPage < totalPages) {
    currPage++;
    displayBooksOnScreen(currPage);
  }
});
window.addEventListener('resize', () => {
  booksPerPage = getBooksPerPageOnGridView();
  displayBooksOnScreen(currPage);
});

toggle_theme.forEach(bg => {
  bg.addEventListener('click', () => {
    const element_container = document.querySelectorAll('.element-container')
    if (bg.innerText === '🌙') {
      element_container.forEach(ele => {
        ele.style.border = '1px solid #000'
      })
      bg.innerText = '🌞';
      document.body.style.backgroundColor = '#fff'
      document.body.style.color = '#000'
      nextBtn.style.backgroundColor = '#000'
      nextBtn.style.color = '#fff'
      prevBtn.style.backgroundColor = '#000'
      prevBtn.style.color = '#fff'
    }
    else{
      element_container.forEach(ele => {
        ele.style.border = '1px solid #fff'
      })
      bg.innerText ='🌙'
      document.body.style.backgroundColor = '#000'
      document.body.style.color = '#fff'
      nextBtn.style.backgroundColor = '#fff'
      nextBtn.style.color = '#000'
      prevBtn.style.backgroundColor = '#fff'
      prevBtn.style.color = '#000'
    }
  })
})



// apply search functionality
document.querySelectorAll('.search').forEach(search => {
  search.addEventListener('input', (e) => {
    const searchValue = e.target.value.toLowerCase().trim()
    console.log(searchValue);
    // console.log(allBooks)

    const filteredBooks = allBooks.filter(book => {
      return (
        book.volumeInfo.title.toLowerCase().includes(searchValue) ||
        (book.volumeInfo.authors && book.volumeInfo.authors.join(', ').toLowerCase().includes(searchValue))
      );
    });
    console.log(filteredBooks);
    // displayBooksOnScreen(filteredBooks) -> It uses pagination 
    displayFilterBooks(filteredBooks)

  })
})

function displayFilterBooks(filteredBooks){
  grid_view.innerHTML = ''; // Clear the previous books

  if (filteredBooks.length === 0) {
    grid_view.innerHTML = '<p>No books found</p>';
    return;
  }

  filteredBooks.forEach(book => {
    const { title, authors, publisher, publishedDate, imageLinks } = book.volumeInfo || {}
    const book_img = document.createElement('img')
    book_img.src = imageLinks.thumbnail
    book_img.alt = title
    book_img.classList.add('book-image')

    const book_title = document.createElement('h3')
    book_title.innerText = title
    book_title.classList.add('book-title')

    const book_authors = document.createElement('h5')
    book_authors.innerText =  authors.join(', ') 
    book_authors.classList.add('book-authors')

    const book_publishers = document.createElement('p')
    book_publishers.innerText = publisher
    book_publishers.classList.add('book-publisher')

    const book_publish_date = document.createElement('p')
    book_publish_date.innerText = publishedDate
    book_publish_date.classList.add('book-publish-date')

    const data_container = document.createElement('div')
    data_container.classList.add('data-container')
    data_container.append(book_title, book_authors, book_publishers, book_publish_date)

    const element_container = document.createElement('div')
    element_container.classList.add('element-container')
    element_container.append(book_img, data_container)

    grid_view.appendChild(element_container)
  });
}

sortSelects.forEach(sortSelect => {
  sortSelect.addEventListener('change', (event) => {
    sortBooks(event.target.value); 
  });
});

function sortBooks(sortBy) {
  if (!allBooks.length) return; 

  if (sortBy === "title") {
    allBooks.sort((a, b) => a.volumeInfo.title.localeCompare(b.volumeInfo.title));
  } else if (sortBy === "date") {
    allBooks.sort(
      (a, b) => new Date(b.volumeInfo.publishedDate) - new Date(a.volumeInfo.publishedDate)
    );
  }

  currPage = 1;
  displayBooksOnScreen(currPage);
}





fetchBooks()