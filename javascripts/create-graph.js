/*
 * Parse the data and create a graph with the data.
 */
function parseData(createGraph) {
	Papa.parse("../data/spanish-silver.csv", {
		download: true,
		complete: function(results) {
			createGraph(results.data);
		}
	});
}

function createGraph(data) {
	var years = [];
	var silverMinted = ["Silver Minted"];

	for (var i = 1; i < data.length; i++) {
		years.push(data[i][0]);
		silverMinted.push(data[i][2]);
	}

	console.log(years);
	console.log(silverMinted);

	var chart = c3.generate({
		bindto: '#chart',
	    data: {
	        columns: [
	        	silverMinted
	        ]
	    },
	    axis: {
	        x: {
	            type: 'category',
	            categories: years,
	            tick: {
	            	multiline: false,
                	culling: {
                    	max: 15
                	}
            	}
	        }
	    },
	    zoom: {
        	enabled: true
    	},
	    legend: {
	        position: 'right'
	    }
	});
}

parseData(createGraph);