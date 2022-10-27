//function to generate markdown for HTML
function generateHTML(employees) {
    var employeePanels = {managerPanel, engineerPanel, internPanel};

    // info list for each employee 
    var managerPanel = ` <div class="panel panel-default">
<div class="panel-heading">Manager</div>
<div class="panel-body">${employees.managerName}</div>
<div class="panel-body">${employees.managerEmployeeID}</div>
<div class="panel-body">${employees.managerEmail}</div>
<div class="panel-body">${employees.managerOfficeNum}</div>
</div>`
    var engineerPanel = ` <div class="panel panel-default">
<div class="panel-heading">Engineer</div>
<div class="panel-body">${employees.engineerName}</div>
<div class="panel-body">${employees.engineerID}</div>
<div class="panel-body">${employees.engineerEmail}</div>
<div class="panel-body">${employees.engineerGithub}</div>
</div>`
    var internPanel = ` <div class="panel panel-default">
<div class="panel-heading">Engineer</div>
<div class="panel-body">${employees.internName}</div>
<div class="panel-body">${employees.internID}</div>
<div class="panel-body">${employees.email}</div>
<div class="panel-body">${employees.internSchool}</div>
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
      <p>Meet our team! Feel free to contact us using the information below..</p>
    </div>
  </div>
  <br>
  <div class="container">
    <h2>Panels for Employees</h2>
    <div class="panel-group">
    ${employeePanels}
    </div>
</body>

</html>`
}

module.exports = generateHTML;