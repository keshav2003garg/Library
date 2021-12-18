let counter = 0;
let libraryForm = document.getElementById("libraryForm")
libraryForm.addEventListener("submit", function(e) {
    e.preventDefault()
    let bookName = document.getElementById("bookName").value
    let bookAuthor = document.getElementById("bookAuthor").value
    let bookType
    let fiction = document.getElementById("fiction")
    let programming = document.getElementById("programming")
    let cooking = document.getElementById("cooking")
    if(fiction.checked){
        bookType = fiction.value
    }
    else if(programming.checked){
        bookType = programming.value
    }
    else if(cooking.checked){
        bookType = cooking.value
    }
    counter++;
    let tableBody = document.getElementById("tableBody")
    let uiString = `<tr>
                        <th scope="row">${counter}</th>
                        <td>${bookName}</td>
                        <td>${bookAuthor}</td>
                        <td>${bookType}</td>
                    </tr>`
    tableBody.innerHTML += uiString
})