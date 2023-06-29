const text = document.querySelector(".sec-text");

function textLoad(){
    setTimeout(function(){
        text.textContent = "Web Designer.";
    }, 0);
    setTimeout(function(){
        text.textContent = "Web Developer.";
    }, 4000);
    setTimeout(function(){
        text.textContent = "UX/UI Designer.";
    }, 8000);
}

textLoad();
setInterval(textLoad, 12100);

// The Actice selector in list to indicate the ka small line under the link name
let list = document.querySelectorAll(".list-item");
for (let i=0; i<list.length; i++){
    list[i].onclick = function(){
        let j = 0;
        while(j < list.length){
            list[j++].className = 'list-item';
        }
        list[i].className = "list-item active";
        console.log("active");
    }
}