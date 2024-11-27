const socket = io();

document.getElementById('signupForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    const response = await fetch('/signup', {
        method: 'POST',
       [_{{{CITATION{{{_1{](https://github.com/pmcalabrese/statically/tree/bfd53d47a44cf30db0aec9c5bd4387618f7a195e/README.md)[_{{{CITATION{{{_2{](https://github.com/automatejs/automate/tree/6046a62c9768a1fd240ad8c071f201946c93fa15/docs%2Fbinding.md)