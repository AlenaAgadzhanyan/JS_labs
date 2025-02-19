/* Task 1 */

function num1(){
    let x = new Date();
    let days = new Array(7);
    days[1]="Понедельник";
    days[2]="Вторник";
    days[3]="Среда";
    days[4]="Четверг";
    days[5]="Пятница";
    days[6]="Суббота";
    days[0]="Воскресенье";
    let year = x.getFullYear();
    let date = x.getDate();
    let month = x.getMonth() + 1;
    let hour = x.getHours();
    let minutes = x.getMinutes();
    let seconds = x.getSeconds();
    if (date < 10) date = "0" + date;
    if (month < 10) month = "0" + month;
    if (hour < 10) hour = "0" + hour;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    document.getElementById("date").innerHTML = date + "-" + month + "-" + year + ", " + days[x.getDay()];
    document.getElementById("clock").innerHTML = hour + "-" + minutes + "-" + seconds;
}

/* Task 2 */

function num2(){
    const monthYearElement = document.getElementById('monthYear');
    const datesElement = document.getElementById('dates');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentDate = new Date();

    const updateCalendar = () => {
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();
        const firstDay = new Date(currentYear, currentMonth, 0);
        const lastDay = new Date(currentYear, currentMonth + 1, 0);
        const totalDays = lastDay.getDate();
        const firstDayIndex = firstDay.getDay();
        const lastDayIndex = lastDay.getDay();

        const monthYearString = currentDate.toLocaleString('default',{month: 'long',year: 'numeric'});
        monthYearElement.textContent = monthYearString;

        let datesHTML = '';

        for (let i = firstDayIndex; i > 0; i--){
            const prevDate = new Date(currentYear, currentMonth,  - i + 1);
            datesHTML += `<div class="date inactive">${prevDate.getDate()}</div>`;
        }

        for (let i = 1; i <= totalDays; i++){
            const date = new Date(currentYear, currentMonth, i);
            const activeClass = date.toDateString() === new Date().toDateString() ? 'active' : '';
            if (date.getDate()===i && (date.getDay()===0 || date.getDay()===6)){
                datesHTML += `<div class="weekend ${activeClass}">${i}</div>`;
            }
            else datesHTML += `<div class="date ${activeClass}">${i}</div>`;
        }
        if (lastDayIndex != 0){
            for (let i = 1; i <= 7 - lastDayIndex; i++){
                const nextDate = new Date(currentYear, currentMonth + 1, i);
                datesHTML += `<div class="date inactive">${nextDate.getDate()}</div>`;
            }
        }

        datesElement.innerHTML = datesHTML;
    }

    prevBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        updateCalendar();
    })

    nextBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        updateCalendar();
    })

    updateCalendar();
}

/* Task 3 */

function num3(){
    const count_img = document.querySelectorAll('img');
    document.getElementById("count_img").innerHTML = 'Количество рисунков: ' + count_img.length;
}

/* Task 4 */

function num4(){
    const blocks = document.querySelectorAll('.block'); 
    let blockIndex = null;
    let a = 0;
    let b = 0;
    let c = 0;
    function show() {
        blockIndex = Math.floor(Math.random() * blocks.length);
        a=Math.floor(Math.random()*255);
        b=Math.floor(Math.random()*255);
        c=Math.floor(Math.random()*255);
        blocks[blockIndex].style.backgroundColor = '#' + a.toString(16) + b.toString(16) + c.toString(16);
    }
    setInterval(show, 150);
}

/* Task 5 */

function num5(){
    let text = prompt("Input text, please");
    let div_container = document.getElementById("addParagraph");
    while (text){
        let paragraph = document.createElement('p');
        paragraph.innerHTML = text;
        div_container.prepend(paragraph);
        text = prompt("Input text, please");
    }
}

/* Task 6 */

function num6(){
    let array = ["./images/cat.jpg","./images/dog.jpg","./images/squirrel.jpg"]
    let cursor = 0;
    element.addEventListener('mouseover', ()=>{
        document.getElementById("element").src = array[cursor];
        cursor = (cursor+1) % array.length;
    })
}

/* Task 7 */

function see_menu(){
    ul = document.getElementById('menu');
    if (ul.style.display === "none") ul.style.display = "block";
    else ul.style.display = "none";
}
function num7(){
    const array = document.querySelectorAll('li');
    let sweet = document.getElementById("menu");
    kolvo_sweet = 0;
    sweet.addEventListener('click', (event)=>{
        if (kolvo_sweet === array.length) return;
        Opacity(event.target, ()=>{
            sweet.removeChild(event.target);
            kolvo_sweet += 1;
            if (kolvo_sweet === array.length){
                let end_msg = document.createElement('p');
                end_msg.innerHTML = 'Сладости закончились :('; 
                sweet.append(end_msg);
            }
        })
    })

    function Opacity(item, callback) {
        let opacity = 1;
        let timer = setInterval(() => {
            if (opacity <= 0) {
                clearInterval(timer);
                item.style.display = "none";
                callback();
            }
            item.style.opacity = opacity;
            opacity -= 0.01;
        }, 1);
    }
}

/* Task 8 */

function num8(){
    img = document.getElementById("img");
    img.addEventListener('mouseover', () => {
        let opacity = 1;
        let timer = setInterval(() => {
            if (opacity <= 0){
                clearInterval(timer);
            }
            img.style.opacity = opacity;
            opacity -= 0.01;
        }, 1);
        setTimeout(text.style.opacity = 1, 1);
    });
    img.addEventListener('mouseout', () => {
        let opacity = 0;
        let timer = setInterval(() => {
            if (opacity >= 1) {
                clearInterval(timer);
            }
            img.style.opacity = opacity;
            opacity += 0.01;
        }, 1);
        setTimeout(text.style.opacity = 0, 1);
    });
}


