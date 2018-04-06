//an array to hold employees
let employees = [];
let empDiv = $('#empList');

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

function buildList(employees) {
 $.each(employees, function(i, employee) {
    let div = document.createElement('div');
    $(div).addClass('employee');
    let img = document.createElement('img');
    img.src = employee.icon.large;
    $(img).addClass('icon');
    let detailDiv = document.createElement('div');
    $(detailDiv).addClass('details');
    let name = document.createElement('h3');
    $(name).addClass('name');
    name.textContent = `${employee.name.first} ${employee.name.last}`;
    let email = document.createElement('p');
    email.textContent = employee.email;
    let location = document.createElement('p');
    location.textContent = employee.location.city;
    div.appendChild(img);
    detailDiv.appendChild(name);
    detailDiv.appendChild(email);
    detailDiv.appendChild(location);
    div.appendChild(detailDiv);
    empDiv.append(div);
  });//end each
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
        );//end object
        //store the objects in an array
        employees.push(newEmp);        
      });

      buildList(employees);
      $('.employee').on('click', function (e) {
        let imgKey = $(this).find('img').attr('src');

        let clickedEmp = employees.find(x => x.icon.large === imgKey);

        console.log(clickedEmp.username);
      });
    }//end success function
  });



  //buildList(employees)

  $.each(employees, function(i, employee) {
    console.log(employees[i]);
    //empDiv.html(`<div>${$(this).name.first}</div>`);    
    // console.log(employee);
    //     let div = document.createElement('div');
    //     $(div).addClass('employee');
    //     let img = document.createElement('img');
    //     img.src = employee.picture.large;
    //     $(img).addClass('icon');
    //     let name = document.createElement('h3');
    //     $(name).addClass('name');
    //     name.textContent = `${employee.name.first} ${employee.name.last}`;
    //     div.appendChild(img)
    //       .appendChild(name);
    //     $(empDiv).append(div);
    //     console.log(div);
      });//end each

//load basic info





// };//end build list