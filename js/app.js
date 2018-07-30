const dragitem1 = document.getElementById('item1');
const dragitem2 = document.getElementById('item2');
const dragitem3 = document.getElementById('item3');
const dragitems = document.querySelectorAll("draggable-item");
const container = document.getElementById('whereToDrop');

//first init with start and end  ITEM1
dragitem1.addEventListener('dragstart', draginit);
dragitem1.addEventListener('dragend', dragEnd);

//Second Item2 Init 
dragitem2.addEventListener('dragstart', draginit);
dragitem2.addEventListener('dragend', dragEnd);

// third Item3 init 
dragitem3.addEventListener('dragstart', draginit);
dragitem3.addEventListener('dragend', dragEnd);


//events in the container
container.addEventListener('dragover', dragOver);
container.addEventListener('dragleave', dragLeave);
container.addEventListener('dragenter', dragEnter);
container.addEventListener('drop', dragDrop);


// document.getElementById("item1").addEventListener("dragstart", function (e) {
//     let img = document.createElement("img")
//     img.src= "https://t00.deviantart.net/qEjheocaHAqSjRiAe5398EqclTE=/fit-in/150x150/filters:no_upscale():origin()/pre00/37d6/th/pre/i/2018/190/e/0/aggretsuko___retsuko_by_dragonchaser123-dcgp462.png"
//     e.dataTransfer.setDragImage(img, 130, 30);
//  } ,false);

//  document.getElementById("item2").addEventListener("dragstart", function (e) {
//     let img = document.createElement("img")
//     img.src= "https://t00.deviantart.net/qEjheocaHAqSjRiAe5398EqclTE=/fit-in/150x150/filters:no_upscale():origin()/pre00/37d6/th/pre/i/2018/190/e/0/aggretsuko___retsuko_by_dragonchaser123-dcgp462.png"
//     e.dataTransfer.setDragImage(img, 130, 30);
//  } ,false);

//initial functions about behavior

function draginit(e) { 
    console.log('inicia arrastre');
    this.className += ' hold'
    let img = document.createElement("img")
    img.src= "https://t00.deviantart.net/qEjheocaHAqSjRiAe5398EqclTE=/fit-in/150x150/filters:no_upscale():origin()/pre00/37d6/th/pre/i/2018/190/e/0/aggretsuko___retsuko_by_dragonchaser123-dcgp462.png"
    e.dataTransfer.setDragImage(img, 130, 30);
    
    
 }
 function dragEnd() {
     console.log('termina arrastre');
     this.className += 'fill'
     
 }

 // functions used in the transition

 function dragOver(e){
     e.preventDefault();
     console.log('over');
 }
function dragEnter(e){
    e.preventDefault();
    console.log('enter');
}
function dragLeave(){
    console.log('leave');
    
}
function dragDrop(e){
    console.log('drop');
   
    // agregamos el elemento de arrastre al contenedor
  
}