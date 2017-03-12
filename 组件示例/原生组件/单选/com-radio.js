
$.fn.comRadio = function(obj){

    var _this = $(this);

    if(obj.init){

        _this.find('input').click(function(ev){

            ev.stopPropagation();

        })

        //绑定事件
        _this.find('label').on('click',function(){

            _this.find("[name='radioList']").removeClass('box-add');

            $(this).find("[name='radioList']").addClass('box-add');

        })

    }

}

