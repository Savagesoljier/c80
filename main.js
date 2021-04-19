var name_student_array=[];

function submit(){
    var display_student=[];
    for(var j=1; j<=4; j++)
    {
        var name_student=document.getElementById("name_student_" +j).value;
        console.log(name_student);
        name_student_array.push(name_student);

    }
    console.log(name_student_array);
    var length_of_array=name_student_array.length;

    console.log(length_of_array);

    for(var k=0; k<length_of_array; k++)
    {
        display_student.push("<h4> Name: " + name_student_array[k]+"</h4>");
        console.log(display_student);
    }
    console.log(display_student);
    document.getElementById("display_name_with_commas").innerHTML = display_student;

    var remove_comma= display_student.join(" ");
    console.log(remove_comma);
    document.getElementById("display_name_without_comma").innerHTML = display_student;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("button_sort").style.display="inline-block";


}

function sorting(){
    name_student_array.sort();
    console.log(name_student_array);
var display_sorting=[];
var array_length= name_student_array.length;
console.log(array_length);

for(var h=0; h<array_length; h++)
{
    display_sorting.push("<h4> Name: " + name_student_array[h]+"</h4>");
    console.log(display_sorting) 
}
var remove_comma=display_sorting.join(" ");
document.getElementById("display_name_without_comma").innerHTML = remove_comma;
}

function update(){
    document.getElementById("display_name_without_comma").innerHTML="<h1>"+name_student_array+"</h1>";
    
}

