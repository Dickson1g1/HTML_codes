//auto converts it to the correct data type when loaded. If you did not do this everything would become a string
//This first gets all the rows in the csv file. It then extracts each individual row of data and adds each cell in the row to a table row in the order the data appears.
d3.csv('Bookstore.csv', d3.autoType)
    //whatever is used here needs to be used for the remained of the program. roster
  .then(bookstore => {
    console.log(bookstore);
    //There is a table column named firstname
    const filteredData = bookstore.filter(row => row.Title !== null);
    //If you look at the html file you will see a div with a container class
    //This is one of the ways we use javascript
    const table = d3.select("#container")
        //you should be able to see the table on the screen if you right click and inspect the page or use page source
      .append("table")
      //to show you how append works here is a quick example of text 
      .text("Hey Everyone this is D3 adding text to the screen");

    const rows = table
      .selectAll(".row")
      .data(filteredData)
      // .data(roster)
      //html version of a row
      //all of this data needs to be a row specifically the html element tr
      .join("tr")
      //we are giving everything in the class row 
      .attr("class", "row");
      // .attr("", d => console.log(d))

    const cells = rows
      // .attr("", d => console.log(d)) // { firstname: xxx, lastname: xxx}
      // .attr("", d => console.log(Object.values(d)))
      .selectAll(".cell")
      //we need this mapping because each row contains two parts first and last name and to add data to a html table we use td
      .data(row => Object.values(row)) // ['xxx', 'xxx']
      .join("td")
      .text(cell => cell);
  });