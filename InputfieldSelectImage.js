$(function(){

	var $select = $('.InputfieldSelectImage select');

    // Add thumbnail when page loads
	$select.each(function() {
        appendThumb($(this));
    });

    // Add thumbnail when select changes
	$select.on('change', function() {
        appendThumb($(this));
    });

});

function appendThumb(element){
    var img_url = element.find(':selected').data("thumb");
    var thumb_box = element.next(".selected-thumb");
    thumb_box.empty();
    if(img_url) {
        thumb_box.append("<img src='" + img_url + "'>");
    }
}
