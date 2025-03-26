const grid_view = document.getElementsByClassName('grid-view')[0]
const list_view = document.getElementsByClassName('list-view')[0]

const toggle_list_grid = document.querySelectorAll('.list-grid-toggle')

// header-items
const header_items = document.getElementsByClassName('header-items')[0]

// get all buttons
const sortSelects = document.querySelectorAll('.sort')
const list_grid = document.getElementById('view')

const toggle_theme = document.querySelectorAll('.bg-changer')
const list_grid_view = document.querySelectorAll('.toggle-iist-grid')

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
    const {title, authors, publisher, publishedDate, imageLinks, infoLink} = book.volumeInfo || {}
    booksPerPage = getBooksPerPageOnGridView()
      let startIndex = (page - 1) * booksPerPage; 
      let endIndex = startIndex + booksPerPage;
      let booksToShow = allBooks.slice(startIndex, endIndex);

      if (booksToShow.length === 0) {
        console.log("No books found.");
        return;
      }
        
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
      if (infoLink) {
        element_container.style.cursor = 'pointer'
        element_container.addEventListener('click', () => {
          window.open(infoLink, '_blank')
        });
      } else {
        element_container.title = 'No additional details available'
      }

      grid_view.appendChild(element_container)
      page_number.innerText = currPage
    })
    // const book_list_view_img = document.createElement('img')
    // book_list_view_img.src = imageLinks.thumbnail
    // book_list_view_img.alt = title 
    // book_list_view_img.classList.add('book-list-view-img')

    // const book_list_view_title = document.createElement('h5')
    // book_list_view_title.innerText = title
    // book_list_view_title.classList.add('book-list-view-title') 

    // const book_list_view_authors = document.createElement('h6')
    // book_list_view_authors.innerText = authors.join(', ') 
    // book_list_view_authors.classList.add('book-list-view-authors')

    // const book_list_publishers = document.createElement('p')
    // book_list_publishers.innerText = publisher 
    // book_list_publishers.classList.add('book-list-view-publishers')

    // const list_publish_date = document.createElement('p')
    // list_publish_date.innerText = publishedDate
    // list_publish_date.classList.add('book-list-view-publish-date')

    // const list_view_data_container = document.createElement('div')
    // list_view_data_container.classList.add('list-view-data-container')
    // list_view_data_container.append(book_list_view_title, book_list_view_authors, book_list_publishers, list_publish_date);


    // const list_view_element_container = document.createElement('div')
    // list_view_element_container.classList.add('list-view-element-container')
    // list_view_element_container.append(book_list_view_img, list_view_data_container)
    // if (infoLink) {
    //   list_view_element_container.style.cursor = 'pointer'
    //   list_view_element_container.addEventListener('click', () => {
    //     window.open(infoLink, '_blank')
    //   });
    // } else {
    //   element_container.title = 'No additional details available'
    // }

    // list_view.appendChild(list_view_element_container)
  
  toggle_list_grid.forEach(toggle => {
    toggle.addEventListener('click', () => {
      alert('I did my project very complicated, so right now due to shortage time I can not add toggle functionality, i will fix it later.')
    })
  })

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
  grid_view.innerHTML = ''

  if (filteredBooks.length === 0) {
    grid_view.innerHTML = '<p>No books found</p>'
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
    )
  }
  currPage = 1;
  displayBooksOnScreen(currPage)
}



// document.querySelectorAll('.toggle-list-grid').forEach(toggleBtn => {
//   toggleBtn.addEventListener('click', () => {
//     if (toggleBtn.src.includes('./images/list.png')) {
//       toggleBtn.src = './images/grid.png'; 
//       toggleBtn.alt = 'grid'; 
//       list_view.classList.remove('hidden')
//       grid_view.classList.add('hidden')
      
//     } 
    // else {
    //   toggleBtn.src = './images/list.png';
    //   toggleBtn.alt = 'list';
    //   list_view.classList.add('hidden')
    //   grid_view.classList.remove('hidden')
      
    // }
    // });





fetchBooks()