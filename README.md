# UFOs
## Overview of Project: 
This overview goes in-depth analysing UFO sightings by allowing users to filter for multiple criteria at the same time. I used app.js and index.html to build users input to go through the table of UFO sightings. 


## Deliverable 1 Instructions
I have used the HTML file, [index.html](https://github.com/JaredTMurray/UFOs/blob/main/index.html) and linked it to the Javascript file, [app.js](https://github.com/JaredTMurray/UFOs/blob/main/js/app.js). In addition to the date filter I created in this module, I added filters for the city, state, country, and shape. I modified the search through the table in my index.html file. This created more table filters. The app.js file function updateFilters(), saves the ids of the filter in the variable filterId and applied it through the rows of the table and also cleared the values in the variable filters. The function then calls filterTable() function to put in the values in the html table. 

The function filterTable() is used to filter through the data and set the variable filters to the tabledata variable, which was declared as a const = data; This data then calls the Javascript file [data.js](https://github.com/JaredTMurray/UFOs/blob/main/js/data.js), which is an array with all the values for the table in index.html. 
I then used a for loop which increments I to go through all the filters and match the values and set it to build the table. Note: the event listener for change for each filter is declared as d3.selectAll("input").on("change", udpdateFilters);

## Results: 
When users come to this site they will go through the search filters. If a user inputs a date, city, state, country or shape, in any of the five filters, then, the table will automatically adjust. See image below 

![](https://github.com/JaredTMurray/UFOs/blob/main/images/image1.png)

The results will be seen in the table. 

![](https://github.com/JaredTMurray/UFOs/blob/main/images/image2.png)

## Summary: 
In a summary statement, describe one drawback of this new design and two recommendations for further development.
