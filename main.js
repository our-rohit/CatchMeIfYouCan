const yes = document.querySelector('.yes-btn');

const no = document.querySelector('.no-btn');

const output = document.querySelector('.output');

const messages = [
  "Think again 🤔",
  "No is not an option 💕",
  "Stop teasing me 😤",
  "You’ll regret this 😳",
  "Okay… now try to catch me! 😜"
];

let counter = 0;

function playSound(src) {
    sound = new Audio(src);
    sound.play();
}

yes.addEventListener('click', ()=>{
    playSound('tap.mp3');
    output.style.opacity = '0';
    setTimeout(()=>{
        output.textContent= 'You are mine now 😘';
        output.style.opacity = '1';
    }, 400);
    
    no.style.display = 'none';
});

no.addEventListener('click', ()=>{
    playSound('tap.mp3');
    if (counter < messages.length) {
        output.style.opacity = '0';
        setTimeout(() => {
            output.textContent = messages[counter];
            output.style.opacity = 1;
            counter++;
        }, 400);
        
    } else {
        const maxH = window.innerHeight - no.offsetHeight;
        const maxW = window.innerWidth - no.offsetWidth;
        no.style.position = 'absolute';
        
        no.style.top = `${Math.floor(Math.random() * maxH)}px`;
        no.style.left = `${Math.floor(Math.random() * maxW)}px`;
    }
});