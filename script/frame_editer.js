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

function resizeImage(img){
    var origin_w = img.width;
    var origin_h = img.height;
    var per = max_w / origin_w * 100;;
    
    document.editing_img.width = max_w;
    document.editing_img.height = origin_h / 100 * per;
}

function loadEditer(data){
    var script = "";
    var reader = new FileReader();
    var editing_img = new Image();
    
    display("imgName",data[0]); 

    if (data[1].type.indexOf("image") == 0){
	reader.onload = function(evt){
	    document.querySelector("#editing_img").src = reader.result;
	    editing_img.src = document.getElementById('editing_img').src;

	    console.log(editing_img.width);
	    
	    if(editing_img.width > 690){
		resizeImage(editing_img);
	    }
	}
    }
    reader.readAsDataURL(data[1]);

    script += "<br><div id=optionStyle class=optionStyle onclick=toHSV()>HSV</div>"
    display("options",script);
}

function toHSV(){
    console.log("pass");
}
