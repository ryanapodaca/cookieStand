'use strict';

//Globals
let cookieStoreInfo = document.getElementById('cookie-store-info');

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
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max-min+1)+min);
};

Store.prototype.calcCookiesPerHr = function() {
  for (let i = 0; i < times.length; i++) {
    let numCustHrly = this.custPerHr(this.minCust,this.maxCust);
    let totalHrly = Math.floor(numCustHrly*this.aveCookies);
    this.total += totalHrly;
    this.cookiesPerHr.push(totalHrly);
  }
};

Store.prototype.render = function (){
  let articleEl = document.createElement('article');
  cookieStoreInfo.appendChild(articleEl);

  // let h2Elem = document.createElement('h2');
  // h2Elem.textContent = this.name;
  // articleEl.appendChild(h2Elem);

  // let ulElem = document.createElement('ul');
  // articleEl.appendChild(ulElem);

  // for (let i = 0; i < times.length; i++) {
  //   let liElem = document.createElement('li');
  //   liElem.textContent = `${times[i]}: ${this.cookiesPerHr[i]} cookies`;
  //   ulElem.appendChild(liElem); 
  // }


  let table = document.createElement('table');
  articleEl.appendChild(table);

  let row = document.createElement('tr');
  table.appendChild(row);

  let tdNameElem = document.createElement('td');
  tdNameElem.textContent = this.name;
  row.appendChild(tdNameElem);

  for (let i = 0; i < times.length; i++) {
    let tdHourlyElem = document.createElement('td');
    tdHourlyElem.textContent = this.cookiesPerHr[i];
    row.appendChild(tdHourlyElem);
  }

  let tdTotalElem = document.createElement('td');
  tdNameElem.textContent = this.total;
  row.appendChild(tdTotalElem);

};


//Objects Created
let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

//code

// headerTimes = function() {
//   for (let i = 0; i < times.length; i++) {
//     let thElem = document.createElement('th');
//     thElem.textContent = times[i];
//     row5.appendChild(thElem);
//   }
// };

// headerTimes();

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