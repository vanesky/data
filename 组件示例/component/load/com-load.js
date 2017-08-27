
$.extend({

    load:function(obj){

        var pos = 'absolute';

        var str = '<section style="position:'+pos+'" id="load" class="com-load"><div class="load-main"><div class="load-animate">' +
            '<div class="animate-list"></div>' +
            '<div class="animate-list"></div>' +
            '<div class="animate-list"></div>' +
            '</div><span class="animate-text">正在加载 . .</span></div></section>';

        var loadObj = $('#load').css('display');

        if(typeof loadObj == 'undefined'){

            if(obj){

                obj.append(str);

            }else{

                pos = 'fixed';

                $('body').append(str)
            }

        }else if(loadObj == 'none'){

            $('#load').show();

        }

    }

});
