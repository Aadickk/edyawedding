document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Thank you for your RSVP!");
    event.target.reset();
});
