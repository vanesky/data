
$.extend($,{

    alert:function(text,fun){

        var str =
            '<section class="com-prompt"><div class="prompt-main">' +
                '<h4 class="prompt-tit">提示</h4>' +
                '<div class="prompt-text"></div>' +
                '<ul class="prompt-item"> <li class="prompt-button">取消</li> <li class="prompt-button">确定</li> </ul> ' +
            '</div></section>';

        var strObj = $(str);

            strObj.find('.prompt-text').text(text);

            strObj.find('.prompt-button').on('click',function(){

                if(fun && $(this).index() == 1){fun()}

                strObj.remove();

            });

        $('body').append(strObj);

        strObj.css('display','block').animate({

            opacity:1

        },200);


    }

});