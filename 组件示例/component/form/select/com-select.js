
$.fn.comSelect = function(obj){

    var _this = $(this);

    var headObj = _this.find('.sel-head');


    //默认初始化所有列表选中第一项
    if(obj && obj.init){

        headObj.val(_this.find('.sel-list').eq(0).text());

        _this.find("input:hidden").val(_this.find('.sel-list').eq(0).attr('data-val'))
    }

    //绑定事件
    _this.on('click','.sel-list',function(){

        var that = $(this);

        var text = that.text();

        var dataVal = that.attr('data-val');

            that.parents('.com-select').find('.sel-head').val(text);

            dataVal ? that.parents('.com-select').find("input:hidden").val(dataVal) : '';

    });

    headObj.on({

        'click':function(e){

            e.stopPropagation();

            var that = $(this);

            var isTrue = that.parents('.com-select').find('.sel-content').is(':hidden');

            if(isTrue){

                _this.find('.sel-content').hide();

                that.parents('.com-select').find('.sel-content').toggle();

            }else{

                that.parents('.com-select').find('.sel-content').hide()
            }
        },
        focus:function(){

            this.blur();
        }

    });

    //点击外部关闭所有列表显示
    $(window).on('click',function(){

        _this.find('.sel-content').hide();
    });

};

