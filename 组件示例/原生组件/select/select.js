
$.fn.sel = function(obj){

    let _this = $(this);

    if(obj.init == 'init'){

        let headObj = _this.find('.sel-head');

        let contentObj = _this.find('.sel-content');

        //默认选择第一个选项
        headObj.text(_this.find('.sel-list').eq(0).text());

        headObj.attr('data-val',_this.find('.sel-list').eq(0).attr('data-val'));

        //绑定事件
        _this.on('click','.sel-list',function(){

            let dataVal = $(this).attr('data-val');

            let text = $(this).text();

            headObj.attr('data-val',dataVal).val(text);

            contentObj.addClass('hide');

        })

        headObj.on({

            'mouseenter':function(){

                contentObj.removeClass('hide');
            }

        })

        _this.mouseleave(function(){

            contentObj.addClass('hide');
        })

    }

}

