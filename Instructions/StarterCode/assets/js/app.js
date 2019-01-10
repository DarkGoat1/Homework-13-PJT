// @TODO: YOUR CODE HERE!
        var w = 600;
		var h = 400;
		var padding = 40;
		
		
        
    

    d3.csv("data.csv").then(function(data) {
		dataset = [];
		states = [];
        console.log(data[0])
        for (i = 0; i < data.length; i++) {
                console.log(data[i].poverty, data[i].healthcare);
				dataset.push([parseFloat(data[i].poverty, 1), parseFloat(data[i].healthcare, 1),data[i].abbr])
				//states.push(data[i].abbr)
				}
				
		console.log(dataset);
		console.log(states);

		var xScale = d3.scaleLinear()
			//.domain(["Alabama","Alaska","Arizona","Arkansas","California"])
			.domain([5, d3.max(dataset, function(d) { return d[0]; })])
			//.range([padding, w-padding * 2]);
			.range([padding, w - padding]);
			// .range([h - padding, padding]);
			
		var yScale = d3.scaleLinear()
			.domain([0, d3.max(dataset, function(d) { return d[1]; })])
			//.range([padding, w-padding * 2]);
			.range([padding, h - padding]);
			// .range([padding, w - padding * 2]);
		
		console.log(xScale(dataset[0][0]));
		console.log(yScale(dataset[0][1]));

		var yScale2 = d3.scaleLinear()
		.domain([0, d3.max(dataset, function(d) { return d[1]; })])
		//.range([padding, w-padding * 2]);
		.range([h - padding, padding]);

		var xAxis = d3.axisBottom().scale(xScale).ticks(5);
		
		var yAxis = d3.axisLeft().scale(yScale2).ticks(5);
		
		//create svg element
		var svg = d3.select("body")
					.append("svg")
					.attr("width", w)
					.attr("height", h);
					
		svg.selectAll("circle")
			.data(dataset)
			.enter()
			.append("circle")
			.attr("cx", function(d) {
				return xScale(d[0]);
			})
			.attr("cy", function(d) {
				return h - yScale(d[1]);
			})
			.attr("r", 8)
			.attr("fill", "cyan")
		
		console.log(data[0].abbr);

		svg.selectAll("text")
		.data(dataset)
		.enter()
		.append("text")
		.attr("x", function(d) {
			return xScale(d[0]);
		})
		.attr("y", function(d) {
			return h - yScale(d[1]);
		})
		.text(function(d) {
			
			return d[2];
		})
		.attr("text-anchor", "middle")
		.style("fill", "black")
		.attr("font-size", "6px");

		svg.append("text")             
      	.attr("transform",
            "translate(" + (w/2) + " ," + 
                           (h-5) + ")")
      	.style("text-anchor", "middle")
		.text("% in Poverty")
		  
		svg.append("text")
      	.attr("transform", "rotate(-90)")
      	.attr("y", 0 - padding.left)
      	.attr("x",0 - (h / 2))
      	.attr("dy", "1em")
      	.style("text-anchor", "middle")
      	.text("% without Health Insurance");      

		// .data(data)
		// .enter()
		// .append("text")
		// .text(function(d) {
		// 	for (i = 0; i < data.length; i++) {
		// 		console.log(d[i].abbr);
		// 		return d[i].abbr;
		// 	} 
		// });
		

			
		//x axis
		svg.append("g")
			.attr("class", "x axis")	
			.attr("transform", "translate(0," + (h - padding) + ")")
			.call(xAxis);
		
		//y axis
		svg.append("g")
			.attr("class", "y axis")	
			.attr("transform", "translate(" + padding + ", 0)")
			.call(yAxis);



        });
            // for (i = 0; i < data.length; i++) {
            // console.log(i.poverty, i.healthcare);
            // }
            
			
            // };
      
      

        

		// console.log(dataset);
			
		//var dataset = data.slice(0, numBars + 1);
		//max vs min
		// var dataset = [];
		// dataset.push([46, 32]);
		// dataset.push([47, 31]);
		// dataset.push([51, 41]);
		// dataset.push([52, 38]);
		// dataset.push([38, 29]);
		
		
		// var dataset = [];
		// dataset.push([46, 32]);
		// dataset.push([47, 31]);
		// dataset.push([51, 41]);
		// dataset.push([52, 38]);
		// dataset.push([38, 29]);
		
		// /*
		// dataset = [{max: 46, min: 32},
		// 			{max: 47, min: 31},
		// 			{max: 51, min: 41},
		// 			{max: 52, min: 38},
		// 			{max: 38, min: 29}];
		// 			*/
		
        // //scale function

        // console.log(dataset);
        // console.log(dataset2);
        
        // console.log(dataset[0]);
        //console.log(dataset2[0]);

		
			