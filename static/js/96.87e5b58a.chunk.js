(this["webpackJsonppurple-react-free"]=this["webpackJsonppurple-react-free"]||[]).push([[96],{654:function(a,e,t){"use strict";t.r(e),t.d(e,"ChartJs",(function(){return o}));var r=t(15),c=t(16),s=t(18),l=t(17),n=t(0),i=t.n(n),d=t(203),o=function(a){Object(s.a)(t,a);var e=Object(l.a)(t);function t(){var a;Object(r.a)(this,t);for(var c=arguments.length,s=new Array(c),l=0;l<c;l++)s[l]=arguments[l];return(a=e.call.apply(e,[this].concat(s))).data={labels:["2013","2014","2014","2015","2016","2017"],datasets:[{label:"# of Votes",data:[10,19,3,5,2,3],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1,fill:!1}]},a.options={scales:{yAxes:[{ticks:{beginAtZero:!0}}]},legend:{display:!1},elements:{point:{radius:0}}},a.areaData={labels:["2013","2014","2015","2016","2017"],datasets:[{label:"# of Votes",data:[12,19,3,5,2,3],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1,fill:!0}]},a.areaOptions={plugins:{filler:{propagate:!0}}},a.doughnutPieData={datasets:[{data:[30,40,30],backgroundColor:["rgba(255, 99, 132, 0.5)","rgba(54, 162, 235, 0.5)","rgba(255, 206, 86, 0.5)","rgba(75, 192, 192, 0.5)","rgba(153, 102, 255, 0.5)","rgba(255, 159, 64, 0.5)"],borderColor:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"]}],labels:["Pink","Blue","Yellow"]},a.doughnutPieOptions={responsive:!0,animation:{animateScale:!0,animateRotate:!0}},a.scatterChartData={datasets:[{label:"First Dataset",data:[{x:-10,y:0},{x:0,y:3},{x:-25,y:5},{x:40,y:5}],backgroundColor:["rgba(255, 99, 132, 0.2)"],borderColor:["rgba(255,99,132,1)"],borderWidth:1},{label:"Second Dataset",data:[{x:10,y:5},{x:20,y:-30},{x:-25,y:15},{x:-10,y:5}],backgroundColor:["rgba(54, 162, 235, 0.2)"],borderColor:["rgba(54, 162, 235, 1)"],borderWidth:1}]},a.scatterChartOptions={scales:{xAxes:[{type:"linear",position:"bottom"}]}},a}return Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"page-header"},i.a.createElement("h3",{className:"page-title"},"Chart-js"),i.a.createElement("nav",{"aria-label":"breadcrumb"},i.a.createElement("ol",{className:"breadcrumb"},i.a.createElement("li",{className:"breadcrumb-item"},i.a.createElement("a",{href:"!#",onClick:function(a){return a.preventDefault()}},"Charts")),i.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Chart-js")))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-6 grid-margin stretch-card"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},"Line Chart"),i.a.createElement(d.Line,{data:this.data,options:this.options})))),i.a.createElement("div",{className:"col-md-6 grid-margin stretch-card"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},"Bar Chart"),i.a.createElement(d.Bar,{data:this.data,options:this.options}))))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-6 grid-margin stretch-card"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},"Area Chart"),i.a.createElement(d.Line,{data:this.areaData,options:this.areaOptions})))),i.a.createElement("div",{className:"col-md-6 grid-margin stretch-card"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},"Doughnut Chart"),i.a.createElement(d.Doughnut,{data:this.doughnutPieData,options:this.doughnutPieOptions}))))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-6 grid-margin stretch-card"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},"Pie Chart"),i.a.createElement(d.Pie,{data:this.doughnutPieData,options:this.doughnutPieOptions})))),i.a.createElement("div",{className:"col-md-6 grid-margin stretch-card"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},"Scatter Chart"),i.a.createElement(d.Scatter,{data:this.scatterChartData,options:this.scatterChartOptions}))))))}}]),t}(n.Component);e.default=o}}]);
//# sourceMappingURL=96.87e5b58a.chunk.js.map