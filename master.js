const grav = 4;
const tileSize = 32;
const mapSize = 512;
const app = document.getElementById('app');
let speed = 0;

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


(function init(){
    makeLevel(level1);
    makeLevelDis();
    console.log(currLevLog)
})()