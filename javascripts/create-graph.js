function createGraph(data) {
	var dates = ['x'];
	var ocfAvailable = ['OCF Available'];
	var scfAvailable = ['SCF Available'];

	var startPoint = 938;
	while (data[startPoint][7] != "2001") {
		startPoint += 2;
	}

	var endPoint = 954;
	while (data[endPoint][7] != "") {
		endPoint += 1;
	}

	for (var i = startPoint; i < endPoint; i++) {
		dates.push(parseInt(data[i][7]));
		ocfAvailable.push(parseFloat(data[i][11]));
		scfAvailable.push(parseFloat(data[i][12]));
	}

	var chart = c3.generate({
		bindto: '#chart',
		size: {
			height: 600,
		},
		data: {
			x: 'x',
	    	columns: [
	    		dates,
	    		ocfAvailable,
	    		scfAvailable
	    	]
	    },
	    legend: {
			position: 'right'
		},
	  	axis: {
	    	y: {
	        	label: {
	          		text: 'Percent Available',
	          		position: 'outer-middle'
	        	},
	     		tick: {
						format: function (d) { return d + "%"; }
				}
	    	}
		}
	});
}

function parseData(callback) {
	Papa.parse("../data/data.csv", {
		download: true,
		complete: function(results) {
			callback(results.data);
		}
	});
}

parseData(createGraph);