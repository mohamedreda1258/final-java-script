let input = document.getElementById('input');
let btn = document.getElementById('btn');
let notasks = document.getElementById('notasks');
let alltasks = document.getElementById('alltasks');


function addNewTask() {
    let data = input.value;

    if (data.trim() == '' || (data.trim() < 3 || data.length > 20)) {

        window.alert("please enter valid data")
    } else {
        alltasks.innerHTML += `<div class="alert alert-info  check"> ${ data }
    <button class = "btn btn-danger delete" style="float: right;   margin:-7px"  > Delete </button>    
    </div>`
        notasks.style.display = "none"
        input.value = '';
    }
}


btn.addEventListener('click', addNewTask)


function checkdiv() {
    if (alltasks.childElementCount == 0) {
        notasks.style.display = "block";
    }
}


document.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
        checkdiv()
    }
});

document.addEventListener('click', (e) => {

    if (e.target.classList.contains('check'))
        e.target.classList.toggle('checked');

})