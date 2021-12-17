window.onload = init; //Initialiseer deze pagina als deze wordt geladen
let imgfrt,imgbck; //Definieer de twee afbeeldingen

function init()
{
  imgbck = document.getElementById('imgbck'); 
  imgfrt = document.getElementById('imgfrt');
  fadeout(imgfrt,3000); //Zorgt ervoor dat de voorste afbeelding wegvaagt
}

function fadeout(el, duration)
{
    let s = el.style;
    let step = 25/duration;
    let factor = 1; //s.opacity veranderd naar factor

    function fade()
    {
        if(s.opacity < 0 && factor == 1) //Als opacity kleiner is dan 0 en factor is 1, dan laat de voorste afbeelding zien.
        {
            console.log("1/2");
            factor = -1;
            setTimeout(fade, 25);
        }
        else if(s.opacity > 1 && factor == -1) //Als opacity is groter dan 1 en factor is -1, dan laat de achterste afbeelding zien door fade
        {
            console.log("2/2")
            factor = 1;
            fade();
        }
        else
        {
            s.opacity = s.opacity - (step * factor);
            setTimeout(fade, 25);
        }
    }
    fade();
}