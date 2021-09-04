function addRow(){

    // get input values 
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var sex = document.getElementById('sex-list').value;
    var birthday = document.getElementById('birthday').value;


    // // Required to complete the fields

    // get the html table 
    // 0 = the first table
    var table=document.getElementsByTagName('table')[0];

    // add new empty row to the table
    // 0 = top 
    // table.rows.length = end
    var newRow = table.insertRow(table.rows.length);

    
    // add cells to the row
    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);
    var cel4 = newRow.insertCell(3);
    var cel5 = newRow.insertCell(4);

    // add values to the cells
    cel1.innerHTML = fname;
    cel2.innerHTML = lname;
    cel3.innerHTML = email;
    cel4.innerHTML = sex;
    cel5.innerHTML = birthday;

}

function validateForm(){
    let fname_required = document.forms["myForm"]["fname"].value;
    if (fname_required == "") {
       alert("First name must be filled out");
       return false;
   }
  
   let lname_required = document.forms["myForm"]["lname"].value;
   if (lname_required == "") {
      alert("Last name must be filled out");
      return false;
   }

  let email_required = document.forms["myForm"]["email"].value;
  if (email_required == "") {
     alert("E-mail name must be filled out");
     return false;
   }

   let sex_required = document.forms["myForm"]["sex-list"].value;
   if (sex_required == "") {
      alert("Sex must be chosen");
      return false;
   }

   let birthday_required = document.forms["myForm"]["birthday"].value;
   if (birthday_required == "") {
      alert("Birthday must be filled out");
      return false;
  }
   
}