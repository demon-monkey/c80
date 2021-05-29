var student_array=[];
var display_array=[];

function submit_fun(){
for (var k=1;k<=4;k++){
    var student_name =document.getElementById("name"+k).value;
    student_array.push(student_name);
}
console.log(student_array);

for (var i=0;i<student_array.length;i++){
display_array.push("<h4>name-"+ student_array[i]+"</h4>");

}

document.getElementById("output").innerHTML=display_array;
document.getElementById("out_join").innerHTML=display_array.join(" ");
document.getElementById("submit").style.display="none";
document.getElementById("sort").style.display="inline-block"
}

function sort_fun(){
    student_array.sort();
    console.log(student_array);
    document.getElementById("output").innerHTML=student_array;
}