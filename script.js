
        //simple 
        document.getElementById('contact-form').addEventListener('submit', function(eval) { 
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('name').value;
            const message = document.getElementById('name').value;

            //simple  form validation
            if (name && email && message) {
                alert('thank you  for your message, ${name}! well get back to you soon');
                document.getElementById('contact-form').reset(); // reset form fields
            } else {
                alert("please fill in all fields.");
                }
        })
        document.addEventListener("DOMContentLoaded", function () {
            const rainContainer = document.querySelector(".rain");
            const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
        
            for (let i = 0; i < 100; i++) {
                let drop = document.createElement("div");
                drop.classList.add("drop");
                drop.style.left = Math.random() * 100 + "vw";
                drop.style.animationDuration = Math.random() * 2 + 2 + "s";
                drop.style.background = colors[Math.floor(Math.random() * colors.length)];
                rainContainer.appendChild(drop);
            }
        })
            
