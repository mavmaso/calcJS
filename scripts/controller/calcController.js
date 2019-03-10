class CalcController {

  constructor(){
    this._displayCalcEl = '0';
    this._currentDate;
    this.initialize();
  }

  initialize() {

    let displayCalcEl = document.querySelector('#display');
    let dataEl = document.querySelector('#data');
    let timeEL = document.querySelector('#hora');
    
    displayCalcEl.innerHTML = "4567";
    dataEl.innerHTML = "01/01/2020";
    timeEL.innerHTML = "00:00";
  }

  get displayCalc(){
    return this._displayCalcEl.innerHTML;
  }

  set displayCalc(valor){
    this._displayCalc = valor;
  }

  get currentDate(){
    return this._currentDate;
  }

  set currentDate(valor){
    this._currentDate = valor;
  }
  
}