
$.fn.comSelect = function(obj){

    var _this = $(this);

    var headObj = _this.find('.sel-head');


    //默认初始化所有列表选中第一项
    if(obj.init){

        headObj.val(_this.find('.sel-list').eq(0).text());

        _this.find("input[name='selected']").val(_this.find('.sel-list').eq(0).attr('data-val'))
    }

    //绑定事件
    _this.on('click','.sel-list',function(){

        var that = $(this);

        var text = that.text();

        var dataVal = that.attr('data-val');

            that.parents('.com-select').find('.sel-head').val(text);

            dataVal ? that.parents('.com-select').find("input[name='selected']").val(dataVal) : '';

    });

    headObj.on({

        'click':function(e){

            e.stopPropagation();

            var that = $(this);

            var isTrue = that.parents('.com-select').find('.sel-content').hasClass('hide');

            if(isTrue){

                //关闭所有列表显示
                _this.find('.sel-content').addClass('hide');

                //切换当前列表显示
                that.parents('.com-select').find('.sel-content').toggleClass('hide');
            }else{

                that.parents('.com-select').find('.sel-content').addClass('hide')
            }
        }

    });

    //点击外部关闭所有列表显示
    $('body').on('click',function(){

        _this.find('.sel-content').addClass('hide');
    });

};

