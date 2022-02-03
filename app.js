console.log('hello');


let addbtn = document.getElementById('addbtn');
addbtn.addEventListener("click", function(e){
 
    console.log("inside click")
    let addtxt = document.getElementById('addtxt');
    console.log(addtxt.value);
});