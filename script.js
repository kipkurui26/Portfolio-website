//START ...........................................................................................
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
setInterval(textLoad, 12100); //END ...............................................................

//START ...........................................................................................
// The Actice selector in list to indicate the ka small line under the link name
let list = document.querySelectorAll(".list-item");
for (let i=0; i<list.length; i++){
    list[i].onclick = function(){
        let j = 0;
        while(j < list.length){
            list[j++].className = 'list-item';
        }
        list[i].className = "list-item active"; 
    }
} //END............................................................................................

//START ...........................................................................................
// The Toast Notification Section
// Variables
const showBtn = document.querySelector("#button"),
      toast = document.querySelector(".toast"),
      closeBtn = document.querySelector(".close"),
      progressBar = document.querySelector(".progress");

// To show the Popup Toast
function showToast(){
    // Shows the popup and progress bar
    toast.classList.add("active");
    progressBar.classList.add("active");

    // TimeOut to remove the popup toast 
    setTimeout(function(){
        toast.classList.remove("active");
    }, 5000);

    // TimeOut to remove the progressbar
    setTimeout(function(){
        progressBar.classList.remove("active");
    }, 5300);
}

// To close the Popup Toast
function closeToast(){
    // Removes the popup toast
    toast.classList.remove("active");

    // TimeOut to remove the progressbar
    setTimeout(function(){
        progressBar.classList.remove("active");
    }, 300);
}

// Event Listeners to initiate functions on click
closeBtn.addEventListener('click', closeToast); //END..............................................

//START ...........................................................................................
 // Script for sending email to the client
 const full_name = document.getElementById("name");
 const email = document.getElementById("email-add");
 const message = document.getElementById("message");
 const submit = document.getElementsByClassName("form")[0];
 let popup = document.getElementById("popup");

 submit.addEventListener("submit", (e) =>{
     e.preventDefault();
     let ebody = `
         <b>Name: </b>${full_name.value}
         <br>
         <b>Email Address: </b>${email.value}
         <br>
         <b>Message: </b>${message.value}
         <br>
         `;
     Email.send({
         SecureToken: "1b6baf0f-be2c-43ac-9b88-10ce152b418f",
         To: "kipkuruijapheth11@gmail.com",
         From: "kipkuruijapheth11@gmail.com",
         Subject: "New Message From " + full_name.value,
         Body: ebody,
     }).then(
         function openPopup(){
            showToast();
             document.getElementById("name").value = "";
             document.getElementById("email-add").value = "";
             document.getElementById("message").value = "";
         }
     );
 }) //END .........................................................................................
