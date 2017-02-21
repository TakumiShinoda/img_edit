function reload(frameName){
    parent.frames.frameName.location.reload(true);
}

function init_logButton(){
    if(parent.mainFrame.rows == "80%,20%"){
	document.getElementById("openLog").style.display = "none";
    }
}

function openLog(){
    parent.mainFrame.rows = "80%,20%";
    document.getElementById("openLog").style.display = "none";
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
