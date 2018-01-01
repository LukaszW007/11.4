function Phone(brand, price, color) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.condition = '';
}

var body = document.getElementsByTagName('body')[0];
Phone.prototype.printInfo = function () {
    console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ' and the price is ' + this.price + '.');
    var divText = document.createElement('div');
    divText.className = this.brand;
    divText.innerHTML = 'The phone brand is ' + this.brand + ', color is ' + this.color + ' and the price is ' + this.price + '.';
    body.appendChild(divText);
};
Phone.prototype.checkCondition = function () {
    this.condition = prompt('What is condition of your '+this.brand+' : ');
    console.log('This phone is ' + this.condition);
    var divText = document.createElement('div');
    divText.className = this.brand;
    divText.className += 'condition';
    divText.innerHTML = 'This phone is ' + this.condition;
    body.appendChild(divText);
};
var samsung = new Phone('Samsung Galaxy S6', 2500, 'silver'),
    iphone = new Phone('Apple iPhone 6s', 2000, 'black'),
    onePlus = new Phone('OnePlus One', 1000, 'black');

samsung.printInfo();
samsung.checkCondition();
iphone.printInfo();
onePlus.printInfo();