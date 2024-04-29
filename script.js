document.addEventListener("DOMContentLoaded", function() {


    const xMen = document.getElementById("x-men");

    const centered = document.getElementsByClassName("center");

    const batman = document.querySelector("#batman");

    const h3s = document.querySelectorAll("h3");

    const h1 = document.querySelector("h1");

    h1.innerText = "The Best Animated Superhero TV Shows Ever!";

    const honorableMentions = document.querySelector("#honorable-mentions");

    honorableMentions.innerHTML = "<p>OTHER GREAT SHOWS</p>";

    const aTag = document.querySelector("a");

    aTag.setAttribute("href", "https://fandomwire.com/15-greatest-animated-superhero-shows-ever-made-ranked/");

    h1.classList.add("background", "text-color");

    h1.classList.remove("background");

    const h4 = document.createElement("h4");
    
    h4.innerText = 'Is "The Transformers" A Superhero Show?';

    document.body.prepend(h4);

    const h5 = document.createElement("h5");

    h5.innerText = "Heroes in a half shell Turtle Power!";

    aTag.insertAdjacentElement("afterend", h5);

    const supermanLi = document.querySelector("li");
    supermanLi.remove();
});