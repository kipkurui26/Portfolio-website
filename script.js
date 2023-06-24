const text = document.querySelector(".sec-text");

function textLoad(){
    setTimeout(function(){
        text.textContent = "Web Designer.";
    }, 0);
    setTimeout(function(){
        text.textContent = "Web Developer.";
    }, 4000);
    setTimeout(function(){
        text.textContent = "UX/UI Designer";
    }, 8000);
}

textLoad();
setInterval(textLoad, 12100);