let change = document.getElementById("change")

change.addEventListener("click", changer)

function changer(){
    document.body.style.backgroundColor ='#' + Math.random().toString(16).slice(2,8);
}