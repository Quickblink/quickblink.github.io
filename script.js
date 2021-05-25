
function myFunction() {
    var copyText = document.getElementById("instruction");
    var textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
}


if (screen.width < 1110) {
    var mvp = document.getElementById("testViewport");
    mvp.setAttribute("content","width=350px,initial-scale=1");
}