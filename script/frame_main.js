function onDrop(event) {
    var files = event.dataTransfer.files;
    var dataList = [];
    var logList = [];
    
    for (var i = 0;i < files.length;i++){
	var file_name = files[i].name;

	if (files[i].type.indexOf("image") == 0){
	    dataList[i] = [];
	    dataList[i][0] = file_name;
	    dataList[i][1] = files[i]
	    parent.frames.frame_log.add(file_name + ":Added");   
	}else{
	    parent.frames.frame_log.add(file_name + ":not supported")
	}
    }
    parent.frames.frame_log.load();
    parent.frames.frame_menu.addMenu(dataList);
    event.preventDefault();
}

function onDragOver(event) {
    event.preventDefault();
}
