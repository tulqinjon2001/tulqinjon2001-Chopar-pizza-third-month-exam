let elForm = document.querySelector('.pizza__form'); // Add Form
// Select elementi
let elFormSelect = elForm.querySelector('.pizza__select'); //Add form select element
let elBreadOut = document.querySelector('.pizza__output-bread');

let arrayBread = ["Yupqa", "O'rtacha", "Qalin", "Juda Qalin"];

function breadSelect(array, list){

  for (let i = 0; i < array.length; i++){
    let elSelectOption = document.createElement("option");
    elSelectOption.setAttribute("value", array[i]);
    elSelectOption.setAttribute("class", ".pizza__form-select-option fs-6");
    elSelectOption.textContent = array[i];
    elSelectOption.value = array[i];
    list.appendChild(elSelectOption); 
  }
}
breadSelect(arrayBread, elFormSelect);

elFormSelect.addEventListener("click", function(evt){
  evt.preventDefault();

  let breadOut = evt.target.value;

  elBreadOut.textContent =  breadOut;
});

// Radio elementi

let elSizeRadioCheck = document.querySelector('.pizza__size-label');

let elSizeOut = document.querySelector('.pizza__output-size');

let arraySize = ["25sm" , "30sm" , "35sm"];

function radioChecked(array,list) {

  for (let i = 0; i < array.length; i++){
    let radioBox = document.createElement("label");
    var radioCheck = document.createElement("input");
    radioCheck.setAttribute("type", "radio");
    radioCheck.setAttribute("name", "radio");
    radioCheck.setAttribute("class", "visually-hidden");
    radioBox.setAttribute("class", "pizza__size-radio p-1 p-md-2 p-lg-4 me-2 bg-light rounded-square fs-5");
    radioBox.setAttribute("value", array[i]);
    radioBox.textContent = array[i];
    radioBox.appendChild(radioCheck);  
    list.appendChild(radioBox);
  }
}
radioChecked(arraySize, elSizeRadioCheck);

elSizeRadioCheck.addEventListener("click", function(evt){
  evt.preventDefault();

  if(evt.target.matches(".pizza__size-radio")){
    let sizeOut = evt.target.textContent;
    elSizeOut.textContent = sizeOut;
  }
})

// Productions

let arrayProduct = ["Pomidor", "Kurka go'shti", "Zaytun", "Tuzlangan bodring", "Qo'ziqorin", "Qazi"];
let elProductCheckbox = document.querySelectorAll('.product-check-box');
let elProductCheck = document.querySelectorAll('.product-check');
let elProductCkeckSpan = document.querySelectorAll('.product-check-span');

let elProductOut = document.querySelector('.pizza__output-product');

function productContent (array, content) {
  for (let i = 0; i < array.length; i++) {
    content[i].textContent = array[i];
    elProductCheck[i].value = array[i];
  }
}
productContent(arrayProduct, elProductCkeckSpan)

var outListItem1 = document.createElement('li');
var outListItem2 = document.createElement('li');
var outListItem3 = document.createElement('li');
var outListItem4 = document.createElement('li');
var outListItem5 = document.createElement('li');
var outListItem6 = document.createElement('li');

const tomato = "--- Pomidor";
const turkeyMeat = "--- Kurka go'shti";
const olive = "--- Zaytun";
const pickledCucumbers = "--- Tuzlangan bodring";
const mushroom = "--- Qo'ziqorin";
const kazi = "--- Qazi";


elProductCheck[0].addEventListener('change', function(evt) {
  evt.preventDefault();

  if (elProductCheck[0].checked == true) {
    outListItem1.textContent = tomato;
    elProductOut.appendChild(outListItem1);
  } else {
    elProductOut.removeChild(outListItem1);
  }
})

elProductCheck[1].addEventListener('change', function(evt) {
  evt.preventDefault();

  if (elProductCheck[1].checked == true) {
    outListItem2.textContent = turkeyMeat;
    elProductOut.appendChild(outListItem2);
  } else {
    elProductOut.removeChild(outListItem2);
  }
})

elProductCheck[2].addEventListener('change', function(evt) {
  evt.preventDefault();

  if (elProductCheck[2].checked == true) {
    outListItem3.textContent = olive;
    elProductOut.appendChild(outListItem3);
  } else {
    elProductOut.removeChild(outListItem3);
  }
})

elProductCheck[3].addEventListener('change', function(evt) {
  evt.preventDefault();

  if (elProductCheck[3].checked == true) {
    outListItem4.textContent = pickledCucumbers;
    elProductOut.appendChild(outListItem4);
  } else {
    elProductOut.removeChild(outListItem4);
  }
})

elProductCheck[4].addEventListener('change', function(evt) {
  evt.preventDefault();

  if (elProductCheck[4].checked == true) {
    outListItem5.textContent = mushroom;
    elProductOut.appendChild(outListItem5);
  } else {
    elProductOut.removeChild(outListItem5);
  }
})

elProductCheck[5].addEventListener('change', function(evt) {
  evt.preventDefault();

  if (elProductCheck[5].checked == true) {
    outListItem6.textContent = kazi;
    elProductOut.appendChild(outListItem6);
  } else {
    elProductOut.removeChild(outListItem6);
  }
})

//  Extra  productions

let arrayAdditional = ["Achchiq","Sosiskali"];
let elExtraProductCheckbox = document.querySelectorAll('.product-extra-check-box');
let elExtraProductCheck = document.querySelectorAll('.product-extra-check');
let elExtraProductCkeckSpan = document.querySelectorAll('.product-extra-check-span');

let elExtraProductOut = document.querySelector('.pizza__output-extra-product');

function extraProductContent (array, content) {
  for (let i = 0; i < array.length; i++) {
    content[i].textContent = array[i];
    elProductCheck[i].value = array[i];
  }
}
extraProductContent(arrayAdditional, elExtraProductCkeckSpan);

var outExtraListItem1 = document.createElement('li');
var outExtraListItem2 = document.createElement('li');

const bitter = "--- Achchiq";
const sosiska = "--- Sosiskali";

elExtraProductCheck[0].addEventListener('change', function(evt) {
  evt.preventDefault();

  if (elExtraProductCheck[0].checked == true) {
    outExtraListItem1.textContent = bitter;
    elExtraProductOut.appendChild(outExtraListItem1);
    outExtraListItem1.setAttribute("class", "text-danger");
  } else {
    elExtraProductOut.removeChild(outExtraListItem1);
  }
})

elExtraProductCheck[1].addEventListener('change', function(evt) {
  evt.preventDefault();

  if (elExtraProductCheck[1].checked == true) {
    outExtraListItem2.textContent = sosiska;
    elExtraProductOut.appendChild(outExtraListItem2);
  } else {
    elExtraProductOut.removeChild(outExtraListItem2);
  }
})