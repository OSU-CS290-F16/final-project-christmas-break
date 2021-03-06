

function displayAddItemModal() {

  var backdropElem = document.getElementById('modal-backdrop');
  var addItemModalElem = document.getElementById('add-item-modal');

  // Show the modal and its backdrop.
  backdropElem.classList.remove('hidden');
  addItemModalElem.classList.remove('hidden');

//TEST
console.log('ADD-ITEM-OPENED')

}

function displaySearchItemModal() {

console.log('SEARCH-OPENED')


  var backdropElem = document.getElementById('modal-backdrop');
  var addItemModalElem = document.getElementById('search-item-modal');

  // Show the modal and its backdrop.
  backdropElem.classList.remove('hidden');
  addItemModalElem.classList.remove('hidden');

//TEST
console.log('SEARCH-OPENED')

}


function closeAddItemModal() {

//TEST
	console.log('CLOSING-ADD-MODAL');
  var backdropElem = document.getElementById('modal-backdrop');
  var addItemModalElem = document.getElementById('add-item-modal');

  // Hide the modal and its backdrop.
  backdropElem.classList.add('hidden');
  addItemModalElem.classList.add('hidden');

  clearAddInputValues();

}

function closeSearchItemModal (){


	console.log('CLOSING-MODAL');
  var backdropElem = document.getElementById('modal-backdrop');
  var searchItemModalElem = document.getElementById('search-item-modal');
  var addItemModalElem = document.getElementById('add-item-modal');
	
	 // Hide the modal and its backdrop.
  backdropElem.classList.add('hidden');
  searchItemModalElem.classList.add('hidden');
    addItemModalElem.classList.add('hidden');


	clearAddInputValues();
}


function searchItem () {

	console.log("SEARCHING FOR ITEM!");
	closeSearchItemModal();

}



function ExitAddItemModal() {

//TEST
	console.log('CLOSING-MODAL');
  var backdropElem = document.getElementById('modal-backdrop');
  var addItemModalElem = document.getElementById('add-item-modal');

  // Hide the modal and its backdrop.
  backdropElem.classList.add('hidden');
  addItemModalElem.classList.add('hidden');

  //clearAddInputValues();

}


function AcceptAddItemModal() {


var item = document.getElementById('add-item-number').value


//SEND ITEM TO DATABASE HERE


item += " has been added";
	alert(item);
	console.log(item);

  var backdropElem = document.getElementById('modal-backdrop');
  var addItemModalElem = document.getElementById('add-item-modal');

  // Hide the modal and its backdrop.
  backdropElem.classList.add('hidden');
  addItemModalElem.classList.add('hidden');

  clearAddInputValues();

}





/*
 * This function clears any value present in any of the todo input elements.
 */
function clearAddInputValues() {

  var AddInputElems = document.getElementsByClassName('add-info');
  for (var i = 0; i < AddInputElems.length; i++) {
    var input = AddInputElems[i].querySelector('input, textarea');
    input.value = '';
  }

 }

function displayMultiplyModal() {

var addItemModalElem = document.getElementById('multiply-item-modal');

document.getElementById("multiply-value").focus();

  // Show the modal and its backdrop.
  addItemModalElem.classList.remove('multhidden');
  //REMOVE ANY LEFTOVER MULTIPLY VALUES
  document.getElementById('multiply-value').value = '';



}



function closeMultiplyModal () {

var addItemModalElem = document.getElementById('multiply-item-modal');
var multiple = 		document.getElementById('multiply-value').value;
if(!multiple) { 	document.getElementById('multiply-value').value = '1'; }
  // Show the modal and its backdrop.
  addItemModalElem.classList.add('multhidden');
	SetFocus();

}

function viewCatalogModal() {
console.log("CATALOG OPENING!");
}

function viewCountModal() {

//location.href='/item';



var countModal = document.getElementById('item-count-modal');
	countModal.classList.remove('counthidden');

console.log("Count OPENING!");
}

function okCountModal() {

var countModal = document.getElementById('item-count-modal');
	countModal.classList.add('counthidden');

}

function viewCatalogModal() {
console.log("Catalog modal open");
location.href='/catalog';
var countModal = document.getElementById('catalog-modal');
	countModal.classList.remove('cataloghidden');
}

function okCatalogModal() {

console.log("CLOSING CATALOG?");

var okCatalogModal = document.getElementById('catalog-modal');
	okCatalogModal.classList.add('cataloghidden');

}




function selectInventory() {


var inventoryName =

 prompt("PLEASE ENTER YOUR INVENTORY NAME");



if ((inventoryName != '') && (inventoryName != null)) { document.getElementById('inventory-select-button').innerHTML = inventoryName;}


var oldInven = document.getElementById('inventory-select-button').innerHTML;


console.log("OLD INVENTORY: ", oldInven);
console.log("CATALOG SET TO", inventoryName);



}


function UndoScan() {

console.log('ATTEMPTING TO UNDO SCAN');
alert("You have deleted the most recent scan on record");

}

//THIS FUNCTION SETS FOCUS TO "SEARCH" BAR

 function SetFocus() { 
		    document.getElementById("search-input").focus();
	            console.log("SETTING FOCUS!")
		     };


//ADDS ITEM # TO RUNNING COUNT

function countFunction () {

		var multiple = document.getElementById('multiply-value').value;	
		var space = "&nbsp";	
		var multiple = document.getElementById('multiply-value').value;	

var newItem = (document.getElementById('search-input').value);
var newItemLength = (newItem.length);



document.getElementById('catalog-list').innerHTML += "<li>";
document.getElementById('catalog-list').innerHTML += newItem;
document.getElementById('catalog-list').innerHTML += space;
document.getElementById('catalog-list').innerHTML += space;
document.getElementById('catalog-list').innerHTML += space;
document.getElementById('catalog-list').innerHTML += multiple;
document.getElementById('catalog-list').innerHTML += "</li>";

		var item = document.getElementById('search-input').value;
	
			
	itemScan = 'insert+' + newItem;
	itemScan = itemScan + '+';
	itemScan = itemScan + multiple;
		
		console.log("ITEM 'COUNTED'", item, ": Counted - ", multiple, " - times")
		console.log(itemScan);		

		document.location.href = itemScan;

	
		document.getElementById('search-input').value = '';
		document.getElementById('multiply-value').value = '1';
		SetFocus();
	};

//EDITS MULTIPLIER VARIABLE (NEED TO ADD)


function multiplyFunction () {

		var multi = document.getElementById('multiply-value').value;
				console.log("Multiplier set to'", multi)
				closeMultiplyModal();
		
	};

function setMultiple() {

		document.getElementById('multiply-value').value = '1';
}



//ADD EVENT LISTENERS AND CALL FUNTIONS ON EVENT

window.addEventListener('DOMContentLoaded', function (event) {






window.onload = SetFocus();
window.onload = setMultiple();



//CATALOG VIEW BUTTON
var viewCatalogButton = document.getElementById('catalog-button');
  viewCatalogButton.addEventListener('click', viewCatalogModal);

//COUNT VIEW BUTTON

var viewCountButton = document.getElementById('count-button');
viewCountButton.addEventListener('click', viewCountModal);

//OK COUNT BUTTON
var viewCountButton = document.getElementById('close-item-button');
viewCountButton.addEventListener('click', okCountModal);


//CATALOG VIEW BUTTON

var viewCatalogButton = document.getElementById('catalog-button');
viewCatalogButton.addEventListener('click', viewCatalogModal);

//OK CATALOG BUTTON
var okCatalogButton = document.getElementById('close-catalog-button');
okCatalogButton.addEventListener('click', okCatalogModal);




//CATALOG BUTTON
var catalogSelectButton = document.getElementById('inventory-select-button');
  catalogSelectButton.addEventListener('click', selectInventory);



//"ADD ITEM BUTTON"
 var addNoteButtonElem = document.getElementById('add-count-button');
  addNoteButtonElem.addEventListener('click', displayAddItemModal);

//"SEARCH BUTTON"
var searchButton = document.getElementById('search-button');
  searchButton.addEventListener('click', displaySearchItemModal);


//"MULTIPLY BUTTON"
var MultiplyScanButton = document.getElementById('multiply-count-button');
  MultiplyScanButton.addEventListener('click', displayMultiplyModal);

//"UNDO BUTTON"
var UndoScanButton = document.getElementById('undo-button');
  UndoScanButton.addEventListener('click', UndoScan);


//"CANCEL BUTTON" (clears entires in add item modal)

 var CloseAddButtonElem = document.querySelector('#add-item-modal .modal-cancel-button');
 CloseAddButtonElem.addEventListener('click', closeSearchItemModal);

//"CLOSE BUTTON" (closes search item modal)
 var closeSearchButton = document.querySelector('#search-item-modal .modal-close-button');
 closeSearchButton.addEventListener('click', closeSearchItemModal);


//"CANCEL BUTTON" (clears entire search item modal)
 var closeSearchButton = document.querySelector('#search-item-modal .search-cancel-button');
 closeSearchButton.addEventListener('click', closeSearchItemModal);

//"SEARCH BUTTON" (SEARCHES CATALOG FOR GIVEN ITEM)
 var searchButton = document.querySelector('#search-item-modal .modal-search-button');
     searchButton.addEventListener('click', searchItem);




//"EXIT BUTTON" (exits add item modal but doesn't clear"
 var ExitAddButtonElem = document.querySelector('#add-item-modal .modal-close-button');
 ExitAddButtonElem.addEventListener('click', ExitAddItemModal);

//"ACCEPT BUTTON" (ADDS ITEM TO CATALOG)
 var AcceptAddButtonElem = document.querySelector('#add-item-modal .modal-accept-button');
 AcceptAddButtonElem.addEventListener('click', AcceptAddItemModal);

//"ENTER ON SEARCH BAR"
document.getElementById("search-input").addEventListener("keydown", function(x) {
	if (x.keyCode == 13) { countFunction (); }},false);


//"ENTER ON Multiply Modal"
document.getElementById("multiply-value").addEventListener("keydown", function(x) {
	if (x.keyCode == 13) { multiplyFunction (); }},false);

//"OK BUTTON ON MULTIPLY MODAL"

 var okButton = document.querySelector('#multiply-item-modal .mult-ok-button');
 okButton.addEventListener('click', multiplyFunction);

//"CANCEL BUTTON ON MULTIPLY MODAL"

 var okButton = document.querySelector('#multiply-item-modal .mult-cancel-button');
 okButton.addEventListener('click', closeMultiplyModal);



});


