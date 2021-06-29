const handleStationB = function (props,coordinates,map) {
    //  var props = e.features[0].properties;

    var info =
    "<h3>" +
    props.station +
    "<small>  "+
    props.line +
    // "</span><span><img id='operatorLogo' src='./img/" +
    // props.operator +
    // ".png'/></span><br>"+
    " ( "+props.operator +")</small></h3><small>"+
    props.county +
    " County, " +
    props.state +
    "</small></div>" 
    ;
    document.getElementById("stationName").innerHTML = info;
   // '#a50026',3,'#d73027',4,'#f46d43',5,'#fdae61',6,'#74add1',7,'#4575b4',8,'#313695',11,'#ccc'
   
    if (props.AS_SCORE <= 2.99) {
        var color = 'background:#a50026';
      } else if (props.AS_SCORE <= 3.99){
        var color = 'background:#d73027';
    } else if (props.AS_SCORE <= 4.99){
        var color = 'background:#f46d43';
    } else if (props.AS_SCORE <= 5.99){
        var color = 'background:#fdae61';
    } else if (props.AS_SCORE <= 6.99){
        var color = 'background:#74add1';
    } else if (props.AS_SCORE <= 7.99){
        var color = 'background:#4575b4';
    } else {
        var color = 'background:#313695';
      }

    var accessScore = "<div class='odemeter' style="+ color +">"+ props.AS_SCORE+ "</div>"
    // "<div id='accessScore' class='scoreSelection' value='accessScore'>Access Score</div>"
    document.getElementById("as-score").innerHTML = accessScore;

    if (props.BS_SCORE <= 2.99) {
        var color = 'background:#a50026';
      } else if (props.BS_SCORE <= 3.99){
        var color = 'background:#d73027';
    } else if (props.BS_SCORE <= 4.99){
        var color = 'background:#f46d43';
    } else if (props.BS_SCORE <= 5.99){
        var color = 'background:#fdae61';
    } else if (props.BSCORE <= 6.99){
        var color = 'background:#74add1';
    } else if (props.BS_SCORE <= 7.99){
        var color = 'background:#4575b4';
    } else {
        var color = 'background:#313695';
      }

    var bikeScore = "<div class='odemeter' style="+ color +">"+ props.BS_SCORE+ "</div>"
    // "<div class='scoreSelection' value='bikeScore'>Cycle Score</div>"
    document.getElementById("bs-score").innerHTML = bikeScore;

    if (props.WS_SCORE <= 2.99) {
        var color = 'background:#a50026';
      } else if (props.WS_SCORE <= 3.99){
        var color = 'background:#d73027';
    } else if (props.WS_SCORE <= 4.99){
        var color = 'background:#f46d43';
    } else if (props.WS_SCORE <= 5.99){
        var color = 'background:#fdae61';
    } else if (props.WS_SCORE <= 6.99){
        var color = 'background:#74add1';
    } else if (props.WS_SCORE <= 7.99){
        var color = 'background:#4575b4';
    } else {
        var color = 'background:#313695';
      }

    var walkScore = "<div class='odemeter' style="+ color +">"+ props.WS_SCORE+ "</div>"
    // "<div class='scoreSelection' value='walkScore'>Pedestrian Score</div>"
    document.getElementById("ws-score").innerHTML = walkScore;

    var content = "<div class='data-row'><span class='data-info'>Civic and Cultural Attractors </span><span class='data-value'> " +
    props.civ_sm_a +
    "</span></div>" +
    "<br><div class='data-row'><span class='data-info'>Employees (Nets 2015) within 1-mile of the station  </span><span class='data-value'> " +
    numeral(props.emp_sm_a).format("(0,0)") +
    "</span></div>"+ 
    "<br><div class='data-row'><span class='data-info'>Essential Services (ETA) </span><span class='data-value'> " +
    props.ess_sm_a +
    "</span></div>" +
    "<br><div class='data-row'><span class='data-info'>Parks and Open Space </span><span class='data-value'> " +
    props.pos_sc_a +
    "</span></div>" +
    "<br><div class='data-row'><span class='data-info'>Walkable Retail and Centers </span><span class='data-value'> " +
    props.wrc_sc_a +
    "</span></div>" 
    ;
    document.getElementById("dataMeasurements1").innerHTML = content;
        
    map.flyTo({
    // created a parameter that pulls the lat/long values from the geojson
    center: coordinates,
    speed: 0.7,
    zoom: 12,
    });

    // Start Bar Charts 
    function chart1Modal(value) {
    alert("modal goes here");
    //    $('#EXTODModal').one('shown.bs.modal', function() {
    //    $('#EXTODTabs a[data-target="#' + value + '"]').tab('show'); }).modal('show');
    //    $('#FTODPModal').modal('close');
    }

    // Chart 1 values
    var score1 = [props.civ_sc_a,props.emp_sc_a,props.ess_sc_a, props.pos_sc_a,props.wrc_sc_a];
    var score2 = [props.ipd_sc_a,props.pop_sc_a,props.zvh_sc_a];
    // var score3 = [props.civ_sc_a,props.emp_sc_a,props.ess_sc_a, props.pos_sc_a,props.wrc_sc_a];
    // var score4 = [props.civ_sc_a,props.emp_sc_a,props.ess_sc_a, props.pos_sc_a,props.wrc_sc_a];

    updatebarChart(score1);
    updatebarChart2(score2);
    // updatebarChart(score3);
    // updatebarChart(score4);

    function updatebarChart(Values) {
     var options = {
         chart: {
             renderTo: 'chartAS1',
             type:'bar',
             plotBackgroundColor: null,
             plotBorderWidth: 0,//null,
             plotShadow: false,
             height:200,
             spacingLeft: 25,
             spacingRight: 60,
             backgroundColor: '#FFF'
           //  backgroundColor: '#EFEFEF'
         },
           colors: ['#267770']
         ,
         credits: {
             enabled: false
         },
         title: {
           //  text: 'Bicycle Volume by Month',
           text:null,
             x: -20 //center
         },
         xAxis: {
             categories: [ 'Civic and Cultural Attractors','Employees','Essential Services (ETA)','Parks and Open Space','Walkable Retail and Centers'],
             tickColor: 'transparent',
             lineColor: 'transparent',
             labels: {useHTML: true}
         },
         yAxis: {
             min: 0,
             max:5,
             tickInterval: 1,
             height: 150,
             gridLineColor: "#267770",
             title: {
                 text: ''
             }
         },
         legend: {
             enabled: false
         },
         tooltip: {
             enabled: false
         },
         series: [{
                 name:'Total',
                 id: 'Values',
                 data: []
             }]
    };
 
     var Labels = [],
     counData = [];
     for (var i = 0; i < Values.length; i++){
     counData.push({
     name: Labels[i],
     y: Values[i]})
     }
     options.series[0].data = counData;
     var chart = new Highcharts.Chart(options)
     $('.highcharts-xaxis-labels text, .highcharts-xaxis-labels span').click(function () {
         // console.log(this.textContent.split(' ')[0]);
           chart1Modal(this.textContent.split(' ')[0]);
     });
   //    console.log(bikeindata);
     }
 // Chart 2
 function updatebarChart2(Values) {
    var options = {
        chart: {
            renderTo: 'chartAS2',
            type:'bar',
            plotBackgroundColor: null,
            plotBorderWidth: 0,//null,
            plotShadow: false,
            height:200,
            spacingLeft: 25,
            spacingRight: 60,
            backgroundColor: '#FFF'
          //  backgroundColor: '#EFEFEF'
        },
          colors: ['#267770']
        ,
        credits: {
            enabled: false
        },
        title: {
          //  text: 'Bicycle Volume by Month',
          text:null,
            x: -20 //center
        },
        xAxis: {
            categories: [ 'Indicators of Potential Disadvantage','Population Density','Zero Vehicle Households'],
            tickColor: 'transparent',
            lineColor: 'transparent',
            labels: {useHTML: true}
        },
        yAxis: {
            min: 0,
            max:5,
            tickInterval: 1,
            height: 150,
            gridLineColor: "#267770",
            title: {
                text: ''
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        series: [{
                name:'Total',
                id: 'Values',
                data: []
            }]
   };

    var Labels = [],
    counData = [];
    for (var i = 0; i < Values.length; i++){
    counData.push({
    name: Labels[i],
    y: Values[i]})
    }
    options.series[0].data = counData;
    var chart = new Highcharts.Chart(options)
    $('.highcharts-xaxis-labels text, .highcharts-xaxis-labels span').click(function () {
        // console.log(this.textContent.split(' ')[0]);
          chart1Modal(this.textContent.split(' ')[0]);
    });
  //    console.log(bikeindata);
    }    
 }
 export default handleStationB