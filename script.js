var person = document.getElementById('name');
var age = document.getElementById('age');
var enter = document.getElementById('enter');
var namehtml = document.querySelector('.result p');
var deathhtml = document.querySelector('.result p:nth-child(2)');
var agehtml = document.querySelector('.result p:nth-child(3)');
var yearhtml = document.querySelector('.result p:nth-child(4)');

var deaths = ["Choked on a pringle chip", 
"Died exhausted from too much walking", 
"Died from seing a ghost", 
"Hit by a blind person driving a car", 
"Died of heartbreak", 
"Died from ingesting too much chocolate", 
"Run over by a drunk bicyclist", 
"Set fire to his hair", 
"Stung to death by wasps", 
"Killed by God Himself", 
"Shot after being mistaken for a moose", 
"Died after selling both kidneys on the internet", 
"Ingested too much superglue", 
"Ate a moldy pie", 
"Fell off a cliff while taking a selfie", 
"Tried to prove was immortal by leaping into a volcano", 
"Alcoholism", 
"Died after running from the cops for two hours",];


function inputLength() {
	if (person.value.length > 0 && age.value.length > 0) {
	return true;} else {return false;}};

function changeEnterButton() {
	if (inputLength() === true) {console.log('enter')}
	}

function charCount() {
	if (person.value.length > 0 && age.value.length > 0)
		{enter.classList.add('done')} 
	else if (person.value.length === 0 || age.value.length === 0)
		{enter.classList.remove('done')};
}

person.addEventListener('keyup', charCount);
age.addEventListener('keyup', charCount);


function howYouDied() {
	var randomDeath = Math.floor((Math.random() * 17) + 0);
	var randomAge = Math.floor((Math.random() * 40) + 10);
	var ageDeath = Number(age.value) + randomAge;
	var yearDeath = 2020 + randomAge;
	namehtml.textContent = "Name: "+person.value;
	deathhtml.textContent = "Cause of death: "+deaths[randomDeath];
	agehtml.textContent = "Age when died: "+ageDeath;
	yearhtml.textContent = "Year of death: "+yearDeath;
	person.value = '';
	age.value = '';
};

function checkInput(){
	if (inputLength() === true) {
		howYouDied();
	} else {
		alert('please input your name and age');
	}
};

function RunAfterKeypress(e) {
	if (e.keyCode === 13) {
		var ready = true;
	} false;
	if (ready === true) {
		checkInput();
	}
}

enter.addEventListener('click', checkInput);
person.addEventListener('keypress', RunAfterKeypress);
age.addEventListener('keypress', RunAfterKeypress);











