//Every line is documented to provide clearity, and all code is to manipulate styling of MY profile, not to maliciously alter the site.

const tagElement = document.getElementById("utub"); //fetches the div element with the id of utub.

tagElement.innerText = `Crimson`; //Changes the text of the div element to Crimson.
tagElement.style = `margin-left: -40px; color: red; font-size:20px; display: inline-block`; //Changes the styling of the div element to the specified styling.

// Only runs the code if the user is on the Crimson Claw team page.
if (window.location.href === "https://ivrl.gg/vail/teams/crimson-claw") {
  const allCardLists = document.getElementsByClassName("player-card-list");

  const mainRoster = allCardLists[0];

  const players = mainRoster.getElementsByClassName("fi");

  for (let i = 0; i < players.length; i++) {
    const playerCountry = players[i];
    playerCountry.className = `fi`;
    playerCountry.innerText = `Crimson`; //Changes the text of the div element to Crimson.
    playerCountry.style = `margin-left: -40px; color: red; font-size:20px; display: inline-block; width: auto`; //Changes the styling of the div element to the specified styling.
  }
}
