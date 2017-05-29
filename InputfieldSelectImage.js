$(function(){

    // Add thumbnail when page loads
    $(".InputfieldSelectImage select").each(function() {
        appendThumb($(this));
    });

    // Add thumbnail when select changes
    $(".InputfieldSelectImage select").on("change", function() {
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
