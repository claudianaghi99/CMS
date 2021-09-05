function addRow(){

    // get input values 
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var sex = document.getElementById('sex-list').value;
    var birthday = formatDate(document.getElementById('birthday').value);
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    // Required to complete the fields
    if (fname== "") {
        alert("First name must be filled out!");
        return false;
    }

    if (lname == "") {
        alert("Last name must be filled out!");
        return false;
    }

    if (email == "") {
        alert("Email must be filled out!");
        return false;
    }

    if (sex == "") {
        alert("Sex must be filled out!");
        return false;
    }

    if (birthday == "") {
        alert("Birthday must be filled out!");
        return false;
    } 

    var birthdate2 = new Date(document.getElementById('birthday').value)
    if(calculateAge(birthdate2) < 16){ 
        alert("The user can't be younger than 16 years old!");
        return false
    }
       

    if(regex.test(String(email).toLowerCase())) {
    }
    else{
        alert("Email not valid")
        return false;
    }
    
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
    var cel6 = newRow.insertCell(5);

    // add values to the cells
    cel1.innerHTML = fname;
    cel2.innerHTML = lname;
    cel3.innerHTML = email;
    cel4.innerHTML = sex;
    cel5.innerHTML = birthday;
    cel6.innerHTML = '<input type="button" name="delete" value="Delete" onclick="delStudent(this);" class="btn btn-danger">';
}

function delStudent(Stud) {
    var s=Stud.parentNode.parentNode;
    s.parentNode.removeChild(s);
}
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'Octomber',
    'November',
    'December',
]
function formatDate(user_date){

    var formatter = user_date.split('-')
    var year = formatter[0]
    var monthIndex = Number(formatter[1])
    var month = months[monthIndex-1]
    var day = formatter[2]

    return `${day} ${month} ${year}`
}

function calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
} 