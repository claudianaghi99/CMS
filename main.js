function addRow(){

    // get input values 
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var sex = document.getElementById('sex-list').value;
    var birthday = document.getElementById('birthday').value;
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    // Required to complete the following fields
    if (fname== "") {
        validate('fname','You must fill this out.');
        return false;
    }

    if (lname == "") {
        validate('lname','You must fill this out.');
        return false;
    }

    if (email == "") {
        validate('email','You must fill this out.');
        return false;
    }

    if (sex == "") {
        validate('sex-list','You must choose an option.');
        return false;
    }

    if (birthday == "") {
        validate('birthday','You must choose a date.');
        return false;
    } 

    var birthdate = new Date(document.getElementById('birthday').value)
    if(calculateAge(birthdate) < 16){ 
        validate_age('birthday');
        return false;
    }
       
    if(regex.test(String(email).toLowerCase())) {
    }
    else{
        validate('email','Invalid e-mail address.');
        return false;
    }
    
    // get the html table 
    var table=document.getElementsByTagName('table')[0];

    // add new empty row to the table
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
    cel5.innerHTML = formatDate(birthday);
    cel6.innerHTML = '<input type="button" name="delete" value="Delete" onclick="deleteRow(this);" class="btn btn-danger">';
}

function deleteRow(employee) {
    var e=employee.parentNode.parentNode;
    e.parentNode.removeChild(e);
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

function calculateAge(birthday) { 
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); 
    return Math.abs(ageDate.getUTCFullYear() - 1970);
} 

function searchFunction(){
    const searchInput = document.getElementById("search");
    const rows = document.querySelectorAll('tbody tr');
   
    searchInput.addEventListener('keyup',function(event){
    const q = event.target.value.toLowerCase();
    rows.forEach((row) => {
        row.querySelector('td').textContent.toLowerCase().startsWith(q)
        ? (row.style.display = 'table-row')
        : (row.style.display = 'none');
    });
    });
}

function sortTable_alphabetically() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("table");
    switching = true;

    while (switching) {
      switching = false;
      rows = table.rows;

      for (i = 1; i < (rows.length - 1); i++) {
      
        shouldSwitch = false;

        x = rows[i].getElementsByTagName("td")[0];
        y = rows[i + 1].getElementsByTagName("td")[0];
   
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
}
     
function selectedOption() {
        var option=document.getElementById('sort-list');
        if(option.value == "alphabetically"){
            sortTable_alphabetically();
        }
}

  
function validate(inputID, string) {
    const input = document.getElementById(inputID);
    const validityState = input.validity;
  
    if (validityState.valueMissing) {
      input.setCustomValidity(string);
    } 
    input.reportValidity();
}

function validate_age(inputID) {
    const input = document.getElementById(inputID);
    input.setCustomValidity("You must be older than 16 years old.");
    input.reportValidity();
}
