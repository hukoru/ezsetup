/* ============================================================
 * Dashboard
 * Generates widgets in the dashboard
 * For DEMO purposes only. Extract what you need.
 * ============================================================ */
(function($) {

    'use strict';

    $(document).ready(function() {

        //Get from JSON data and build

        d3.json('http://pages.revox.io/json/min_sales_chart.json', function(data) {

            // Widget-15
            nv.addGraph(function() {
                var chart = nv.models.lineChart()
                    .x(function(d) {
                        return d[0]
                    })
                    .y(function(d) {
                        return d[1]
                    })
                    .color(['#27cebc'])
                    .useInteractiveGuideline(true)
                    .margin({
                        top: 10,
                        right: -10,
                        bottom: 10,
                        left: -10
                    })
                    .showXAxis(false)
                    .showYAxis(false)
                    .showLegend(false)

                d3.select('.widget-16-chart svg')
                    .datum(data.siteVisits)
                    .call(chart);

                nv.utils.windowResize(chart.update);

                nv.utils.windowResize(function() {
                    setTimeout(function() {
                        $('.widget-16-chart .nvd3 circle.nv-point').attr("r", "4");
                    }, 500);
                });

                return chart;
            }, function() {
                setTimeout(function() {
                    $('.widget-16-chart .nvd3 circle.nv-point').attr("r", "4");
                }, 500);
            });

            // Widget-7
            nv.addGraph(function() {
                var chart = nv.models.lineChart()
                    .x(function(d) {
                        return d[0]
                    })
                    .y(function(d) {
                        return d[1]
                    })
                    .color(['#fff'])
                    .margin({
                        top: 10,
                        right: -10,
                        bottom: 20,
                        left: -10
                    })
                    .showXAxis(false)
                    .showYAxis(false)
                    .showLegend(false)
                    .interactive(false);

                d3.select('.widget-7-chart svg')
                    .datum(data.premarket)
                    .call(chart);

                nv.utils.windowResize(chart.update);

                return chart;
            }, function() {
                setTimeout(function() {
                    $('.widget-7-chart .nvd3 circle.nv-point:nth-child(4)').attr("r", "5");
                }, 500);
            });


            // Widget-8
            nv.addGraph(function() {
                var chart = nv.models.lineChart()
                    .x(function(d) {
                        return d[0]
                    })
                    .y(function(d) {
                        return d[1]
                    })
                    .color(['#000'])
                    .margin({
                        top: 10,
                        right: -10,
                        bottom: -13,
                        left: -10
                    })
                    .showXAxis(false)
                    .showYAxis(false)
                    .showLegend(false)
                    .interactive(false);

                d3.select('.widget-8-chart svg')
                    .datum(data.siteVisits)
                    .call(chart);



                nv.utils.windowResize(chart.update);

                nv.utils.windowResize(function() {
                    setTimeout(function() {
                        $('.widget-8-chart .nvd3 circle.nv-point').attr("r", "3").css({
                            'stroke-width': '2px',
                            ' stroke-opacity': 0.4
                        });
                    }, 500);
                });

                return chart;
            }, function() {
                setTimeout(function() {
                    $('.widget-8-chart .nvd3 circle.nv-point').attr("r", "3").css({
                        'stroke-width': '2px',
                        ' stroke-opacity': 0.4
                    });
                }, 500);
            });
        });


        // Widget 13
        $('.widget-13-map').mapplic({
            source: 'http://pages.revox.io/json/dashboard-map.json',
            height: 465,
            sidebar: false,
            minimap: false,
            locations: true,
            deeplinking: true,
            fullscreen: false,
            developer: false,
            maxscale: 3
        });

        // Disable scroll to zoom
        setTimeout(function() {
            location.hash = "#usa";
            $('.mapplic-layer').unbind('mousewheel DOMMouseScroll');
        }, 1000);


        $('.widget-13 a[data-toggle="tab"]').on('show.bs.tab', function(e) {
            var target = $(e.target).text().trim();
            var hash;
            if (target == 'fb') {
                hash = '#usa';
            } else if (target == 'sa') {
                hash = '#af';
            } else if (target == 'js') {
                hash = '#ru';
            }
            window.location.hash = hash;
        });

        // tiles
        $(".widget-3 .metro").liveTile();
        $(".widget-7 .metro").liveTile();


        //NVD3 Charts
        d3.json('http://pages.revox.io/json/charts.json', function(data) {

            // line chart
            (function() {
                nv.addGraph(function() {
                    var chart = nv.models.lineChart()
                        .x(function(d) {
                            return d[0]
                        })
                        .y(function(d) {
                            return d[1]
                        })
                        .color([
                            $.Pages.getColor('success'),
                            $.Pages.getColor('danger'),
                            $.Pages.getColor('primary'),
                            $.Pages.getColor('complete'),

                        ])
                        .showLegend(false)
                        .margin({
                            left: 30,
                            bottom: 35
                        })
                        .useInteractiveGuideline(true);

                    chart.xAxis
                        .tickFormat(function(d) {
                            return d3.time.format('%a')(new Date(d))
                        });

                    chart.yAxis.tickFormat(d3.format('d'));

                    d3.select('.nvd3-line svg')
                        .datum(data.nvd3.line)
                        .transition().duration(500)
                        .call(chart);

                    nv.utils.windowResize(chart.update);

                    $('.nvd3-line').data('chart', chart);

                    return chart;
                });
            })();


        });



    });

})(window.jQuery);