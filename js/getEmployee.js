//an array to hold employees
let employees = [];

//a class to store individual employees
function Employee (icon, name, username, cell, email, location, dob) {
  this.icon = icon;
  this.name = name;
  this.username = username;
  this.cell = cell;
  this.email = email;
  this.location = location;
  this.dob = dob;
}

//retreive all employees
$.ajax({
    url: 'https://randomuser.me/api/?results=12',
    dataType: 'json',
    success: function(data) {
      //make each into an object
      $.each(data.results, function(i, employee) {
        let newEmp = new Employee(
          employee.picture,
          employee.name,
          employee.login.username,
          employee.cell,
          employee.email,
          employee.location,
          employee.dob
        );
        //store the objects in an array
        employees.push(newEmp);

      });
    }
  });

function buildList(employees) {
  console.log(employees);
  for (let i = 0; i < employees.length; i++){
    console.log(employees[i]);
  }

  //   $.each($employees, function(i, employee) {
//     console.log(employee);
//     // let div = document.createElement('div');
//     // $(div).addClass('employee');
//     // let img = document.createElement('img');
//     // img.src = employee.picture.large;
//     // let name = document.createElement('h3');
//     // $(name).addClass('name');
//     // name.textContent = `${employee.name.first} ${employee.name.last}`;
//     // div.appendChild(img)
//     //   .appendChild(name);
//   });//end each
}

  buildList(employees)

  

//load basic info





// };//end build list