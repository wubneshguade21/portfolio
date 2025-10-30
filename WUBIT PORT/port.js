let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

const typed = new Typed('.animations', {
    strings: [
        "I'm ",
        "Undergraduate ",
        "Computer Science Student",
        "at University of Gondar",
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1200,
    loop: true,
});

const themeButton = document.getElementById("theme-toggle");
const body = document.body;

themeButton.addEventListener("click", () => {
    body.classList.toggle("light-theme");
    themeButton.textContent = body.classList.contains("light-theme") ? "Moon" : "Sun";
});

const logo = document.querySelector('#logo');
const modal = document.querySelector('#imageModal');
const close = document.querySelector('#closeModal');

logo?.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('active');
});

close?.addEventListener('click', () => modal.classList.remove('active'));

modal?.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
});

const phone = document.getElementById('phoneInput');
const phoneErr = document.getElementById('phoneError');

phone?.addEventListener('input', () => {
    let v = phone.value.replace(/[^0-9+]/g, '');
    if (v[0] === '+') v = '+' + v.slice(1).replace(/[^0-9]/g, '');
    else v = v.replace(/[^0-9]/g, '');

    phone.value = v;
    const digits = v.replace(/[^0-9]/g, '');

    if (digits.length === 10) {
        phoneErr.textContent = '';
        phone.style.borderColor = '';
    } else {
        phoneErr.textContent = 'Enter 10 digits';
        phone.style.borderColor = 'red';
    }
});

const form = document.getElementById('contactForm');
const email = document.getElementById('emailInput');
const successMsg = document.getElementById('successMessage');

form?.addEventListener('submit', (e) => {
    e.preventDefault();
    let ok = true;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        alert('Enter a valid email');
        email.style.borderColor = 'red';
        ok = false;
    }

    const digits = phone.value.replace(/[^0-9]/g, '');
    if (digits.length !== 10) {
        phoneErr.textContent = '10 digits required';
        phone.style.borderColor = 'red';
        ok = false;
    }

    if (ok) {
        successMsg.style.display = 'block';
        alert("Form submitted successfully!");
        form.reset();
    }
});