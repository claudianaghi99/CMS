function addRow(){

    // get input values 
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var sex = document.getElementById('sex-list').value;
    var age = document.getElementById('age').value;

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
    cel5.innerHTML = age;

}