//Every line is documented to provide clearity, and all code is to manipulate styling of MY profile, not to maliciously alter the site.

const tagElement = document.getElementById("utub"); //fetches the div element with the id of utub.

//This applies a crimson tag to my name on all pages.
tagElement.innerText = `Crimson`; //Changes the text of the div element to Crimson.
tagElement.style = `margin-left: -40px; color: red; font-size:20px; display: inline-block`; //Changes the styling of the div element to the specified styling.

// Only runs the code if the user is on the Crimson Claw team page.
if (window.location.href === "https://ivrl.gg/vail/teams/crimson-claw") {
  //banner
  document.getElementsByClassName("horizontal-gradient-bg")[0].style =
    "background:linear-gradient(0deg, rgb(19 19 19 / 66%), rgb(0 0 0 / 46%)), url(https://cdn.discordapp.com/attachments/1080141999459541092/1080490589323280405/wolf_banner.png); background-size:cover; background-position: center;";
}
