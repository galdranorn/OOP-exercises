// html links
const firstClassBox = document.querySelector('#firstClass');

// class for phones
function Phone(brand, price, color, size) {
	this.brand = brand;
	this.price = price;
    this.color = color;
    this.size = size;
}

// prototype from exercise 
Phone.prototype.printInfo = function() {
    const firstClassPrint = document.createElement('div');
    firstClassPrint.innerHTML =
    firstClassPrint.innerHTML + 
    ("<p>The phone brand is <span>" + this.brand + 
    "</span>, color is <span>" + this.color + 
    "</span> and the price is <span>" + this.price + "</span>. " +
    "Size of the phone is <span>" + this.size + "</span>.</p>");
    firstClassBox.appendChild(firstClassPrint);
}

// additional prototype to exercise
Phone.prototype.createTable = function() {
    const firstClassTable = document.createElement('table');
    const firstClassRow = document.createElement('tr');
    firstClassTable.innerHTML = ("<tr><td>Phone</td><td>Price</td><td>Color</td><td>Size</td></tr>");
    firstClassRow.innerHTML = 
        ("<td>"+this.brand+"</td>"+
        "<td>"+this.price+"</td>"+
        "<td>"+this.color+"</td>"+
        "<td>"+this.size+"</td>");
    firstClassTable.appendChild(firstClassRow);
    firstClassBox.appendChild(firstClassTable);
};

// decided to give data via array with objects
const phoneList = [
    {brand: 'Samsung Galaxy S6',
    price: 900,
    color: 'black',
    size: 5.1},
    {brand: 'iPhone 6S',
    price: 1400,
    color: 'silver',
    size: 4.7},
    {brand: 'OnePlus One',
    price: 1900,
    color: 'blue',
    size: 6.28}
]

// and trigger functions via 'for' loop
for (i=0; i<phoneList.length; i++) {
    let phone = new Phone(phoneList[i].brand, phoneList[i].price, phoneList[i].color, phoneList[i].size);
    phone.printInfo();
    phone.createTable();
}



