
$.fn.comRadio = function(obj){

    var _this = $(this);


    _this.find('input').click(function(ev){

        ev.stopPropagation();

    });

    //绑定事件
    _this.find('label').on('click',function(){

        //统一模块中同级样式消除
        $(this).siblings('label').find("[data-name='radioList']").removeClass('box-add');

        $(this).find("[data-name='radioList']").addClass('box-add');

    })


};

