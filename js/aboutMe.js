
// Dark mode toggle
function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
 }

 // Send the email and make alert pop-up 
function sendingEmail(){
    let check = document.getElementById('m_add');
    let form = document.querySelector('.gform');

    // Perform validation of email-address format
    let exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if (exptext.test(check.value) == false) {
        //이메일 형식이 알파벳+숫자@알파벳+숫자.알파벳+숫자 형식이 아닐경우			
        alert("입력한 메일형식이 올바르지 않습니다.");
        check.focus();
        return false;
    }
    
    form.action = 'https://script.google.com/macros/s/AKfycbxzWE3vc5ziBuT4lJVYwQdcBlJxo8iImjAV8RWn/exec';
    form.mothod = 'POST';

    setTimeout(function (){
        alert('메일이 전송되었습니다.');
    }, 1000);
}



 