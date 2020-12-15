// Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("js/samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })}
  
init();

function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
  }


function buildMetadata(sample) {
    d3.json("js/samples.json").then((data) => {
      var metadata = data.metadata;
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      var PANEL = d3.select("#sample-metadata");
  
      PANEL.html("");
      Object.entries(result).forEach(([key, value]) => {
        PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
      });
    });
  }

// 1. Create the buildCharts function.
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("js/samples.json").then((data) => {
    // 3. Create a variable that holds the samples array. 
    var samplesData = data.samples; 
    // 4. Create a variable that filters the samples for the object with the desired sample number.
    var filteredArray = samplesData.filter(i => i.id == sample); 
    //  5. Create a variable that holds the first sample in the array.
    var result = filteredArray[0];

    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otu_idsArray = result.otu_ids;
    var otu_labelsArray = result.otu_labels;
    var sample_valuesArray = result.sample_values;

    // // 7. Create the yticks for the bar chart.
    // // Hint: Get the the top 10 otu_ids and map them in descending order  
    // //  so the otu_ids with the most bacteria are last. 
    var yticks = otu_idsArray.sort(function(a,b) {
      return b - a;
    });

    // var yticks = 

    // // 8. Create the trace for the bar chart. 
    // var barData = [
      
    // ];
    // // 9. Create the layout for the bar chart. 
    // var barLayout = {
     
    // };
    // // 10. Use Plotly to plot the data with the layout. 
    
  });
}
