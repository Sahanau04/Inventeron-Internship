function startLoading() {
    const loader = document.getElementById("loader");

    loader.style.display = "block";

    setTimeout(() => {
        loader.style.display = "none";
        alert("Loaded!");
    }, 3000);
}