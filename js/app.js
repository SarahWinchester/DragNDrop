$(".imageBox").on("dragstart", function (e) { 
    e.dataTransfer.setData('img', 'draggedElement');
    console.log('inicia arrastre');
});    


$(".imageBox").on("dragend", function(){

    console.log('termina arrastre');

});

$(".empties").on("dragover", function(e){
    e.preventDefault();
    console.log("se esta arrastrando sobre");
})

$(".empties").on("drop", function(e){
    let dataItem = e.dataTransfer.getData('img');
    e.preventDefault();
    let droppedItem = $(".imageBox");
    droppedItem.src = dataItem.src
    $(".empties").child(droppedItem);
});