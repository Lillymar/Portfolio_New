var quoteArray = ["🇵🇷 Front-end developer, based in Puerto Rico"];
var textPosition = 0; 
var speed = 100;

typewriter = () => {
  document.querySelector("#message").innerHTML = quoteArray[0].substring(0, textPosition) + '<span id="type">\u25AE</span>';

  if(textPosition++ != quoteArray[0].length)
    setTimeout(typewriter, speed);
}

window.addEventListener("load", typewriter)