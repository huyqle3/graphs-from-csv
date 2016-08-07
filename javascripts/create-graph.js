function createGraph(data) {
	
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