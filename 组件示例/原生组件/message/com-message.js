
$.extend({

    comMessage:function(obj){


        var str = '<section class="com-message">' +
            '<label class="circle"><i id="circleChild" class=""></i></label>' +
            '<div class="text"></div>' +
            '<i class="close">&times;</i>' +
            '</section>';


        var strObj = $(str);

        if(obj.type == 'warning' || obj.type == 'prompt'){

            strObj.find('#circleChild').addClass('sigh');

        }else if(obj.type == 'success'){

            strObj.find('#circleChild').addClass('hook');
        }

        strObj.find('.circle').addClass(obj.type);

        strObj.find('.text').text(obj.text);


        //添加关闭事件
        strObj.find('.close').on('click',function(){

            if(obj.back){ obj.back() }

            strObj.remove()
        });

        $('body').append(strObj);

        setTimeout(function(){

            strObj.css({

                'opacity':1,

                'transform':(function(){

                    var max = '20px';

                    if(obj.animateTop){ max = obj.animateTop}

                    return "translate(-50%,"+max+")";

                })()
            });

        },50);


        setTimeout(function(){

            if(obj.back){ obj.back() }

            strObj.remove();

        },obj.time)

    }

});


