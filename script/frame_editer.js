var contents = "";

function getContents(){
    contents = parent.frame_menu.return_contents();
    loadEditer();
}

function loadEditer(){
    var script = "";
    script += contents;

    console.log(contents);
    display("editArea",script);   
}
