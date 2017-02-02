function onDrop(event) {
    var files = event.dataTransfer.files;
    var info = ""

    parent.frames.frame_menu.addMenu(files.length);
    
    for (var i = 0;i < files.length;i++){
	info += files[i].name + "<br>"
	display("info",info)
    }
    event.preventDefault();
}

function onDragOver(event) {
    event.preventDefault();
}
