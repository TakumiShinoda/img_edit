var logs = [];

function init_log(){
    logs = [];
    logs.unshift(dateLog() + "start program!");
    load();
}

function dateLog(){
    var time = new Date();
    var year = time.getFullYear();
    var month = time.getMonth();
    var date = time.getDate();
    var hour = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    return year + "-" + month + "-" + date + ":" + hour + "-" + minutes + "-" + seconds + "　";
}

function add(log){
    log = dateLog() + log;
    logs.unshift(log);
}

function load(){
    var script = "";
    addLine();
    
    function addLine(){
	script += "<hr class=logLine>"
    }
    
    for(var i = 0;i < logs.length;i++){
	script += logs[i];
	addLine();
    }

    display("log",script);
}
