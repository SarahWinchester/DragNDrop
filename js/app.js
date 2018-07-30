const dragitem1 = document.getElementById("item1");
const dragitem2 = document.getElementById("item2");
const dragitem3 = document.getElementById("item3");
const container = document.getElementById("whereToDrop");

document.getElementById("item1").addEventListener("dragstart", function (e) {
    let img = document.createElement("img")
    img.src= "https://t00.deviantart.net/qEjheocaHAqSjRiAe5398EqclTE=/fit-in/150x150/filters:no_upscale():origin()/pre00/37d6/th/pre/i/2018/190/e/0/aggretsuko___retsuko_by_dragonchaser123-dcgp462.png"
    e.dataTransfer.setDragImage(img, 130, 30);
 } ,false);

 document.getElementById("item2").addEventListener("dragstart", function (e) {
    let img = document.createElement("img")
    img.src= "https://t00.deviantart.net/qEjheocaHAqSjRiAe5398EqclTE=/fit-in/150x150/filters:no_upscale():origin()/pre00/37d6/th/pre/i/2018/190/e/0/aggretsuko___retsuko_by_dragonchaser123-dcgp462.png"
    e.dataTransfer.setDragImage(img, 130, 30);
 } ,false);


// const fill = document.getElementsByClassName('draggable-item');
// const empty = document.getElementById('whereToDrop');


// //starting call to draggable items 
// fill.addEventListener('dragstart', dragStart);
// // allDraggable.addEventListener(" dragstart ", dragstart); //what will do when the drag starts
// // allDraggable.addEventListener("dragend", dragEnd); //what will do when the drag ends no matter in what par

// function dragStart(e) { 
//     console.log("inicia arrastre");
    
//  }
//  function dragEnd() {
//      console.log("termina arrastre");
     
//  }