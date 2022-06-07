const loginForm = async function (event) {
    event.preventDefault();
      
    const username = document.querySelector('#username').value.trim();

    //queryselector should equal password form field on login page
    const password = document.querySelector('#password').value.trim();

    const response = await fetch('api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' }

    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Unable to log in.');
    }
}

document.querySelector('#login').addEventListener('submit', loginForm);
