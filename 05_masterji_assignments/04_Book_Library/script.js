const grid_view = document.getElementsByClassName('grid-view')[0]
const list_view = document.getElementsByClassName('list-view')[0]

// header-items
const header_items = document.getElementsByClassName('header-items')[0]

// get all buttons
const filter = document.getElementById('filter')
const sort = document.getElementById('sort')
const list_grid = document.getElementById('view')

const toggle_theme = document.getElementsByClassName('bg-changer')[0]

const fetchUrl = 'https://api.freeapi.app/api/v1/public/books'

const fetchBooks = async() => {
  try{
    const response = await fetch(fetchUrl)
    let res_data = await response.json()
    console.log(res_data);
    if (res_data.data && Array.isArray(res_data.data.data)) { 
      res_data.data.data.forEach(book => {
        console.log(book.volumeInfo.title);
        console.log(book.volumeInfo.authors);
        console.log(book.volumeInfo.publisher);
        console.log(book.volumeInfo.publishedDate);
        console.log(book.volumeInfo.imageLinks.smallThumbnail);
        console.log(book.volumeInfo.imageLinks.thumbnail);

        // thumbnail
        const book_img = document.createElement('img')
        book_img.src = book.volumeInfo.imageLinks.thumbnail
        book_img.classList.add('book-image')

        // title
        const book_title = document.createElement('h3')
        book_title.innerText = book.volumeInfo.title;
        book_title.classList.add('book-title')
        
        // authors
        const book_authors = document.createElement('h5')
        book_authors.innerText = book.volumeInfo.authors
        book_authors.classList.add('book-authors')

        // Publishers
        const book_publishers = document.createElement('p')
        book_publishers.innerText = book.volumeInfo.publisher
        book_publishers.classList.add('book-publisher')

        // publishedDate
        const book_publish_date = document.createElement('p')
        book_publish_date.innerText = book.volumeInfo.publishedDate
        book_publish_date.classList.add('book-publish-date')


        // elements container who can contains both image and datas
        const element_container = document.createElement('div')
        element_container.classList.add('element-container')

        // only data container
        const data_container = document.createElement('div')
        data_container.classList.add('data-container')

        data_container.appendChild(book_title)
        data_container.appendChild(book_authors)
        data_container.appendChild(book_publishers)
        data_container.appendChild(book_publish_date)

        element_container.appendChild(book_img)
        element_container.appendChild(data_container)

        grid_view.appendChild(element_container)
        
      });
    } else {
      console.log("No books found in the response.");
    }
  }
  catch(err){
    console.error('Get error when fetching the url', err)
  }
}

fetchBooks()