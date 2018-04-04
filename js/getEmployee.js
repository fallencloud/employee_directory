function Employee (icon, name, username, cell, email, location, dob) {
  this.icon = icon;
  this.name = name;
  this.username = username;
  this.cell = cell;
  this.email = email;
  this.location = location;
  this.dob = dob;
}

let employees = [];

//retreive all results
$.ajax({
    url: 'https://randomuser.me/api/?results=12',
    dataType: 'json',
    success: function(data) {
      //make each into an object
      $.each(data.results, function(i, employee) {
        let newEmp = new Employee(
          employee.picture.thumbnail,
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
      console.log(employees);
    }
  });