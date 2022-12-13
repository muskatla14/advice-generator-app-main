
const btn = document.querySelector('.btn');

const loadAdvices = async () => {
    try {
        const res = await fetch("https://api.adviceslip.com/advice")
        const data = await res.json();
        console.log(data)
        const num = document.querySelector('.num');
        num.innerHTML = `#${data.slip.id}`;
        const advice = document.querySelector('.advice-text');
        advice.innerHTML = data.slip.advice;
        console.log(data.slip.id)
    } catch(e) {
        console.log("ERROR", e);
    }
}

window.addEventListener('load', loadAdvices)
btn.addEventListener('click', loadAdvices)
