'use strict';

//Globals
const times = ['6 am','7 am','8 am','9 am','10 am', '11 am', '12 pm','1 pm', '2 pm', '3 pm','4 pm','5 pm', '6 pm','7 pm'];

//objects
let seattle = {
  name: 'Seattle',
  minCustPerHr: 23,
  maxCustPerHr: 65,
  aveCookiesPerCust: 6.3,
  cookiesPerHr: [],
  total: 0,
  custPerHr: function(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min+1)+min);
  },

  calcCookiesPerHr: function() {
    for (let i = 0; i < times.length; i++) {
      let numCustHrly = this.custPerHr(this.minCustPerHr,this.maxCustPerHr);
      let totalHrly = Math.floor(numCustHrly*this.aveCookiesPerCust);
      this.total=this.total+totalHrly;
      this.cookiesPerHr.push(totalHrly);
    }

  },

  render: function (){
    let venderSection = document.getElementById('seattleData');

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    venderSection.appendChild(h2Elem);

    for (let i = 0; i < times.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `${times[i]}: ${this.cookiesPerHr[i]} cookies`;
      venderSection.append(liElem); 
    }

  },

};

let tokyo = {
  name: 'Tokyo',
  minCustPerHr: 3,
  maxCustPerHr: 24,
  aveCookiesPerCust: 1.2,
  cookiesPerHr: [],
  total: 0,
  custPerHr: function(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min+1)+min);
  },

  calcCookiesPerHr: function() {
    for (let i = 0; i < times.length; i++) {
      let numCustHrly = this.custPerHr(this.minCustPerHr,this.maxCustPerHr);
      let totalHrly = Math.floor(numCustHrly*this.aveCookiesPerCust);
      this.total=this.total+totalHrly;
      this.cookiesPerHr.push(totalHrly);
    }

  },

  render: function (){
    let venderSection = document.getElementById('seattleData');

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    venderSection.appendChild(h2Elem);

    for (let i = 0; i < times.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `${times[i]}: ${this.cookiesPerHr[i]} cookies`;
      venderSection.append(liElem); 
    }

  },

};

let dubai = {
  name: 'Dubai',
  minCustPerHr: 11,
  maxCustPerHr: 38,
  aveCookiesPerCust: 3.7,
  cookiesPerHr: [],
  total: 0,
  custPerHr: function(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min+1)+min);
  },

  calcCookiesPerHr: function() {
    for (let i = 0; i < times.length; i++) {
      let numCustHrly = this.custPerHr(this.minCustPerHr,this.maxCustPerHr);
      let totalHrly = Math.floor(numCustHrly*this.aveCookiesPerCust);
      this.total=this.total+totalHrly;
      this.cookiesPerHr.push(totalHrly);
    }

  },

  render: function (){
    let venderSection = document.getElementById('seattleData');

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    venderSection.appendChild(h2Elem);

    for (let i = 0; i < times.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `${times[i]}: ${this.cookiesPerHr[i]} cookies`;
      venderSection.append(liElem); 
    }

  },

};let paris = {
  name: 'Paris',
  minCustPerHr: 20,
  maxCustPerHr: 38,
  aveCookiesPerCust: 2.3,
  cookiesPerHr: [],
  total: 0,
  custPerHr: function(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min+1)+min);
  },

  calcCookiesPerHr: function() {
    for (let i = 0; i < times.length; i++) {
      let numCustHrly = this.custPerHr(this.minCustPerHr,this.maxCustPerHr);
      let totalHrly = Math.floor(numCustHrly*this.aveCookiesPerCust);
      this.total=this.total+totalHrly;
      this.cookiesPerHr.push(totalHrly);
    }

  },

  render: function (){
    let venderSection = document.getElementById('seattleData');

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    venderSection.appendChild(h2Elem);

    for (let i = 0; i < times.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `${times[i]}: ${this.cookiesPerHr[i]} cookies`;
      venderSection.append(liElem); 
    }

  },

};

let lima = {
  name: 'Lima',
  minCustPerHr: 2,
  maxCustPerHr: 16,
  aveCookiesPerCust: 4.6,
  cookiesPerHr: [],
  total: 0,
  custPerHr: function(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min+1)+min);
  },

  calcCookiesPerHr: function() {
    for (let i = 0; i < times.length; i++) {
      let numCustHrly = this.custPerHr(this.minCustPerHr,this.maxCustPerHr);
      let totalHrly = Math.floor(numCustHrly*this.aveCookiesPerCust);
      this.total=this.total+totalHrly;
      this.cookiesPerHr.push(totalHrly);
    }

  },

  render: function (){
    let venderSection = document.getElementById('seattleData');

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    venderSection.appendChild(h2Elem);

    for (let i = 0; i < times.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `${times[i]}: ${this.cookiesPerHr[i]} cookies`;
      venderSection.append(liElem);
    }

  },

};


//code
const allStores = [seattle, tokyo, paris, dubai, lima];

function renderAllStores() {
  for (let i = 0; i < allStores.length; i++) {
    allStores[i].render();
  }
}

seattle.calcCookiesPerHr();
tokyo.calcCookiesPerHr();
dubai.calcCookiesPerHr();
paris.calcCookiesPerHr();
lima.calcCookiesPerHr();
// seattle.render();
renderAllStores();
