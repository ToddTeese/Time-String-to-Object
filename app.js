const timeInput = document.querySelector('#timeInput');
const form = document.querySelector('form');


function generateTimeObject() {
    let timeObject = new TimeObject();
    timeObject.setTime(timeInput.value);

    // set innerHTML of input
    document.querySelector('#second').innerHTML = timeObject.second;
    document.querySelector('#minute').innerHTML = timeObject.minute;
    document.querySelector('#hour').innerHTML = timeObject.hour;
    document.querySelector('#day').innerHTML = timeObject.day;
    document.querySelector('#week').innerHTML = timeObject.week;
}

form.addEventListener('submit', event => {
    event.preventDefault();
    generateTimeObject();
})