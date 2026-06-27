document.querySelector("button").addEventListener("click", function () {
    const search = document.querySelector("input").value;

    if (search.trim() === "") {
        alert("Please enter a file name.");
    } else {
        alert("Searching for: " + search);
    }
});
const overlay = document.getElementById("overlay");
const modalImage = document.getElementById("modalImage");
const close = document.getElementById("close");

function showImage(file){
    modalImage.src = "images/" + file;
    overlay.style.display = "flex";
}

close.onclick = () => {
    overlay.style.display = "none";
};

overlay.onclick = (e)=>{
    if(e.target===overlay){
        overlay.style.display="none";
    }
};
