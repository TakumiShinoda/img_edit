function onDrop(event) {
    var files = event.dataTransfer.files;
    var info = "";
    var nameList = [];
    var logList = [];
    
    for (var i = 0;i < files.length;i++){
	var file_name = files[i].name;
	
	nameList[i] = [];
	nameList[i][0] = file_name;
	nameList[i][1] = files[i]
	parent.frames.frame_log.add(file_name + ":Added");
    }

    console.log(nameList);
    
    parent.frames.frame_log.load();
    parent.frames.frame_menu.addMenu(nameList);
    event.preventDefault();
}

function onDragOver(event) {
    event.preventDefault();
}
