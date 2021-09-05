var jsonCircles = [
    { "x_axis": 100, "y_axis": 150},
    { "x_axis": 200, "y_axis": 200},
    { "x_axis": 50, "y_axis": 200},
    { "x_axis": 70, "y_axis": 40},
    { "x_axis": 220, "y_axis": 60}];

    //above is an Array of JSON objects
    var svgContainer = d3.select("body").append("svg")
                                       .attr("width", 300)
                                        .attr("height", 300);
    //calling d3 object (must be d3)

    var circles = svgContainer.selectAll("circle")
                             .data(jsonCircles) //place holder 
                             .enter() //reference
                              .append("circle") //3 circles
    
    //var circleAttributes = circles
                           .attr("cx", function (d) { return d.x_axis; })
                           .attr("cy", function (d) { return d.y_axis; })
                           .attr("r", 5)
                           .style("fill","red");
    