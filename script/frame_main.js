function onDrop(event) {
    var files = event.dataTransfer.files;
    var info = "";
    var nameList = [];
    var logList = [];
    
    for (var i = 0;i < files.length;i++){
	var file_name = files[i].name;

	nameList.push(file_name);
	if (files[i].type.indexOf("image") == 0) {
	    var reader = new FileReader();
	    
	    reader.onload = function(evt){
		document.querySelector("#img").src = reader.result;
	    }
	    
	    reader.readAsDataURL(files[i]);
	}

	parent.frames.frame_log.add(file_name + ":Added");
    }

    parent.frames.frame_log.load();
    parent.frames.frame_menu.addMenu(files.length,nameList);
    event.preventDefault();
}

function onDragOver(event) {
    event.preventDefault();
}
