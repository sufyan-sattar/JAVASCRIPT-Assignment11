function submitForm() {
    var firstname = document.getElementById('firstname').value
    var lastname = document.getElementById('lastname').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value


    var resultDiv = document.getElementById('result')
    resultDiv.innerHTML = `
    <h2>Form Data</h2>
    <p><strong>First Name:</strong>${firstname}</p>
    <p><strong>Last Name:</strong>${lastname}</p>
    <p><strong>Email:</strong>${email}</p>
    <p><strong>Password:</strong>${password}</p>
    `;
}

function toggleDescription() {
    var fullDescription = document.querySelector('.full-description');
    var readmoreButton = document.querySelector('.readmore-btn');

    if (fullDescription.style.display === 'none' || fullDescription.style.display === '') {
        fullDescription.style.display = 'block'
        readmoreButton.textContent = 'Read Less'
    } else {
        fullDescription.style.display = 'none'
        readmoreButton.textContent = 'Read More'
    }
}