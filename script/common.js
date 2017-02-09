function reload(frameName){
    parent.frames.frameName.location.reload(true);
}

function display(id,mes){
    document.getElementById(id).innerHTML = mes
}

$(function () {
    $(document).on('drop dragover', function (e) {
	e.stopPropagation();
	e.preventDefault();
    });
});
