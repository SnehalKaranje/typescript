var container = document.getElementById('container');
var container1 = document.getElementById('container1');

function countdown(container, initial, final = 0, interval = 1) {

    var current = initial;

    while (current > final) {
        container.innerHTML = current;
        current -= interval;
    }

}

countdown(container, 10);
countdown(container1, 10, 5, 2);