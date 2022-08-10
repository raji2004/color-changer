const div = document.getElementById('c');
const b = document.getElementById('th')
const colorchange = ['blue','red','green','black','yellow','orange','grey','brown','pink','white','cyan','azure','maroon','violet','lime','silver','bronze','gold','scarlet'];
div.addEventListener("click", colorchanger);


function colorchanger(){
    const random = Math.floor(Math.random()*20)+1;
    const index = colorchange[random]; 
    div.style.backgroundColor= index;
}
