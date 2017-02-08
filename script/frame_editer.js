function getContents(){
    var sentData = parent.frame_menu.return_contents();
    loadEditer(sentData);
}

function loadEditer(data){
    var script = "";

    console.log(data);
    
    script += data[0];
    display("editArea",script); 

    if (data[1].type.indexOf("image") == 0){
	var reader = new FileReader();
	
	reader.onload = function(evt){
	    document.querySelector("#editing_img").src = reader.result;
	}   
	reader.readAsDataURL(data[1]);
    }
}
