// // create a function to generate markdown for HTML?
// function generateHTML(employees) {
//     var employeeList = {managerList, engineerList, internList};

// }

function generateHTML(employees) {
    var employeeList = { managerList, engineerList, internList };
    // make a for loop through employee
    // for () {
    //     employees.push(employeeList);
    // }

        // Info list for each employee 
        var managerList = ` <div class="panel panel-default">
<div class="panel-heading">Manager</div>
<div class="panel-body">${employees.managername}</div>
<div class="panel-body">${employees.employeeID}</div>
<div class="panel-body">${employees.email}</div>
<div class="panel-body">${employees.officenumber}</div>
</div>`
        var engineerList = ` <div class="panel panel-default">
<div class="panel-heading">Engineer</div>
<div class="panel-body">${employees.name}</div>
<div class="panel-body">${employees.employeeID}</div>
<div class="panel-body">${employees.email}</div>
<div class="panel-body">${employees.github}</div>
</div>`
        var internList = ` <div class="panel panel-default">
<div class="panel-heading">Engineer</div>
<div class="panel-body">${employees.name}</div>
<div class="panel-body">${employees.employeeID}</div>
<div class="panel-body">${employees.email}</div>
<div class="panel-body">${employees.school}</div>
</div>`

        return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">

  <!-- jQuery library -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

  <!-- Latest compiled JavaScript -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  <title>HTML</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <div class="hero-image">
    <div class="hero-text">
      <h1>My Team</h1>
      <p>Meet our team! Feel free to contact us using the information below.</p>
    </div>
  </div>
  <br>
  <div class="container">
    <h2>Panels with Contextual Classes</h2>
    <div class="panel-group">
    ${employeeList}
    </div>
</body>

</html>`


 module.exports = generateHTML;