var nameInp = document.getElementById("nameInp");
var urlInp = document.getElementById("urlInp");
var myBtn = document.getElementById("myBtn");
var rowBody = document.getElementById("rowBody");
var alertContainer = document.getElementById("alertContainer");
var alertContainerr = document.getElementById("alertContainerr");
var bookMarkContainer;
if (localStorage.getItem("bookMarkContainer") == null) {
    bookMarkContainer = [];
} else {
    bookMarkContainer = JSON.parse(localStorage.getItem("bookMarkContainer"));
    dispalyData();

}
myBtn.onclick = function () {
    if (validationForm() == true) {
        addBookMark();
        dispalyData();
        clearForm();
    }
}


function addBookMark() {
    var book = {
        nameb: nameInp.value,
        urlb: urlInp.value
    }
    bookMarkContainer.push(book);
    localStorage.setItem("bookMarkContainer", JSON.stringify(bookMarkContainer));
}

function dispalyData() {
    var cols = "";
    for (var i = 0; i < bookMarkContainer.length; i++) {
        cols += `
        
<div class="col-md-9 my-5  m-auto text-center" ">
<div class="d-flex justify-content-between" style="background: #212529  ;color:#fff; border-radius:20px">
                <span class="h6  font-weight-bold px-4 pt-2">` +
            bookMarkContainer[i].nameb + `</span>
            <div >
                <button class="btn btn-primary mx-2" id="visitInp" ><a class="text-decoration-none text-white" href ="http://` + bookMarkContainer[i].urlb + `">Visit</a></button>
                <button class="btn btn-danger" onclick="deletBook(` + i + `)">
                    delete
                </button>
                </div>

            </div>
            
<div class="my-2">
</div>
</div>

`
    }
    rowBody.innerHTML = cols
}

function clearForm() {
    var inputs = document.getElementsByClassName("form-control");

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = " ";
    }
}

function deletBook(id) {
    bookMarkContainer.splice(id, 1);
    dispalyData();
    localStorage.setItem("bookMarkContainer", JSON.stringify(bookMarkContainer));
}

function validationForm() {
    var errors = "";
    var error = "";

    if (nameInp.value == false) {
        alertContainer.style.display = "block";
        errors += "<p>Name is required</P>";
        alertContainer.innerHTML = errors;
    }
    if (urlInp.value == false) {
        alertContainerr.style.display = "block";
        error += "<p> Url is required</P>";
        alertContainerr.innerHTML = error;
    }
    if (errors.length > 0) {
        return false;
    } else if (error.length > 0) {
        return false
    } else {
        alertContainer.style.display = "none";
        alertContainerr.style.display = "none";
        return true;
    }

}
