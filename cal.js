function ac(){
    document.getElementById("res").value="";
}
function a(input){
    document.getElementById("res").value +=input;
}
function calc(){
     var output =eval(document.getElementById("res").value);
     document.getElementById("res").value=output;
}
