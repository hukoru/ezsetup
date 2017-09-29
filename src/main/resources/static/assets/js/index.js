/* ============================================================
 * Form Wizard
 * Multistep form wizard using Bootstrap Wizard Plugin
 * For DEMO purposes only. Extract what you need.
 * ============================================================ */
(function($) {

    'use strict';


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



        $('#rootwizard').bootstrapWizard({
            onTabShow: function(tab, navigation, index) {
                var $total = navigation.find('li').length;
                var $current = index + 1;

                // If it's the last tab then hide the last button and show the finish instead
                if ($current >= $total) {
                    $('#rootwizard').find('.pager .next').hide();
                    $('#rootwizard').find('.pager .finish').show().removeClass('disabled hidden');
                } else {
                    $('#rootwizard').find('.pager .next').show();
                    $('#rootwizard').find('.pager .finish').hide();
                }

                var li = navigation.find('li.active');

                var btnNext = $('#rootwizard').find('.pager .next').find('button');
                var btnPrev = $('#rootwizard').find('.pager .previous').find('button');

                // remove fontAwesome icon classes
                function removeIcons(btn) {
                    btn.removeClass(function(index, css) {
                        return (css.match(/(^|\s)fa-\S+/g) || []).join(' ');
                    });
                }

                if ($current > 1 && $current < $total) {

                    var nextIcon = li.next().find('.fa');
                    var nextIconClass = nextIcon.attr('class').match(/fa-[\w-]*/).join();

                    removeIcons(btnNext);
                    btnNext.addClass(nextIconClass + ' btn-animated from-left fa');

                    var prevIcon = li.prev().find('.fa');
                    var prevIconClass = prevIcon.attr('class').match(/fa-[\w-]*/).join();

                    removeIcons(btnPrev);
                    btnPrev.addClass(prevIconClass + ' btn-animated from-left fa');
                } else if ($current == 1) {
                    // remove classes needed for button animations from previous button
                    btnPrev.removeClass('btn-animated from-left fa');
                    removeIcons(btnPrev);
                } else {
                    // remove classes needed for button animations from next button
                    btnNext.removeClass('btn-animated from-left fa');
                    removeIcons(btnNext);
                }
            },
            onNext: function(tab, navigation, index) {
                console.log("Showing next tab");
            },
            onPrevious: function(tab, navigation, index) {
                console.log("Showing previous tab");
            },
            onInit: function() {
                $('#rootwizard ul').removeClass('nav-pills');
            }

        });

        $('.remove-item').click(function() {
            $(this).parents('tr').fadeOut(function() {
                $(this).remove();
            });
        });

    });

})(window.jQuery);