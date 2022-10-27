// // create a function to generate markdown for HTML?
// function generateHTML(employees) {
//     var employeeList = {managerList, engineerList, internList};

// }

function generateHTML(data) {
    var employeeList = { managerList, engineerList, internList};
};

        // Info list for each employee 
       { var managerList = ` <div class="panel panel-default">
<div class="panel-heading">Manager</div>
<div class="panel-body">${data.managerName}</div>
<div class="panel-body">${data.managerEmployeeID}</div>
<div class="panel-body">${data.email}</div>
<div class="panel-body">${data.officenumber}</div>
</div>`
        var engineerList = ` <div class="panel panel-default">
<div class="panel-heading">Engineer</div>
<div class="panel-body">${data.name}</div>
<div class="panel-body">${data.employeeID}</div>
<div class="panel-body">${data.email}</div>
<div class="panel-body">${data.github}</div>
</div>`
        var internList = ` <div class="panel panel-default">
<div class="panel-heading">Engineer</div>
<div class="panel-body">${data.name}</div>
<div class="panel-body">${data.employeeID}</div>
<div class="panel-body">${data.email}</div>
<div class="panel-body">${data.school}</div>
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
}

module.exports = generateHTML;