logs = [];

function add(log){
    logs.unshift(log);
}

function load(){
    var script = "<hr>";
    
    for(var i = 0;i < logs.length;i++){
	script += logs[i] + "<hr>";
    }

    display("log",script);
}
