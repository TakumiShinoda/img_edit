max_w = 690;

$(function(){
    $('.optionStyle').on('click', function(){
        $(this).toggleClass('active');
    });
});

function getContents(){
    var sentData = parent.frame_menu.return_contents();
    loadEditer(sentData);
}

function loadEditer(data){
    var script = "";
    var reader = new FileReader();
    var editing_img = new Image();
    var canvas = document.getElementById("editing_img");
    var ctx = canvas.getContext('2d');
    
    display("imgName",data[0]);

    editing_img.src = data[1].path + "?" + new Date().getTime();
    
    editing_img.onload = function() {
	var scale = 1;
	if(editing_img.width > 690){
	    scale = 690 / editing_img.width;
    	}
	var dstw = editing_img.width * scale;
	var dsth = editing_img.height * scale;
	canvas.width = dstw;
	canvas.height = dsth;
	ctx.drawImage(editing_img,0,0,editing_img.width,editing_img.height,0,0,dstw,dsth);
    }
    script += "<br><div id=optionStyle class=optionStyle onclick=ic.toHSV()>HSV</div>"
    display("options",script);
}
