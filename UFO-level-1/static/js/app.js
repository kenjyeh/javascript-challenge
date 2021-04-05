// from data.js
var tableData = data;

// YOUR CODE HERE!
// add to tbody
var tbody = d3.select("tbody");

// add function to append data to table
function populateTable() {
    tableData.map(data => {

        // append new row to table
        var row = tbody.append("tr");
    
        // Append to each column of data
        row.append("td").text(data.datetime);
        row.append("td").text(data.city);
        row.append("td").text(data.state);
        row.append("td").text(data.country);
        row.append("td").text(data.shape);
        row.append("td").text(data.durationMinutes);
        row.append("td").text(data.comments);
    });
}

// call on function
populateTable();

// filter table button
var button1 = d3.select("#filter-btn");

// define click
button1.on("click", function() {

    // take in user input
    var userInput = d3.select("#datetime").property("value");

    console.log(userInput);
    
    // filter through userInput
    var filteredData = tableData.filter(data => data.datetime === userInput);
    console.log(filteredData);

    // clear original table
    tbody.html("");

    // generate new table for each record that fits userInput
    filteredData.forEach(obj => {
        
        // new row
        var row = tbody.append("tr");

        // Append new data 
        row.append("td").text(obj.datetime);
        row.append("td").text(obj.city);
        row.append("td").text(obj.state);
        row.append("td").text(obj.country);
        row.append("td").text(obj.shape);
        row.append("td").text(obj.durationMinutes);
        row.append("td").text(obj.comments);
    });
});

