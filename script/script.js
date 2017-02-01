// if (window.File) {
//     document.getElementById("drop").addEventListener("drop", onDrop, false);
// } else {
//     window.alert("not support");
// }

function reload(name){
    parent.frames.menu.location.reload(true);
    alert("reloaded")
}

function display(id,mes){
    alert(mes)
    document.getElementById(id).innerHTML = mes
}

function onDrop(event) {
    var files = event.dataTransfer.files;
    reload("menu");
    var info = ""
    
    for (var i = 0;i < files.length;i++){
	info += files[i].name + "<br>"
	display("info",info)
    }
    event.preventDefault();
}

function onDragOver(event) {
    event.preventDefault();
}

function addMenu(num){
    var script = "<div class=menu_button><div class=menu_text>M</div></div><br>";

    for(var i = 0;i < num;i++){
	script += "<div class=menu_button><div class=menu_text>M</div></div><br>";
    }
    
    display("menu",script)
}
