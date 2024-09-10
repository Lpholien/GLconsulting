// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwv044aXTkq8N-Df9T-xeqKjcWuAAqwGA",
  authDomain: "genval-lake-consulting.firebaseapp.com",
  projectId: "genval-lake-consulting",
  storageBucket: "genval-lake-consulting.appspot.com",
  messagingSenderId: "400508544204",
  appId: "1:400508544204:web:169f0ebce755b208480e69",
  measurementId: "G-NJVRP3N8CG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

$(document).ready(function() {
    // Smooth scrolling for navigation links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 70
            }, 1000);
        }
    });

    // Fade in sections on scroll
    $(window).scroll(function() {
        $('section').each(function() {
            if ($(window).scrollTop() + $(window).height() > $(this).offset().top + 100) {
                $(this).addClass('visible');
            }
        });
    });

    // Simple carousel for feedback
    var $carousel = $('.feedback-carousel');
    var $slides = $carousel.find('.feedback-slide');
    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide, 5000);

    function nextSlide() {
        $slides.eq(currentSlide).fadeOut(500);
        currentSlide = (currentSlide + 1) % $slides.length;
        $slides.eq(currentSlide).fadeIn(500);
    }

    // Handle form submission
    $('#contact-form').submit(function(event) {
        event.preventDefault();

        const name = $('#contact-form input[type="text"]').val();
        const email = $('#contact-form input[type="email"]').val();
        const message = $('#contact-form textarea').val();

        // Get a reference to the database service
        const database = firebase.database();

        // Push form data to Firebase
        database.ref('contacts').push({
            name: name,
            email: email,
            message: message,
            timestamp: firebase.database.ServerValue.TIMESTAMP
        }).then(() => {
            alert('Your message has been sent successfully!');
            $('#contact-form')[0].reset();
        }).catch((error) => {
            console.error('Error:', error);
            alert('There was an error sending your message. Please try again.');
        });
    });
});