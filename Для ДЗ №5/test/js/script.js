let menu = document.querySelector('.menu'),
    menuItem = document.getElementsByClassName('menu-item')[1],
    secondMenuItem = document.getElementsByClassName('menu-item')[2],
    fifthItem = document.createElement('li'),
    adv = document.querySelector('.adv'),
    bodyBg = document.body,
    newText = document.getElementById('title'),
    answer = document.getElementById('prompt'),
    myPrompt = prompt('Какое у вас отношение к технике apple?', '');
    
    

menu.insertBefore(secondMenuItem, menuItem);
fifthItem.classList.add('menu-item');
fifthItem.innerHTML = 'Пятый пункт';
menu.appendChild(fifthItem);

adv.remove();

bodyBg.style.backgroundImage = "url('img/apple_true.jpg')";

newText.innerHTML = 'Мы продаем только подлинную технику Apple';

answer.innerHTML = myPrompt;

