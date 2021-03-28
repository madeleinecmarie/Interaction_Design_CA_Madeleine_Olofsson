const username = document.querySelector('#username');
const password = document.querySelector('#password');
const btn = document.querySelector('.submitBtn');

btn.onclick = function (event) {
    event.preventDefault();
    const user = username.value;
    const pass = password.value;
    console.log(user.length);
    console.log(pass.length);

    if (user.length >= 5 && pass.length >= 5) {
        console.log('Youre logged in');
        document.querySelector('.form_div').classList.add('hide');
        document.querySelector('.loadingDiv').innerHTML = `
        <img src="/img/loading_gif2.gif" />`;

        setTimeout(function () {
            document.querySelector('.loadingDiv').innerHTML = `
            <h2 class=h2_welcome">Welcome</h2>
            <p class="welcome">${user}</p>`;
        }, 3000);
    } else {
        console.log('Your credentials are incorrect');
    }
};