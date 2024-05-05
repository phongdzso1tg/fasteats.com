// localStorage
var dataAcount = JSON.parse(localStorage.getItem('account'));
function checkEmail(email, password, type) {
    console.log(dataAcount);
    var exists = false;
    for (let i = 0; i < dataAcount.length; i++) {
        if (email === dataAcount[i].email) {
            if (type === 'login') {
                if (password === dataAcount[i].password) {
                    return exists = true;
                } else {
                    return exists;
                }
            }
            return exists = true;
        }

    }
    return exists;
}




function handleLogin() {
    event.preventDefault();
    let valueEmail = document.getElementById('InputEmail1').value;
    let valuePassword = document.getElementById('InputPassword1').value;

    if (valueEmail !== '' || valuePassword !== '') {
        if (checkEmail(valueEmail, valuePassword, 'login')) {
            alert('Login success');
            window.location.href = 'index.html';
        } else {
            alert('Login fail');
        }
    } else {
        alert('Please enter a valid value');
    }
}


function handleRegister() {
    event.preventDefault();
    let valueEmail = document.getElementById('Email2').value;
    let valuePassword = document.getElementById('Password2').value;
    let valueConfirmPw = document.getElementById('Password3').value;

    if (valueEmail !== '' || valueConfirmPw !== '') {
        if (checkEmail(valueEmail)) {
            alert('Email already exists');
        } else {
            if (valuePassword === valueConfirmPw) {
                dataAcount.push({
                    id:dataAcount.length + 1,
                    email: valueEmail,
                    password: valuePassword
                })
                localStorage.setItem('account', JSON.stringify(dataAcount))
                alert('Register success');
                window.location.href = 'indexDangNhap.html';
            }else{
                alert('Passwords do not match');
            }
        }
    }else{
        alert('Please enter Email and Password');
    }
}