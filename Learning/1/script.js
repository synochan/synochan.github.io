const wrapper = document.querySelector('.wrapper');
const yesBtn = document.querySelector('.btn-yes');
const noBtn = document.querySelector('.btn-no');
const question = document.querySelector('.question');

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener('click', () => {
    question.innerHTML = 'I love you tooo lovelovee hehehehehe!';
    alert('I love you tooo lovelovee hehehehehe!');
});

noBtn.addEventListener('mouseover', () => {
    const x = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width));
    const y = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height));
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});
