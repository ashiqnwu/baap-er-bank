document.getElementById('button-update').addEventListener('click',function(){
    const emailValue = document.getElementById('email').value;
    console.log(emailValue);
    document.getElementById('email').value = '';
    const passwordValue = document.getElementById('password').value;
    console.log(passwordValue);
    document.getElementById('password').value = '';
    if(emailValue==='ashiqnwu@gmail.com' && passwordValue==='1234567890'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Invalid User');
    }
})