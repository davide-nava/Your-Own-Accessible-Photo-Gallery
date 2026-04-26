window.onload = function () {
    console.log("Page loaded — running addTabIndex()");
    addTabIndex();
};

function addTabIndex() {
    const figures = document.querySelectorAll("figure");
    for (let i = 0; i < figures.length; i++) {
        figures[i].setAttribute("tabindex", "0");
    }
    console.log("Tabindex added to all figures");
}

function highlightImage(event) {
    event.target.style.border = "4px solid #0077ff";
    console.log("Mouse over:", event.target.alt);
}

function removeHighlight(event) {
    event.target.style.border = "4px solid #ddd";
    console.log("Mouse leave:", event.target.alt);
}

function focusHighlight(event) {
    event.target.style.border = "4px solid #ff8800";
    console.log("Focus:", event.target.alt);
}

function blurHighlight(event) {
    event.target.style.border = "4px solid #ddd";
    console.log("Blur:", event.target.alt);
}
