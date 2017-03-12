
$.fn.comSearch = function(obj){

    var _this = $(this);

    if(obj.init){

        _this.find("[name='img']").on('click',function(){

            var val = _this.find('input').val();

            if(obj.fun){ obj.fun(val) }

        })
    }
}

