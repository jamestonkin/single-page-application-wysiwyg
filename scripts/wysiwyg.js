'use strict';
var container = document.getElementById('container');
var card = document.getElementsByClassName('card');
var input = document.getElementById('new-input');
var section = document.getElementsByClassName('section');
var famousPeople = [
  {
    title: "General of the Army",
    name: "George Washington",
    bio: " In 1775, the Second Continental Congress commissioned Washington as commander-in-chief of the Continental Army in the American Revolution. In that command, Washington forced the British out of Boston in 1776 but was defeated and nearly captured later that year when he lost New York City.",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg",
    lifespan: {
      birth: 1732,
      death: 1799
    }
  },
  {
    title: "Lieutenant Colonel",
    name: "Alexander Hamilton",
    bio: "Hamilton served for four years as Washington's chief staff aide. He handled letters to Congress, state governors, and the most powerful generals in the Continental Army; he drafted many of Washington's orders and letters at the latter's direction; he eventually issued orders from Washington over Hamilton's own signature.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Alexander_Hamilton_portrait_by_John_Trumbull_1806.jpg",
    lifespan: {
      birth: 1755,
      death: 1804
    }
  },
  {
    title: "Lieutenant Colonel",
    name: "Aaron Burr",
    bio: "Burr was promoted to lieutenant colonel in July 1777 and assumed virtual leadership of Malcolm's Additional Continental Regiment. There were approximately 300 men under Colonel William Malcolm's nominal command. The regiment successfully fought off many nighttime raids into central New Jersey by British troops arriving by water from Manhattan.",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Burr.jpg",
    lifespan: {
      birth: 1756,
      death: 1836
    }
  },
  {
    title: "Lieutenant Colonel",
    name: "John Laurens",
    bio: "Laurens joined the Continental Army, and following the Battle of Brandywine, he was officially made an aide-de-camp to General Washington with the rank of lieutenant colonel. He served with the Baron von Steuben, doing reconnaissance at the outset of the Battle of Monmouth.",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Charles_Willson_Peale_-_John_Laurens_-_Google_Art_Project.jpg",
    lifespan: {
      birth: 1754,
      death: 1782
    }
  }
];


for (var i = 0; i < famousPeople.length; i++) {
  let prefillMessages = '';
  prefillMessages += `<article class="card" id="blue-yellow">
							 <header class="header"> ${famousPeople[i].title} ${famousPeople[i].name}</header>
							 <section class="section"> <img src="${famousPeople[i].image}" width="100" height="100"> ${famousPeople[i].bio}</section>
               <footer class="footer"> ${famousPeople[i].lifespan.birth}-${famousPeople[i].lifespan.death}</footer>
							 </article>`;
		container.innerHTML += prefillMessages;
}



// Event listeners
for (var i = 0; i < famousPeople.length; i++) {
	card[i].addEventListener("click", border);
	card[i].addEventListener("click", focus);
}

// Event listener to capture new input for bio section
input.addEventListener("keyup", edit);

// loops to check for border and allow new input
function edit(event) {
	for (var k = 0; k < famousPeople.length; k++) {
		if (card[k].classList.contains("border")) {
			section[k].innerHTML = document.getElementById("new-input").value;
		}
	}
	if (event.keyCode == 13) {
		input.value = "";
	}
}

// Removes any border and resets the bio
function border(event) {
	for (var j = 0; j < famousPeople.length; j++) {
		card[j].classList.remove("border");
	}
	input.value = "";
	this.classList.toggle("border");
}

// Focus cursor to the input box
function focus(event){
	input.focus();
}
