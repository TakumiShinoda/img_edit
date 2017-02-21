function onDrop(event) {
    var files = event.dataTransfer.files;
    var dataList = [];
    var logList = [];
    var j = 0;
    
    for (var i = 0;i < files.length;i++){
	var file_name = files[i].name;

	if (files[i].type.indexOf("image") == 0){
	    dataList[j] = [];
	    dataList[j][0] = file_name;
	    dataList[j][1] = files[i]
	    j++;
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
