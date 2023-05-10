import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import "../styles.css";

export default function D3View2 () {
    const ref = useRef();
    function Circle({ data, radiusScale }) {
        return data.map((circle, index) => (
          <circle
            key={index}
            className="bubble"
            fill={`hsla(${circle.count},100%,70%,0.15)`}
            stroke-width="1px"
            stroke={`hsla(${circle.count},100%,70%,0.8)`}
            r={radiusScale(circle.count)}
            cx={circle.x}
            cy={circle.y}
            onMouseMove={(e) => {
              d3.select(".bubbleChartTooltip")
                .style("visibility", "visible")
                .text(`${circle.name} (${circle.count})`)
                .attr("x", e.nativeEvent.offsetX + 10 + "px")
                .attr("y", e.nativeEvent.offsetY - 10 + "px");
            }}
            onMouseOut={() => {
              d3.select(".bubbleChartTooltip").style("visibility", "hidden");
            }}
          />
        ));
      }
      
      function BubbleChart({ bubbleChartData }) {
        const [radiusScale, setRadiusScale] = useState(() => d3.scaleSqrt());
        const svgRef = useRef();
      
        useEffect(() => {
          const maxRadius = d3.max(bubbleChartData, (d) => d.count);
          const minRadius = d3.min(bubbleChartData, (d) => d.count);
          setRadiusScale(radiusScale.domain([minRadius, maxRadius]).range([5, 40]));
        }, [bubbleChartData]);
      
        useEffect(() => {
          const svg = d3.select(ref.current)
        //   const svg = d3.select(svgRef.current);
          //const { width, height } = svgRef.current.getBoundingClientRect();
          const width = 300, height = 300;
          const margins = { top: 20, right: 50, bottom: 20, left: 50 };
          const tooltip = svg.append("text").attr("fill", "#fff").attr("fontSize", "14").attr("class", "bubbleChartTooltip").style("visibility", "hidden").text("tooltip");
      
          function ticked() {
            svg.select(".bubbleChartGroup")
              .selectAll("circle")
              .data(bubbleChartData)
              .join("circle")
              .attr("class", "bubble")
              .attr("fill", (circle) => `hsla(${circle.count},100%,70%,0.15)`)
              .attr("stroke-width", "1px")
              .attr("stroke", (circle) => `hsla(${circle.count},100%,70%,0.8)`)
              .attr("r", (circle) => radiusScale(circle.count))
              .attr("cx", (circle) => circle.x)
              .attr("cy", (circle) => circle.y)
              .on("mousemove", (e, circle) => {
                tooltip.style("visibility", "visible")
                  .text(`${circle.name} (${circle.count})`)
                  .attr("x", e.nativeEvent.offsetX + 10 + "px")
                  .attr("y", e.nativeEvent.offsetY - 10 + "px");
              })
              .on("mouseout", () => {
                tooltip.style("visibility", "hidden");
              });
          }
      
          const simulation = d3.forceSimulation(bubbleChartData)
            .force("xTowardsTheCenter", d3.forceX(0).strength(0.01))
            .force("yTowardsTheCenter", d3.forceY(100).strength(0.01))
            .force("collide", d3.forceCollide((d) => radiusScale(d.count)))
            .on("tick", ticked);
      
          return () => {
            simulation.stop();
            tooltip.remove();
          };
        }, [bubbleChartData]);

    };


    const bubbleChartData = [{
        "name": "Orland",
        "count": 18
    }, {
        "name": "Keely",
        "count": 363
    }, {
        "name": "Melita",
        "count": 305
    }, {
        "name": "Morry",
        "count": 140
    }, {
        "name": "Joyous",
        "count": 481
    }, {
        "name": "Emery",
        "count": 14
    }, {
        "name": "Libbi",
        "count": 424
    }, {
        "name": "Lauralee",
        "count": 385
    }, {
        "name": "Noll",
        "count": 426
    }, {
        "name": "Paulette",
        "count": 184
    }, {
        "name": "Alfredo",
        "count": 233
    }, {
        "name": "Todd",
        "count": 66
    }, {
        "name": "Homer",
        "count": 335
    }, {
        "name": "Hana",
        "count": 343
    }, {
        "name": "Gaile",
        "count": 208
    }, {
        "name": "Rhetta",
        "count": 174
    }, {
        "name": "Claudine",
        "count": 125
    }, {
        "name": "Bonita",
        "count": 138
    }, {
        "name": "Anstice",
        "count": 367
    }, {
        "name": "Ginger",
        "count": 313
    }]

    return (
        <BubbleChart bubbleChartData={bubbleChartData}/>
        // <div ref={ref}></div>
    );

};









// export default function D3View2 ({ data }) {
//   const ref = useRef();
//   useEffect(() => {




//     const margin = { top: 20, right: 20, bottom: 30, left: 40 };
//     const width = 360 - margin.left - margin.right;
//     const height = 300 - margin.top - margin.bottom;
//     const x = d3.scaleBand()
//       .range([0, width])
//       .padding(0.1);
//     const y = d3.scaleLinear()
//       .range([height, 0]);
//     const svg = d3.select(ref.current)
//       .append('svg')
//       .attr('width', width + margin.left + margin.right)
//       .attr('height', height + margin.top + margin.bottom)
//       .append('g')
//       .attr('transform', `translate(${margin.left},${margin.top})`);
//     x.domain(data.map(d => d.label));
//     y.domain([0, d3.max(data, d => d.value)]);
//     svg.selectAll('.bar')
//       .data(data)
//       .enter().append('rect')
//       .attr('class', 'bar')
//       .attr('x', d => x(d.label))
//       .attr('y', d => y(d.value))
//       .attr('width', x.bandwidth())
//       .attr('height', d => height - y(d.value));
//     svg.append('g')
//       .attr('transform', `translate(0,${height})`)
//       .call(d3.axisBottom(x));
//     svg.append('g')
//       .call(d3.axisLeft(y));

//   }, [data]);

//   return (
//     <div ref={ref}></div>
//   );
// };