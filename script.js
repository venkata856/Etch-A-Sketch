var cellsSize = 16;
var width;
var borderOff=false;
var rainbowOff= true;
var defaultColor= "#3d9c2b";
const container=document.querySelector(".container");
buildCells();

const buttonRainbow = document.querySelector(".rainbow")
const buttonClear = document.querySelector(".clear")
const toggleBorder = document.querySelector(".toggle-border")
const colorPick = document.querySelector("#favcolor")

const cellsInput=document.querySelector(".slider");
const valueDisplay=document.querySelector(".size");
// const allCellGrids = document.querySelectorAll(".pixel");

function randomColor(){

    let first=Math.floor(Math.random()*256);
    let second=Math.floor(Math.random()*256);
    let third=Math.floor(Math.random()*256);

    return `rgba(${first},${second},${third})`;
}

colorPick.addEventListener("input",(e)=>{

    defaultColor=e.target.value;
    rainbowOff= true;
    console.log(defaultColor);

})

container.addEventListener("mouseenter",()=>{

    const allCellGrids = document.querySelectorAll(".pixel");


    
    allCellGrids.forEach((allCellGrid)=> {

        allCellGrid.addEventListener("mouseenter",()=>{

            if(!rainbowOff)
            allCellGrid.style.backgroundColor=randomColor();
            else{
                allCellGrid.style.backgroundColor=defaultColor;
            }


            

        })
        
        

    });

})


cellsInput.addEventListener("input",()=>{

    // console.log(cellsInput.value)

    valueDisplay.textContent=`${cellsInput.value} X ${cellsInput.value}`;
    cellsSize=cellsInput.value;
    buildCells();
})

buttonRainbow.addEventListener("click",()=>{

    rainbowOff=false;

})

buttonClear.addEventListener("click",()=>{

    const allCellGrids = document.querySelectorAll(".pixel");


    
    allCellGrids.forEach((allCellGrid)=> {



            allCellGrid.style.backgroundColor='';

        
        

    });

})
toggleBorder.addEventListener("click",()=>{

    const allCellGrids = document.querySelectorAll(".pixel");

    borderOff=!borderOff;

    
    allCellGrids.forEach((allCellGrid)=> {
        
        allCellGrid.classList.toggle("pixel-border")

    });

})



// function calculateHeightWidth(cells){
    

//     console.log(getComputedStyle(container).width);

//     const availableArea= +getComputedStyle(container).width.replace("px","") * +getComputedStyle(container).height.replace("px","");
//     console.log(availableArea)
//     console.log(availableArea/cells)

//     console.log(Math.sqrt(availableArea/cells))
//     console.log(Math.floor(Math.sqrt(availableArea/cells)))

//     return Math.sqrt(availableArea/cells);

// }


// const width= calculateHeightWidth(cellsSize);


function buildCells(){
    clearCells();

    container.style.gridTemplateColumns=`repeat(${cellsSize}, 1fr)`;
    container.style.gridTemplateRows=`repeat(${cellsSize}, 1fr)`;


for(let i=0;i<cellsSize * cellsSize;i++){

    const pixelate1=document.createElement("div");
    pixelate1.setAttribute("class","pixel")
    if(borderOff)
    pixelate1.classList.add("pixel-border")

    container.appendChild(pixelate1);
}
}

function clearCells(){
    container.innerHTML='';
}

