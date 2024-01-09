document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for nav links
    const scrollLinks = document.querySelectorAll('nav a');
    scrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const id = e.currentTarget.getAttribute('href').slice(1);
            const element = document.getElementById(id);
            const position = element.offsetTop;

            window.scrollTo({
                left: 0,
                top: position - 30,
                behavior: 'smooth'
            });
        });
    });

    // Form validation
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields');
            return false;
        }

        // Add here the code to handle the form submission, like sending an email or saving the data
        console.log('Form Submitted', { name, email, message });
        alert('Thank you for your message!');

        // Reset the form after submission
        form.reset();
    });
});
