var student_array=[];
function submit(){
    var name1=document.getElementById("name_1").value;
    var name2=document.getElementById("name_2").value;
    var name3=document.getElementById("name_3").value;
    var name4=document.getElementById("name_4").value;

    student_array.push(name1);
    student_array.push(name2);
    student_array.push(name3);
    student_array.push(name4);
    console.log(student_array);
    document.getElementById("display").innerHTML=student_array;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sort_function(){
    student_array.sort();
    console.log(student_array);
    document.getElementById("display").innerHTML=student_array;
}