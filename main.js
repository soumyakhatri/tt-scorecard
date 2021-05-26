let bat1 = document.querySelector('.bat1');
let bat2 = document.querySelector('.bat2');
bat1.style.display = 'block';
bat2.style.display = 'none';

let point1 = 0;
let point2 =0;

document.querySelectorAll('.touch')[0].addEventListener("click", increase1);

function increase1(){
    point1++;
    document.querySelector('.point1').innerHTML = point1;
    checkWinner();
}

document.querySelectorAll('.touch')[1].addEventListener("click", increase2);

function increase2(){
    point2++;
    document.querySelector('.point2').innerHTML = point2;
    checkWinner();
}


function checkWinner(){
    service();
    let result = document.querySelector(".result h2");
    if(point1>=11 && point2<10){
        document.querySelector(".lead h2").innerHTML = "";
        result.innerHTML = "Player 1 Wins";
        document.querySelector(".result h2").classList.add("animate");
        stop();
    } else if (point2>=11 && point1<10){
        document.querySelector(".lead h2").innerHTML = "";
        result.innerHTML = "Player 2 Wins";
        stop();
        document.querySelector(".result h2").classList.add("animate");
    } else if(point1>=10 && point2>=10){

        if(point1- point2 === 2){

            document.querySelector(".lead h2").innerHTML = "";
            result.innerHTML = "Player 1 Wins";
            stop();
            document.querySelector(".result h2").classList.add("animate");
        } else if(point2 - point1 === 2){
            document.querySelector(".lead h2").innerHTML = "";
            result.innerHTML = "Player 2 Wins";
            stop();
            document.querySelector(".result h2").classList.add("animate");
        } else {
          leadplayer();
        }
    } else if (point1 > point2){
            leadplayer();
        } else if( point1 < point2){
            leadplayer();
        } else {
            leadplayer();
        }
}

document.querySelector('.new-game').onclick = function(){
    document.querySelector('.point1').innerHTML = '0';
    document.querySelector('.point2').innerHTML = '0';
    point1 = 0;
    point2 = 0;
    document.querySelector(".result-h").innerHTML = " ";
    document.querySelector(".lead h2").innerHTML = " ";
    document.querySelectorAll('.touch')[0].addEventListener("click", increase1);
    document.querySelectorAll('.touch')[1].addEventListener("click", increase2);
    document.querySelector(".result h2").classList.remove("animate");


}

function stop(){
    document.querySelectorAll('.touch')[0].removeEventListener("click", increase1);
    document.querySelectorAll('.touch')[1].removeEventListener("click", increase2);
}


function leadplayer(){
let lead;
if(point1 > point2){
    lead = point1 - point2;
    document.querySelector(".lead h2").innerHTML = "Player 1 is leading by " + lead + " points"
} else if (point1 < point2){
    lead = point2 - point1;
    document.querySelector(".lead h2").innerHTML = "Player 2 is leading by " + lead + " points"

} else if (point1 === point2){
    document.querySelector(".lead h2").innerHTML = "Score Levels";
}
}



function service(){


    console.log(point1 + point2);
    if((point1 + point2) % 2 ===0){

        if(bat1.style.display === 'block'){
            bat1.style.display = 'none';
            bat2.style.display = 'block';
            console.log(bat1.style.display);
            console.log(bat2.style.display);
        } else if(bat1.style.display === 'none'){
            bat2.style.display = 'none';
            bat1.style.display = 'block';
            console.log('bat1');
        }
    }

}
