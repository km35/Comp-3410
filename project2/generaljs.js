
function rollthree(){
		return (Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6));
}
function rollfour(){
	let a = Math.ceil(Math.random() * 6);
	let b = Math.ceil(Math.random() * 6);
	let c = Math.ceil(Math.random() * 6);
	let d = Math.ceil(Math.random() * 6);
	return a + b + c + d -(Math.min(a, b, c, d));
}
function rollfive(){
	let a = Math.ceil(Math.random() * 6);
	let b = Math.ceil(Math.random() * 6);
	let c = Math.ceil(Math.random() * 6);
	let d = Math.ceil(Math.random() * 6);
	return a + b + c + d -(Math.min(a, b, c, d));
}
function rollfive(){
	let a = Math.ceil(Math.random() * 6);
	let b = Math.ceil(Math.random() * 6);
	let c = Math.ceil(Math.random() * 6);
	let d = Math.ceil(Math.random() * 6);
	let e = Math.ceil(Math.random() * 6);
	let arr = [a, b, c, d, e];
	arr.sort();
	return arr[2] + arr[3] + arr[4];
}
function stats(){
	document.getElementById("arraystats").style.display = "none";
	document.getElementById("statshere").innerHTML = " ";
	if (document.getElementById("arrayroll").checked) {
		if (document.getElementById("fourroll").checked) {
			document.getElementById("strint").innerHTML = rollfour();
			document.getElementById("strwis").innerHTML = rollfour();
			document.getElementById("strcha").innerHTML = rollfour();
			document.getElementById("dexint").innerHTML = rollfour();
			document.getElementById("dexwis").innerHTML = rollfour();
			document.getElementById("dexcha").innerHTML = rollfour();
			document.getElementById("conint").innerHTML = rollfour();
			document.getElementById("conwis").innerHTML = rollfour();
			document.getElementById("concha").innerHTML = rollfour();
			document.getElementById("arraystats").style.display = "inherit";
		}
		else if (document.getElementById("fiveroll").checked) {
			document.getElementById("strint").innerHTML = rollfive();
			document.getElementById("strwis").innerHTML = rollfive();
			document.getElementById("strcha").innerHTML = rollfive();
			document.getElementById("dexint").innerHTML = rollfive();
			document.getElementById("dexwis").innerHTML = rollfive();
			document.getElementById("dexcha").innerHTML = rollfive();
			document.getElementById("conint").innerHTML = rollfive();
			document.getElementById("conwis").innerHTML = rollfive();
			document.getElementById("concha").innerHTML = rollfive();
			document.getElementById("arraystats").style.display = "inherit";
		}
		else {
			document.getElementById("strint").innerHTML = rollthree();
			document.getElementById("strwis").innerHTML = rollthree();
			document.getElementById("strcha").innerHTML = rollthree();
			document.getElementById("dexint").innerHTML = rollthree();
			document.getElementById("dexwis").innerHTML = rollthree();
			document.getElementById("dexcha").innerHTML = rollthree();
			document.getElementById("conint").innerHTML = rollthree();
			document.getElementById("conwis").innerHTML = rollthree();
			document.getElementById("concha").innerHTML = rollthree();
			document.getElementById("arraystats").style.display = "inherit";
		}
	}
	else{
		if (document.getElementById("fourroll").checked) {
			document.getElementById("statshere").innerHTML = rollfour() + ", " + rollfour() + ", " + rollfour() + ", " + rollfour() + ", " + rollfour() + ", " + rollfour();
		}
		else if (document.getElementById("fiveroll").checked) {
			document.getElementById("statshere").innerHTML = rollfive() + ", " + rollfive() + ", " + rollfive() + ", " + rollfive() + ", " + rollfive() + ", " + rollfive();
		}
		else{
			document.getElementById("statshere").innerHTML = rollthree() + ", " + rollthree() + ", " + rollthree() + ", " + rollthree() + ", " + rollthree() + ", " + rollthree();
	}
	}
}
function d4(){
	document.getElementById('rolld4').innerHTML = Math.ceil(Math.random() * 4);
}
function d6(){
	document.getElementById("rolld6").innerHTML = Math.ceil(Math.random() * 6);
}
function d8(){
	document.getElementById("rolld8").innerHTML = Math.ceil(Math.random() * 8);
}
function d10(){
	document.getElementById("rolld10").innerHTML = Math.ceil(Math.random() * 10);
}
function d12(){
	document.getElementById("rolld12").innerHTML = Math.ceil(Math.random() * 12);
}
function d20(){
	document.getElementById("rolld20").innerHTML = Math.ceil(Math.random() * 20);
}
function d100(){
	document.getElementById("rolld100").innerHTML = Math.ceil(Math.random() * 100);
}
/*function randomizer(){
	let races = [Aasimar, Bugbear, Dragonborn, Dwarf, Elf, Firbolg, Genasi, Gnome, Goblin, Goliath, HalfElf, HalfOrc, Halfling, Kender, Hobgoblin, Human, Kenku, Kobold, Lizardfolk, Orc, Tabaxi, Tiefling, Tortle, Triton, YuanTi];
	let classes = [Barbarian, Bard, Cleric, Druid, Fighter, Monk, Paladin, Ranger, Rogue, Sorcerer, Warlock, Wizard];
	let backgrounds = ["Acolyte", "Black Fist Double Agent", "Caravan Specialist", "Charlatan", "City Watch", "Clan Crafter", "Cloistered Scholar", "Cormanthor Refugee", "Courtier", "Criminal", "Dissenter", "Dragon Casualty", "Earthspur Miner", "Entertainer", "Folk Hero", "Gate Urchin", "Guild Artisan", "Harborfolk", "Haunted One", "Hermit", "Hillsfar Merchant", "Hillsfar Smuggler", "Initiate", "Inquisitor", "Iron Route Bandit", "Mercenary Veteran", "Mulmaster Aristocrat", "Noble", "Outlander", "Phlan Insurgent", "Phlan Refugee", "Sage", "Sailor", "Secret Identity", "Shade Fanatic", "Soldier", "Stojanow Prisoner", "Ticklebelly Nomad", "Urchin", "Uthgardt Tribe Member", "Vizier"];
	document.getElementById("race").innerHTML = races[Math.floor(Math.random() * races.length)];
	document.getElementById("dndclass").innerHTML = classes[Math.floor(Math.random() * classes.length)];
	document.getElementById("dndbackground").innerHTML = backgrounds[Math.floor(Math.random() * backgrounds.length)];
}*/