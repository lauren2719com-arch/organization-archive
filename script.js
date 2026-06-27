document.querySelector("button").addEventListener("click", function () {
    const search = document.querySelector("input").value;

    if (search.trim() === "") {
        alert("Please enter a file name.");
    } else {
        alert("Searching for: " + search);
    }
});
