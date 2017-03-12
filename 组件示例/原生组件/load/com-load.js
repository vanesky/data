
$.extend({

    load:function(obj){

        var str = '<section id="load" class="com-load"><div class="load-main"><div class="animate">' +
            '<div class="animate-list"></div>' +
            '<div class="animate-list"></div>' +
            '<div class="animate-list"></div>' +
            '</div><span class="animate-text">正在加载 . .</span></div></section>';

        var loadObj = $('#load').css('display');

        if(typeof loadObj == 'undefined'){

            obj ? obj.append(str) : $('body').append(str);

        }else if(loadObj == 'none'){

            $('#load').show();

        }else{return;}

    }

})
