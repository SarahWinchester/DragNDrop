$('.imageBox').on('dragstart', function (e){
    //Estás usuando jQuery así que event ya no es el event de la documentación, ese lo encuentras en originalEvent
	//Aquí mando el src de la imagen, aunque tal vez hubieras querido mandar el ID, pero tus imagenes no tienen ID
	//en el HTML y trato de hacer las modificaciones mínimas al código.
    e.originalEvent.dataTransfer.setData('text/plain', $(this).attr('src'));
	console.log("si entra");
});


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
 
$(".image-heigh").on("drop", function(e){
     e.preventDefault();
     //Estás usuando jQuery así que event ya no es el event de la documentación, ese lo encuentras en originalEvent
     let data = e.originalEvent.dataTransfer.getData('text/plain')
     // Para simular que fue drageado y dropeado, simplemente eliminamos el elemento, buscandolo por su src
     let $element = $(`[src='${data}']`)[0].remove();
     //Estas poniendo placeholders, así que es más sencillo simplemente reemplazar el url de la imagen
     e.target.src=src;
});
