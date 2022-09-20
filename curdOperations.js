$(document).ready(function()
{
$('#view-student').on('click',function()
  {
        var id =  document.getElementById("ID").value;
        console.log(id);

        getstudentDetail(id)

  });

  $('#add-student').on('click',function()
  {
    var $ID = $('#ID');
    var $Name = $('#Name');
    var $Age = $('#Age');
    var $College = $('#College');

  
        var studentdata = {

            ID: $ID.val(),
            Name:$Name.val(),
            Age:$Age.val(),
            College:$College.val()

        };
    addStudents(studentdata)
  });

  $('#view-all-student').on('click',function()
  {
    getstudentDetails()

  });

  $('#delete-student').on('click',function()
  {
    deletestudent()

  });

  $('#update-name').on('click',function()
  {

    var $ID = $('#updateID');
    var $Name = $('#updateName');
    var $Age = $('#updateAge');
    var $College = $('#updateCollege');

  
        var studentdata = {

            ID: $ID.val(),
            Name:$Name.val(),
            Age:$Age.val(),
            College:$College.val()

        };
    updateName(studentdata)

  });



});
 



function addStudents(studentdata)
{
    let $students = $('#students');

    var student = studentdata;
    
            $.ajax({
    
                contentType: 'application/json; charset=UTF-8',
                url: 'http://localhost:8080/WebServiceAssignment/webresources/student/insert',
                type: 'POST',
                dataType: 'json',
                data : JSON.stringify(student),
                success : function(){
    

                 $students.append('<li>student: ID:'+student.ID+',  Name :'+student.Name+',  Age : '+student.age+',  College :'+student.College+'</li>')
                alert('Student Added')
    
    
    
                },
                error: function(){
                    alert("Error Creating Student")
                }
    
            });

}


function getstudentDetails()
{


        let $students = $('#studentDetails');
    
        $.ajax({
            type: 'get',
            url : 'http://localhost:8080/WebServiceAssignment/webresources/student/details',
            success: function(data){ 
                console.log(data);
                $.each(data.student,function(i, data1){

    
                $studentdetails.append('<li>student: ID:'+data1.ID+',  Name :'+data1.Name+',  Age : '+data1.age+',  College :'+data1.College+'</li>');
    
            });
        }, 
            error: function(){
                alert("Error Loading student Detail")
            }
        });

}


function deletestudent()
{
            var ID =  document.getElementById("deleteID").value;
    
            console.log(ID);
    
        $.ajax({
            type: 'DELETE',
            url : 'http://localhost:8080/WebServiceAssignment/webresources/student/delete/'+ID,
            success: alert('student '+ID+' deleted.')
          
        });

}

function getstudentDetail(id)
{

        var $students = $('#studentdetails');
       
            //var ID =  document.getElementById("getID").value;
            var ID = id;
            console.log(ID);
    
        $.ajax({
            type: 'get',
            url : 'http://localhost:8080/WebServiceAssignment/webresources/student/details/'+ID,
            success: function(data){
    
                $.each(data,function(i,student ){
    
                    $students.append('<li>student: ID:'+student.ID+',  Name :'+student.Name+',  Age : '+student.age+',  College :'+student.College+'</li>')
      
                });
            }, 
            error: function(){
                alert("Error Loading student Detail!!!")
            }
        
    });
    
    
}

function Name(studentdata)
{

    let $students = $('#updatestudent');
    var student = studentdata;
    var ID =  document.getElementById("updateID").value;

            $.ajax({
    
                contentType: 'application/json; charset=UTF-8',
                url: 'http://localhost:8080/WebServiceAssignment/webresources/student/update/'+ID,
                type: 'PUT',
                dataType: 'json',
                data : JSON.stringify(student),
                success : function(){
    

                 $students.append('<li>Updated student: ID :'+studentdata.ID+',  Name :'+studentdata.Name+', Age : '+studentdata.age+',  college:'+studentdata.College+'</li>')
                 alert('ID '+ID +' Updated!!!')
    
    
                },
                error: function(){
                    alert("Error Updating student Detail!!!")
                }
    
            });
}