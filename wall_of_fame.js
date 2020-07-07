// function generate_table() {
//   // get the reference for the body
//   var body = document.getElementsByTagName("body")[0];

//   // creates a <table> element and a <tbody> element
//   var tbl = document.createElement("table");
//   var tblBody = document.createElement("tbody");

//   // creating all cells
//   for (var i = 0; i < 2; i++) {
//     // creates a table row
//     var row = document.createElement("tr");

//     for (var j = 0; j < 2; j++) {
//       // Create a <td> element and a text node, make the text
//       // node the contents of the <td>, and put the <td> at
//       // the end of the table row
//       var cell = document.createElement("td");
//       var cellText = document.createTextNode(name);
//       cell.appendChild(cellText);
//       row.appendChild(cell);
//     }

//     // add the row to the end of the table body
//     tblBody.appendChild(row);
//   }

//   // put the <tbody> in the <table>
//   tbl.appendChild(tblBody);
//   // appends <table> into <body>
//   body.appendChild(tbl);
//   // sets the border attribute of tbl to 2;
//   tbl.setAttribute("border", "2");
//   tbl.setAttribute("align", "center");
//   tbl.setAttribute("margin-top", "400px");
// }

//   // if (startGame === true) {
//   // Array.prototype.push.apply(player, name);
//   // }


// document.addEventListener('DOMContentLoaded', () => {
//   var elements = []
//   var container = document.querySelector('#container')
//   // Add each row to the array
//   container.querySelectorAll('.row').forEach(el => elements.push(el))
//   // Clear the container
//   container.innerHTML = ''
//   // Sort the array from highest to lowest
//   elements.sort((a, b) => b.querySelector('quiz.score').textContent - a.querySelector('quiz.score').textContent)
//   // Put the elements back into the container
//   elements.forEach(e => container.appendChild(e))
// });