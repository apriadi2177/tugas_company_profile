
window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.background = "#111";
    } else {
        navbar.style.background = "rgba(0, 0, 0, 0.9)";
    }
});


document.querySelector(".menu-toggle").addEventListener("click", function () {
    document.querySelector(".nav-links").classList.toggle("active");
});


document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Pesan Anda telah terkirim!");
});


window.addEventListener("load", function () {
    setTimeout(() => {
        document.querySelector(".loader").style.display = "none";
        document.querySelector("body").style.overflow = "auto";
    }, 2000);
});


window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


document.querySelector(".menu-toggle").addEventListener("click", function () {
    document.querySelector(".nav-links").classList.toggle("active");
});


document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        let targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});


const sections = document.querySelectorAll(".section");

const scrollAppear = () => {
    sections.forEach((section) => {
        let sectionPos = section.getBoundingClientRect().top;
        let screenPos = window.innerHeight / 1.3;
        if (sectionPos < screenPos) {
            section.classList.add("appear");
        }
    });
};

window.addEventListener("scroll", scrollAppear);


document.querySelectorAll(".service").forEach(service => {
    service.addEventListener("mouseenter", () => {
        service.style.transform = "scale(1.1)";
        service.style.boxShadow = "0px 10px 20px rgba(0,0,0,0.2)";
    });

    service.addEventListener("mouseleave", () => {
        service.style.transform = "scale(1)";
        service.style.boxShadow = "none";
    });
});


document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    alert(`Terima kasih, ${name}! Pesan Anda telah terkirim.`);
    this.reset();
});

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    if (index >= slides.length) { slideIndex = 0; }
    if (index < 0) { slideIndex = slides.length - 1; }

    document.querySelector(".slides").style.transform = `translateX(-${slideIndex * 100}%)`;

    dots.forEach(dot => dot.classList.remove("slides"));
    dots[slideIndex].classList.add("slides");
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

function currentSlide(index) {
    slideIndex = index;
    showSlide(slideIndex);
}


setInterval(() => {
    nextSlide();
}, 4000);

