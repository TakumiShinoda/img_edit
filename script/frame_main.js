function onDrop(event) {
    var files = event.dataTransfer.files;
    var info = "";
    var nameList = [];
    
    for (var i = 0;i < files.length;i++){
	var file_name = files[i].name;

	nameList.push(file_name);
	info += file_name + "<br>"
	display("info",info)
    }

    parent.frames.frame_menu.addMenu(files.length,nameList);
    event.preventDefault();
}

function onDragOver(event) {
    event.preventDefault();
}
