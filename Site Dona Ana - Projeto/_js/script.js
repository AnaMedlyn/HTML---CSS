let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 3500)

function nextImage(){
    count++;
    if(count>2){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;

}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}