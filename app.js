'use strict';

//Header
let cookieStoreInfo = document.getElementById('cookie-store-info');

let table = document.createElement('table');
cookieStoreInfo.appendChild(table);

// let head = document.createElement('thead');
// table.appendChild(head);

let trEle = document.createElement('tr');
table.appendChild(trEle);

let thEle = document.createElement('th');
thEle.textContent = 'Locations';
trEle.appendChild(thEle);

for (let i = 0; i < times.length; i++) {
  let thEle = document.createElement('th');
  thEle.textContent = times[i];
  trEle.appendChild(thEle);
}

let thEle2 = document.createElement('th');
thEle2.textContent = 'Daily Location Total';
trEle.appendChild(thEle2);


//Footer

let footer = document.createElement('tfoot');
table.appendChild(footer);

let trEle3 = document.createElement('tr');
footer.appendChild(trEle3);

let numsArr = [seattle.cookiesPerHr,tokyo.cookiesPerHr,dubai.cookiesPerHr,paris.cookiesPerHr,lima.cookiesPerHr];

for (let i = 0; i < numsArr.length; i){
  let sum = 0;
  for (let j = 0; j < numsArr.length; j++) {
    sum += numsArr[j];
  }
}

for (let i = 0; i < numsArr.length; i++) {
  let tdEle = document.createElement('td');
  tdEle.textContent = numsArr[i];
  trEle3.appendChild(tdEle);
}

//Globals

let cookieStores = [];

const times = ['6 am','7 am','8 am','9 am','10 am', '11 am', '12 pm','1 pm', '2 pm', '3 pm','4 pm','5 pm', '6 pm','7 pm'];

//Constructor Function
function Store(name, minCust, maxCust, aveCookies) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.aveCookies = aveCookies;
  this.cookiesPerHr = [];
  this.total = 0;
  //this.custPerHr();
  this.calcCookiesPerHr();
}

//Prototype Methods
Store.prototype.custPerHr = function(min,max){
  // min = Math.ceil(min);
  // max = Math.floor(max);
  return Math.floor(Math.random()*(max-min+1)+min);
};

Store.prototype.calcCookiesPerHr = function() {
  for (let i = 0; i < times.length; i++) {
    let numCustHrly = this.custPerHr(this.minCust,this.maxCust);
    let totalHrly = Math.floor(numCustHrly*this.aveCookies);
    this.cookiesPerHr.push(totalHrly);
    this.total += totalHrly;
  }
  this.cookiesPerHr.push(this.total);
};

Store.prototype.render = function (){

  let row = document.createElement('tr');
  table.appendChild(row);

  let thNameElem = document.createElement('th');
  thNameElem.textContent = this.name;
  row.appendChild(thNameElem);

  for (let i = 0; i < this.cookiesPerHr.length; i++) {
    let tdHourlyElem = document.createElement('td');
    row.appendChild(tdHourlyElem);
    tdHourlyElem.textContent = this.cookiesPerHr[i];

  }

  // let tdTotalElem = document.createElement('td');
  // tdNameElem.textContent = this.total;
  // row.appendChild(tdTotalElem);

};


//Objects Created
let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

//code


// footerTotals = function() {
//   let footerTotal = document.createElement('th');
//   footerTotal.textContent = 'Total';
//   row5.appendChild(footerTotal);
// };

// footerTotals();

cookieStores.push(seattle,tokyo,paris,dubai,lima);

function renderAllStores() {
  for (let i = 0; i < cookieStores.length; i++) {
    //cookieStores[i].calcCookiesPerHr();
    cookieStores[i].render();
  }
}

renderAllStores();



// //objects
// let seattle = {
//   name: 'Seattle',
//   minCustPerHr: 23,
//   maxCustPerHr: 65,
//   aveCookies: 6.3,
//   cookiesPerHr: [],
//   total: 0,
//   custPerHr: function(min,max){
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random()*(max-min+1)+min);
//   },

//   calcCookiesPerHr: function() {
//     for (let i = 0; i < times.length; i++) {
//       let numCustHrly = this.custPerHr(this.minCustPerHr,this.maxCustPerHr);
//       let totalHrly = Math.floor(numCustHrly*this.aveCookiesPerCust);
//       this.total=this.total+totalHrly;
//       this.cookiesPerHr.push(totalHrly);