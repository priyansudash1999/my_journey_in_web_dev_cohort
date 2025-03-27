const input = document.getElementById('input'); 
const output = document.getElementsByClassName('output-screen')[0];
const reset = document.getElementById('reset')



reset.addEventListener('click', () => {
  let response = confirm('Do you really want to reset it beacuse it has no option of control + z, like our life')
  
  if (response) {
    input.value = ''
    output.innerHTML = ''
  }
})

function convertMarkDown(text) {
  const lines = text.split('\n');
  let convertedText = '';
  let inUnorderedList = false;
  let inOrderedList = false;

  lines.forEach(line => {
    let trimmedLine = line.trim(); // Remove extra spaces

    /*--------------------- Headings ------------------------ */

    if (trimmedLine.startsWith('# ')) {
      convertedText += `<h1>${trimmedLine.substring(2)}</h1>\n`;
    } 
    else if (trimmedLine.startsWith('## ')) {
      convertedText += `<h2>${trimmedLine.substring(3)}</h2>\n`;
    } 
    else if (trimmedLine.startsWith('### ')) {
      convertedText += `<h3>${trimmedLine.substring(4)}</h3>\n`;
    } 
    else if (trimmedLine.startsWith('#### ')) {
      convertedText += `<h4>${trimmedLine.substring(5)}</h4>\n`;
    } 
    else if (trimmedLine.startsWith('##### ')) {
      convertedText += `<h5>${trimmedLine.substring(6)}</h5>\n`;
    } 
    else if (trimmedLine.startsWith('###### ')) {
      convertedText += `<h6>${trimmedLine.substring(7)}</h6>\n`;
    }


    /* --------------------- Bold and Italic ------------------- */
    

    /* ---------------------- Unordered List ------------------- */
    else if (trimmedLine.startsWith('- ')) {
      if (!inUnorderedList) {
        convertedText += '<ul>\n'; 
        inUnorderedList = true;
      }
      convertedText += `<li>${trimmedLine.substring(2)}</li>\n`;
    } 

    /* ---------------------- Ordered List ------------------- */
    else if (isOrderedList(trimmedLine)) {
      if (!inOrderedList) {
        convertedText += '<ol>\n';
        inOrderedList = true;
      }
      convertedText += `<li>${trimmedLine.substring(trimmedLine.indexOf(' ') + 1)}</li>\n`;
    } 


    /* ----------------------- images and links ------------------- */






    /* ---------------------- Handle End of Lists ------------------- */
    else {
      if (inUnorderedList) {
        convertedText += '</ul>\n'; 
        inUnorderedList = false;
      }
      if (inOrderedList) {
        convertedText += '</ol>\n'; 
        inOrderedList = false;
      }
      convertedText += `<p>${trimmedLine}</p>\n`; 
    }
  });

  /* ---------------------- Ensure List is Closed ------------------- */
  if (inUnorderedList) convertedText += '</ul>\n';
  if (inOrderedList) convertedText += '</ol>\n';

  return convertedText;
}

function updatePreview() {
  const input_text = input.value;
  output.innerHTML = convertMarkDown(input_text);
}

input.addEventListener('input', updatePreview);



function isOrderedList(line) {
  let words = line.split(' ');
  if (words.length < 2) return false; 

  let numberPart = words[0]; 

  if (!isNaN(numberPart) && numberPart.includes('.')) {
    return true;
  }
  return false;
}