var editNum = 0;
var labels = [];

function return_contents(){
    return labels[editNum];
}

function tap_label(order){
    if(order == -1){
	parent.frame_main.location.href = "frame_main.html";
    }else{
	parent.frame_main.location.href = "frame_editer.html";
	editNum = order;
    }
}

function showMenu(){
    var script = "<div class=menu_button><div class=menu_text onclick=tap_label(-1)>M</div></div><br>";

    for(var i = 0;i < labels.length;i++){
	script += "<div class=menu_button><div class=menu_text onclick=tap_label("+ i +")>"+ labels[i][0].substr(0,1) +"</div></div><br>";
    }

    display("menu",script)
}

function addMenu(list){
    for(var i = 0;i < list.length;i++){
	labels.unshift(list[i]);
    }
    showMenu();
}
