
/*
function darkMode(){ 
    if(this.value === 'night'){
        document.querySelector('#skills').style.backgroundColor = 'rgb(73, 73, 73)';
        document.querySelector('#contact').style.backgroundColor = 'rgb(73, 73, 73)'; 
        document.querySelector('body').style.backgroundColor = 'var(--text-color)';
        document.querySelector('body').style.color = 'var(--background-color)';                    
       this.value = 'day'
    } else {
        document.querySelector('#skills').style.backgroundColor = 'var(--color-gray)';
        document.querySelector('#contact').style.backgroundColor = 'var(--color-gray)'; 
        document.querySelector('body').style.backgroundColor = 'var(--background-color)';
        document.querySelector('body').style.color = 'var(--text-color)';
        this.value = 'night'
        }
}*/

// Dark Mode toggle
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

 // Confirm that mail has been sent
 function confirmSubmit(){
     alert('메일이 전송되었습니다.')
 }
 