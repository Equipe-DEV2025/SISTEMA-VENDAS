function showLoading() {
    const div = document.createElement("div");
    div.classList.add("Loading", "centralize");

    const label = document.createElement("label");
    label.innerText = "Carregando...";

    div.appendChild(label);

    document.body.appendChild(div);
}

function hideLoading() {
    const loadings = document.getElementsByClassName("Loading");
    if (loadings.length) {
        loadings[0].remove();
    }
}