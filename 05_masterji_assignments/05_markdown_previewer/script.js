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

input.addEventListener('input', updatePreview);

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
    else if (trimmedLine.startsWith('* ')){
      convertedText += `<strong>${trimmedLine.substring(2)}</strong>\n`
    }
    else if (trimmedLine.startsWith('_ ')){
      convertedText += `<em>${trimmedLine.substring(2)}</em>\n`
    }

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


    /* ------------------ Links ------------------ */
    else if (trimmedLine.includes('](') && trimmedLine.includes('[') && trimmedLine.includes(')')) {
      let startText = trimmedLine.indexOf('[') + 1;
      let endText = trimmedLine.indexOf(']');
      let startURL = trimmedLine.indexOf('(') + 1;
      let endURL = trimmedLine.indexOf(')');

      if (startText > 0 && endText > startText && startURL > 0 && endURL > startURL) {
        let textPart = trimmedLine.substring(startText, endText);
        let urlPart = trimmedLine.substring(startURL, endURL);
        convertedText += `<a href="${urlPart}">${textPart}</a>\n`;
      }
    }

    /* ------------------ Images ------------------ */
    else if (trimmedLine.includes('![') && trimmedLine.includes('](') && trimmedLine.includes(')')) {
      let startAlt = trimmedLine.indexOf('![') + 2;
      let endAlt = trimmedLine.indexOf(']');
      let startSrc = trimmedLine.indexOf('(') + 1;
      let endSrc = trimmedLine.indexOf(')');

      if (startAlt > 1 && endAlt > startAlt && startSrc > 0 && endSrc > startSrc) {
        let altText = trimmedLine.substring(startAlt, endAlt);
        let srcText = trimmedLine.substring(startSrc, endSrc);
        convertedText += `<img src="${srcText}" alt="${altText}">\n`;
      }
    }

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

  /* ---------------------- Ensure List is Closed ------------------- (not necessary but it is a confirmation) */ 
  if (inUnorderedList) convertedText += '</ul>\n';
  if (inOrderedList) convertedText += '</ol>\n';

  return convertedText;
}

function updatePreview() {
  const input_text = input.value;
  output.innerHTML = convertMarkDown(input_text);
}





function isOrderedList(line) {
  let words = line.split(' ');
  if (words.length < 2) return false; 

  let numberPart = words[0]; 

  if (!isNaN(numberPart) && numberPart.includes('.')) {
    return true;
  }
  return false;
}