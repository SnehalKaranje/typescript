var container1 = document.getElementById('container1');
function counter1(el) {
    this.count = 0;
    el.innerHTML = this.count;

    let _this = this;

    el.addEventListener('click', function() {
        _this.count += 1;
        el.innerHTML = _this.count;
    });
}
counter1(container1);

var container2 = document.getElementById('container2');
function counter2(el) {
    this.count = 0;
    el.innerHTML = this.count;

    el.addEventListener('click', () => {
        this.count += 1;
        el.innerHTML = this.count;
    });
}
counter2(container2);

var filteredList = [1, 2, 3].filter(x => x < 3);
console.log(filteredList);
