const grav = 4;
const tileSize = 32;
const mapSize = 512;
const app = document.getElementById('app');
let speed = 0;
let char = {}

const level1 = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0],
                [0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
                [1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1],
                [1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                ]

let currLevLog = [];



console.log('foo');

function charLogic(c){
    c.lives = 3;
    c.xLeft = 40;
    c.width = 30;
    c.height = 60;
    c.xRight = c.xLeft + c.width;
    c.yTop = 400;
    c.yBottom = c.yTop + c.height;
    c.speed = 0;
    c.allowMove = true;
    c.momentum = 0;
}

function makeLevel(lev){
    currLevLog = [];
    for(let i = 0; i < lev.length; i++){
        for(let j = 0; j < lev[i].length; j++){
            const levObj = {};
            if(lev[i][j] == 0){
                levObj.type = 'sky';
            }
            else if(lev[i][j] == 1){
                levObj.type = 'grass';
            }
            levObj.xLeft = j * tileSize;
            levObj.xRight = ((j+1) * tileSize)-1;
            levObj.yTop = i * tileSize;
            levObj.yBottom = ((i+1) * tileSize)-1;
            currLevLog.push(levObj);
        }
    }
}

function makeLevelDis(){
   for(let i = 0; i < currLevLog.length; i++){
       const newTile = document.createElement('div');
       if(currLevLog[i].type == 'sky'){
        newTile.classList += 'skyTile';
       }
       else if(currLevLog[i].type == 'grass'){
           newTile.classList += 'grassTile';
       }
       app.appendChild(newTile);
   }
}

function makeCharDis(c){
    console.log(c);
}

function evtListeners(){
    document.addEventListener('keydown', function(e){
        console.log(e.keyCode);
        if(e.keyCode == 37 || e.keyCode == 39){
            if(char.momentum < 10){
                char.momentum += 1;
            }
        }
    })
}

(function init(){
    makeLevel(level1);
    makeLevelDis();
    charLogic(char);
    makeCharDis(char);

    evtListeners();
    console.log(currLevLog);
})()
