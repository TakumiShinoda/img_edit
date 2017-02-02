var length = 0;

function showMenu(length){
    var script = "<div class=menu_button><div class=menu_text>M</div></div><br>";

    for(var i = 0;i < length;i++){
	script += "<div class=menu_button><div class=menu_text>M</div></div><br>";
    }
    
    display("menu",script)
}

function addMenu(num){
    length += num;
    showMenu(length);
}
