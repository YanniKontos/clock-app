const time = document.getElementById('time-change');

function showTime() {
    let date = Date();
    time.textContent = date;
}

showTime()