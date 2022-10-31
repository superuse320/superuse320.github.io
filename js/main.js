$(".imagen").click(function(e){
	var enlaceImagen = e.target.src;
	var data = $(this).attr("data");
	var lightbox = '<div class="ligthbox">'+
						'<img src="'+enlaceImagen+'" alt="" id="zoom_mw" data-zoom-image="'+data+'">'+
						'<div class="btn-close">X</div>'+
					'</div>';

	$("body").append(lightbox)
	
	$(".btn-close").click(function(){
		$(".ligthbox").remove();
	})
console.log(enlaceImagen,data)
})