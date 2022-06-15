
/* Dark mode toggle*/
const element = document.body;
const changeThemeButton = document.getElementById('darkmode');

const changeTheme = () => {
    element.classList.toggle('dark-mode');

    // 만일 클릭을 통해 dark-mode 클래스가 생성이 되었다면.
    if (element.classList.contains('dark-mode')) {
        localStorage.setItem('darkTheme', 'active'); // 추가하기. key = darkTheme , value = active
    } else {
        localStorage.removeItem('darkTheme'); // 클릭을 통해 클래스가 사라졌다면, 사이트내 키값도 삭제한다.
    }
}

changeThemeButton.addEventListener('click', changeTheme);

//currentTheme==dark 이면, 계속 dark-mode 유지하기
const currentTheme = localStorage.getItem('darkTheme');

if (currentTheme) {
    element.classList.add('dark-mode');
}

/* 'About' :: Questions about whether to move to the link */
externalLink.onclick = function (event) {

    function handleLink(title) {
        const isLeaving = confirm(`Leave for ${title}?`);
        if (!isLeaving) return false;
    }

    const target = event.target.closest('a');

    if (target && externalLink.contains(target)) {
        return handleLink(target.getAttribute('title'));
    }
};

/* 'Skills' :: 스크롤에 따른 Animation Effects */
const $bar = document.querySelectorAll('.bar');
const $percent = document.querySelectorAll('.percent');

window.addEventListener('scroll', () => {
    const thisScroll = window.scrollY;

    if (thisScroll > 1000) {
        $bar[0].classList.add('load1');
        $bar[3].classList.add('load4');
        $percent[0].classList.add('active');
        $percent[3].classList.add('active');
    }
    if (thisScroll > 1100) {
        $bar[1].classList.add('load2');
        $bar[4].classList.add('load5');
        $percent[1].classList.add('active');
        $percent[4].classList.add('active');
    }
    if (thisScroll > 1200) {
        $bar[2].classList.add('load3');
        $bar[5].classList.add('load6');
        $percent[2].classList.add('active');
        $percent[5].classList.add('active');
    }
    if (thisScroll < 690) {
        for (i = 0; i < 6; i++) {
            $bar[i].classList.remove(`load${i + 1}`);
            $percent[i].classList.remove('active');
        }
    }
});


/* 'Contact' :: Send the email and make alert pop-up */
function sendingEmail() {
    const check = document.getElementById('m_add');
    const form = document.querySelector('.gform');

    // Perform validation of email-address format
    const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if (exptext.test(check.value) == false) {
        //이메일 형식이 알파벳+숫자@알파벳+숫자.알파벳+숫자 형식이 아닐경우			
        alert("입력한 메일형식이 올바르지 않습니다.");
        check.focus();
        return false;
    }

    form.action = 'https://script.google.com/macros/s/AKfycbxzWE3vc5ziBuT4lJVYwQdcBlJxo8iImjAV8RWn/exec';
    form.mothod = 'POST';

    setTimeout(function () {
        alert('메일이 전송되었습니다.');
    }, 1000);

}
