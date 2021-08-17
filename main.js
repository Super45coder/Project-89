var ready_count = 0;
function ready_login(){
    ready_count = ready_count + 1;
    console.log(ready_count + " people are ready");
}
function addUser(){
    if (ready_count >= 2){

    }else{
        console.log("Invalid");
        document.getElementById("invalid").innerHTML = "1 player is not ready. Please wait";
    }
}