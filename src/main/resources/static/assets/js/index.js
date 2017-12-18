/* ============================================================
 * Form Wizard
 * Multistep form wizard using Bootstrap Wizard Plugin
 * For DEMO purposes only. Extract what you need.
 * ============================================================ */
(function($) {

    'use strict';




    $('#refrenceModel1Popup').click(function() {
        $('#modalSlideUp').modal('show')
    });

    $('#goNext1').click(function() {
        location.href="/configuration/environment";
    });

    $('#goNext2').click(function() {
        location.href="/configuration/interface";
    });

    $('#goPrevious2').click(function() {
        location.href="/configuration/architecture";
    });

    $('#goNext3').click(function() {
        location.href="/configuration/endpoint";
    });
    $('#goPrevious3').click(function() {
        location.href="/configuration/environment";
    });

    $('#goNext4').click(function() {
        location.href="/configuration/review";
    });
    $('#goPrevious4').click(function() {
        location.href="/configuration/interface";
    });

    $('#goExpertMode').click(function() {
        location.href="/configuration/review/expert";
    });

    $('#portlet-linear1').portlet({
        progress: 'circle',
        onRefresh: function() {
            // Timeout to simulate AJAX response delay
            setTimeout(function() {
                // Hides progress indicator
                $('#portlet-linear1').portlet({
                    refresh: false
                });
            }, 500);
        }
    });
    $('#portlet-linear2').portlet({
        progress: 'circle',
        onRefresh: function() {
            // Timeout to simulate AJAX response delay
            setTimeout(function() {
                // Hides progress indicator
                $('#portlet-linear2').portlet({
                    refresh: false
                });
            }, 500);
        }
    });
    $('#portlet-linear3').portlet({
        progress: 'circle',
        onRefresh: function() {
            // Timeout to simulate AJAX response delay
            setTimeout(function() {
                // Hides progress indicator
                $('#portlet-linear3').portlet({
                    refresh: false
                });
            }, 500);
        }
    });
    $('#portlet-linear4').portlet({
        progress: 'circle',
        onRefresh: function() {
            // Timeout to simulate AJAX response delay
            setTimeout(function() {
                // Hides progress indicator
                $('#portlet-linear4').portlet({
                    refresh: false
                });
            }, 500);
        }
    });
    $('#portlet-linear5').portlet({
        progress: 'circle',
        onRefresh: function() {
            // Timeout to simulate AJAX response delay
            setTimeout(function() {
                // Hides progress indicator
                $('#portlet-linear5').portlet({
                    refresh: false
                });
            }, 400);
        }
    });
    $('#portlet-linear6').portlet({
        progress: 'circle',
        onRefresh: function() {
            // Timeout to simulate AJAX response delay
            setTimeout(function() {
                // Hides progress indicator
                $('#portlet-linear6').portlet({
                    refresh: false
                });
            }, 500);
        }
    });

    $(document).ready(function() {



       var portletLinear1 = $('#portlet-linear1');
       var portletLinear2 = $('#portlet-linear2');
       var portletLinear3 = $('#portlet-linear3');
       var portletLinear4 = $('#portlet-linear4');
       var portletLinear5 = $('#portlet-linear5');
       var portletLinear6 = $('#portlet-linear6');

       $('#reference1').click(function(e) {

           portletLinear1.removeClass('panel-default');
           portletLinear1.addClass('panel-primary');
           portletLinear2.removeClass('panel-primary');
           portletLinear2.addClass('panel-default');
           portletLinear3.removeClass('panel-primary');
           portletLinear3.addClass('panel-default');
           portletLinear4.removeClass('panel-primary');
           portletLinear4.addClass('panel-default');
           portletLinear5.removeClass('panel-primary');
           portletLinear5.addClass('panel-default');
           portletLinear6.removeClass('panel-primary');
           portletLinear6.addClass('panel-default');




       });

       $('#reference2').click(function(e) {
            portletLinear1.removeClass('panel-primary');
            portletLinear1.addClass('panel-default');

            portletLinear2.removeClass('panel-default');
            portletLinear2.addClass('panel-primary');
            portletLinear3.removeClass('panel-primary');
            portletLinear3.addClass('panel-default');
            portletLinear4.removeClass('panel-primary');
            portletLinear4.addClass('panel-default');
            portletLinear5.removeClass('panel-primary');
            portletLinear5.addClass('panel-default');
            portletLinear6.removeClass('panel-primary');
            portletLinear6.addClass('panel-default');
        });

       $('#reference3').click(function(e) {
            portletLinear1.removeClass('panel-primary');
            portletLinear1.addClass('panel-default');
           portletLinear2.removeClass('panel-primary');
           portletLinear2.addClass('panel-default');
            portletLinear3.removeClass('panel-default');
            portletLinear3.addClass('panel-primary');
            portletLinear4.removeClass('panel-primary');
            portletLinear4.addClass('panel-default');
            portletLinear5.removeClass('panel-primary');
            portletLinear5.addClass('panel-default');
            portletLinear6.removeClass('panel-primary');
            portletLinear6.addClass('panel-default');
        });

       $('#reference4').click(function(e) {
            portletLinear1.removeClass('panel-primary');
            portletLinear1.addClass('panel-default');
            portletLinear2.removeClass('panel-primary');
            portletLinear2.addClass('panel-default');
            portletLinear3.removeClass('panel-primary');
            portletLinear3.addClass('panel-default');
            portletLinear4.removeClass('panel-default');
            portletLinear4.addClass('panel-primary');
            portletLinear5.removeClass('panel-primary');
            portletLinear5.addClass('panel-default');
            portletLinear6.removeClass('panel-primary');
            portletLinear6.addClass('panel-default');
        });

       $('#reference5').click(function(e) {
            portletLinear1.removeClass('panel-primary');
            portletLinear1.addClass('panel-default');
            portletLinear2.removeClass('panel-default');
            portletLinear2.addClass('panel-primary');
            portletLinear3.removeClass('panel-primary');
            portletLinear3.addClass('panel-default');
            portletLinear4.removeClass('panel-primary');
            portletLinear4.addClass('panel-default');
            portletLinear5.removeClass('panel-default');
            portletLinear5.addClass('panel-primary');
            portletLinear6.removeClass('panel-primary');
            portletLinear6.addClass('panel-default');
        });

       $('#reference6').click(function(e) {
            portletLinear1.removeClass('panel-primary');
            portletLinear1.addClass('panel-default');

            portletLinear2.removeClass('panel-primary');
            portletLinear2.addClass('panel-default');
            portletLinear3.removeClass('panel-primary');
            portletLinear3.addClass('panel-default');
            portletLinear4.removeClass('panel-primary');
            portletLinear4.addClass('panel-default');
            portletLinear5.removeClass('panel-primary');
            portletLinear5.addClass('panel-default');
            portletLinear6.removeClass('panel-default');
            portletLinear6.addClass('panel-primary');
        });



        $('.remove-item').click(function() {
            $(this).parents('tr').fadeOut(function() {
                $(this).remove();
            });
        });

    });

})(window.jQuery);