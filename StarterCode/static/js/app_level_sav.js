// Level 1: Automatic Table and Date Search

/*=============================================================================*/
/* Create a basic HTML web page. 
Using the UFO dataset provided in the form of an array of JavaScript objects, 
write code that appends a table to your web page and then adds new rows of 
data for each UFO sighting. 
Make sure you have a column for date/time, city, state, country, shape, and 
comment at the very least.*/
/*============================================================================*/

// Get a reference to the table body
// from data.js
//var tableData = data;

// YOUR CODE HERE!
// this well select the data to which we want to add the data 
// to (no data added yet)
var tbody = d3.select('tbody')
console.log (tbody)

// loop through 'data' and log each ufo observation oject
data.forEach( ufo => {

    //append one table row tr for each ufo 
    //observation object
     var row = tbody.append('tr')
        console.log (row)
    Object.entries(ufo).forEach(([key,value]) => {
        // append 1 cell per ufo observation value
        // (date, city, state, county, shape, duration, comments)
        var cell = row.append("td");
    
        // update each 's text with ufo observation values
        cell.text(value);
    })
}); 

// 2. get the text from id
// 2a. get text from input activity 5

var ufos = data
// 1. select id="datetime"
var inputField = d3.select("#datetime");
var clickbutton = d3.select("#filter-btn")
// Then Input fields trigger a change event when new text is entered.
// 2. get the text from id
clickbutton.on("click",function() {
    var inputField = d3.select("#datetime")
    console.log(inputField.property("value"));
} )


inputField.on("change", function() {
    // clear the text and update new text
    //var allnewtext = d3.select("#ufo-table")
    //    console.log(allnewText);
        
    var newText = d3.event.target.value;
    // console.log(newText);
    if(newText ==="") {
        var filterreadin = ufos;
    }
    else {
        var filterreadin = ufos.filter(ufo=> ufo.datetime ===newText);
        tbody.html("")
    // test here

//        d3.select("tbody").html("");
         
        filterreadin.forEach( ufo => {
            //append one table row tr for each ufo 
            //observation object
             var row = tbody.append('tr')
                console.log (row)
            Object.entries(ufo).forEach(([key,value]) => {
                // use d3 to append 1 cell per ufo observation value
                // (date, city, state, county, shape, duration, comments)
                var cell = row.append("td");
            
                // use d3 to update each 's text with ufo observation values
                cell.text(value);
            })
        }); 
    }
});

// loop through the table
// for each row, check if input text is = to datetime in object
// refer to activity 9 day 2
// if yes: then append as new row
// if no: do nothing


// Create a custom filtering function


// if statement in javascript
// if (condition) {
//     //  block of code to be executed if the condition is true
//   }
/// end sample
// function inputField(sighting) {

    // before we can add to our table, we need to clear the table
    // check if datetime in dateinput is the same as newText
    // if (sighting.datetime == newText) {

        // if true, append to our table to display
        // console.log values that are equal to newText
        // console.log (sighting)
//     } 
// }  



//   fillter data for selected date

//   validate input date = data.js (datetime)
//   populate table 













