document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

(function(){
    emailjs.init("ZWkzx6Zg-1aonZwGF");
 })();
 

 function sendEmail(event) {
    event.preventDefault(); // Prevent form submission
    emailjs.sendForm('service_ygszdjc', 'template_k7rpaem', '#contact-form')
       .then((response) => {
          alert("Email sent successfully!");
       }, (error) => {
          alert("Failed to send email.");
       });
 }
 