function getContents(){
    var sentData = parent.frame_menu.return_contents();
    loadEditer(sentData);
}

function loadEditer(data){
    var script = "";
    var reader = new FileReader();
    
    display("imgName",data[0]); 

    if (data[1].type.indexOf("image") == 0){
	reader.onload = function(evt){
	    document.querySelector("#editing_img").src = reader.result;
	}   
	reader.readAsDataURL(data[1]);
    }

    script += "<br><div class=hsv onclick=toHSV()>HSV</div>"
    display("options",script);
}

function toHSV(){
    console.log("pass");
}
