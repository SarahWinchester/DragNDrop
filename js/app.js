$('.imageBox').on('dragstart', function (e){
    let data= e.dataTransfer.setData('text/plain');
        console.log("si entra");
    
})


// $(".imageBox").on("dragstart", function (e) {
//     e.dataTransfer.setData('text', 'draggedElement');
//     console.log('inicia arrastre');
//  });    
 
 
//  $(".imageBox").on("dragend", function(){
//     console.log('termina arrastre');
//  });
 
//  $(".image-heigh").on("dragover", function(e){
//     e.preventDefault();
//     console.log("se esta arrastrando sobre");
//  })
 
//  $(".image-heigh").on("drop", function(e){
//     e.preventDefault();
//     let data = e.dataTransfer.getData('text')
//     let element = document.getElementById(data);
//     e.target.appendChild(element);
 
//  });
