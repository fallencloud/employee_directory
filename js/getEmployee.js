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

        showModal(clickedEmp);
      });
    }//end success function
  });

function showModal(clickedEmp) {
  let div = document.createElement('div');
  $(div).addClass('modal');

  let infoDiv = document.createElement('div');
  $(infoDiv).addClass('emp-info');
  let img = document.createElement('img');
  $(img).addClass('modal-icon');
  img.src = clickedEmp.icon.large;
  let h3 = document.createElement('h3');
  h3.textContent = `${clickedEmp.name.first} ${clickedEmp.name.last}`;
  let p = document.createElement('p');
  p.textContent = clickedEmp.email;
  let location = document.createElement('p');
  $(location).addClass('location');
  location.textContent = clickedEmp.location.city;
  
  let contactDiv = document.createElement('div');
  $(contactDiv).addClass('contact-info');
  let phone = document.createElement('p');
  phone.textContent = clickedEmp.cell;
  let address = document.createElement('p');
  $(address).addClass('location');
  address.textContent = `${clickedEmp.location.street}, ${clickedEmp.location.city}, ${clickedEmp.location.state}, ${clickedEmp.location.postcode}`;
  let dob = document.createElement('p');
  let dobDate = clickedEmp.dob.slice(0, 11);
  let dobMonth = dobDate.slice(5, 7);
  let dobYear = dobDate.slice(0, 4);
  let dobDay = dobDate.slice(8, 10);
  dob.textContent = `Birthday: ${dobMonth}/${dobDay}/${dobYear}`;

  $(img).appendTo(infoDiv);
  $(h3).appendTo(infoDiv);
  $(p).appendTo(infoDiv);
  $(location).appendTo(infoDiv);
  $(infoDiv).appendTo(div);

  $(phone).appendTo(contactDiv);
  $(contactDiv).appendTo(infoDiv);
  $(address).appendTo(contactDiv);
  $(dob).appendTo(contactDiv);
  $(div).appendTo('body');

  $('.modal').on('click', function() {
    $(this).hide();
  })
}//end class show modal