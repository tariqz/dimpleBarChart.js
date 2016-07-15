<p>

  <script src="http://d3js.org/d3.v3.min.js">

    </script>

      <script src="http://dimplejs.org/dist/dimple.v2.1.6.min.js">

      </script>

          <script type="text/javascript">
            var svg = dimple.newSvg("body", 800, 600);
            var data = [
              { "AgeStructure":"0-14", "Population":2875390},
              { "AgeStructure":"15-24", "Population":1643951},
              { "AgeStructure":"25-54", "Population":2931840},
              { "AgeStructure":"55-64", "Population":349132},
              { "AgeStructure":"65 and older", "Population":317251}
            ];
            var chart = new dimple.chart(svg, data);
            var x = chart.addCategoryAxis("x", "AgeStructure");
            x.addOrderRule(["0-14","15-24","25-54","55-64","65 and older"]);
            chart.addMeasureAxis("y", "Population");
            var series = chart.addSeries("AgeStructure", dimple.plot.bar);
            chart.draw();
      </script>

 </p>
