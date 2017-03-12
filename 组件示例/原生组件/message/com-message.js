
$.extend({

    comMessage:function(obj){

        var hook = '<div class="hook"></div>';

        var sigh = '<div class="sigh"></div>';

        var str = '<section class="com-message">' +
            '<div class="circle"></div><div class="text"></div>' +
            '<span class="close">&times;</span>' +
            '</section>';


        var strObj = $(str);

        if(obj.type == 'warning' || obj.type == 'prompt'){

            strObj.find('.circle').append(sigh);

        }else if(obj.type == 'success'){

            strObj.find('.circle').append(hook);
        }

        strObj.find('.circle').addClass(obj.type);

        strObj.find('.text').text(obj.text);


        //添加关闭事件
        strObj.find('.close').on('click',function(){

            strObj.remove()
        })

        $('body').append(strObj);

        setTimeout(function(){

            strObj.css({

                'opacity':1,

                'transform':"translate(-50%,20px)"

            });
        })


        setTimeout(function(){

            strObj.remove();

        },obj.time)

    }

})


