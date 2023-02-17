'use strict';

//Globals

let cookieStores = [];


const times = ['6 am','7 am','8 am','9 am','10 am', '11 am', '12 pm','1 pm', '2 pm', '3 pm','4 pm','5 pm', '6 pm','7 pm'];

let cookieStoreInfo = document.getElementById('cookie-store-info');

let table = document.createElement('table');
cookieStoreInfo.appendChild(table);
table.setAttribute('id', 'cookie-store-table');


//Header
let renderHeader = function(){

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
  thEle2.textContent = 'Location Total';
  trEle.appendChild(thEle2);
};

renderHeader();





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

//Form

let storeForm = document.getElementById('store-form');

storeForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  let name = event.target.location.value;
  let minCust = parseInt(event.target.minCust.value);
  let maxCust = parseInt(event.target.maxCust.value);
  let aveCookies = parseFloat(event.target.aveCookies.value);
  let newStore = new Store(name, minCust, maxCust, aveCookies);
  cookieStores.push(newStore);
  // let tfoot = document.querySelector('tfoot');
  // tfoot.innerHTML = '';
  document.getElementById('cookie-store-table').deleteTFoot();
  newStore.render();
  renderFooter();
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

cookieStores.push(seattle,tokyo,paris,dubai,lima);

//Footer

let renderFooter = function() {
  let footer = document.createElement('tfoot');
  table.appendChild(footer);

  let trEle3 = document.createElement('tr');
  footer.appendChild(trEle3);

  let thEle = document.createElement('th');
  thEle.textContent = 'Totals';
  trEle3.appendChild(thEle);


  // let numsArr = [seattle.cookiesPerHr,tokyo.cookiesPerHr,dubai.cookiesPerHr,paris.cookiesPerHr,lima.cookiesPerHr];

  let storeHourlyTotals =0;

  for(let i = 0; i < times.length; i++){
    let sumTotals = 0;
    for (let j = 0; j < cookieStores.length; j++) {
      sumTotals += cookieStores[j].cookiesPerHr[i];
      storeHourlyTotals += cookieStores[j].cookiesPerHr[i];
    }
    let th = document.createElement('th');
    th.textContent = sumTotals;
    trEle3.appendChild(th);
  }
  let th = document.createElement('th');
  th.textContent = storeHourlyTotals;
  trEle3.appendChild(th);


  // for (let i = 0; i < times.length; i++) {
  //   let tdEle = document.createElement('td');
  //   tdEle.textContent = storeHourlyTotals[i];
  //   trEle3.appendChild(tdEle);
  // }

  // let grandTotal = 0;
  // for (let i = 0; i < cookieStores.length; i++) {
  //   grandTotal += cookieStores[i].total;
  // }

  // let td = document.createElement('td');
  // td.textContent = grandTotal;
  // trEle3.appendChild(td);

};


// //Grand total

// let renderGrandTotal = function() {
// };
// renderGrandTotal();
//code



function renderAllStores() {
  for (let i = 0; i < cookieStores.length; i++) {
    //cookieStores[i].calcCookiesPerHr();
    cookieStores[i].render();
  }
}

renderAllStores();
renderFooter();


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
