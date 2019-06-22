const secondsHand = document.querySelector('.seconds-hand');
const minsHand = document.querySelector('.mins-hand');
const hoursHand = document.querySelector('.hour-hand');

setDate = () => {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
    // console.log(seconds)

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 60) * 360) + 90;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate , 1000);

