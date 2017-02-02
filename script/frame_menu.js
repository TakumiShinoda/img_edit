var length = 0;
var labels = [];

function showMenu(length){
    var script = "<div class=menu_button><div class=menu_text>M</div></div><br>";

    for(var i = 0;i < length;i++){
	script += "<div class=menu_button><div class=menu_text>"+ labels[i] +"</div></div><br>";
    }

    display("menu",script)
}

function addMenu(num,list){
    for(var i = 0;i < list.length;i++){
	labels.unshift(list[i].substr(0,1));
    }
    
    showMenu(labels.length);
}
