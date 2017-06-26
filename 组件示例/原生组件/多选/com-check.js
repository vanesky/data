

$.fn.comCheck = function(obj){

    var _this = $(this);

    _this.find('input').change(function(ev){

        //当前点击checked对象
        var that = $(this);

        /*
         * @parent
         * @当前点击模块最外层模块
         * @如果实例(_this)是多个，确定在当前模块实例中防止干扰其他实例。
         */
        var parent = that.parents('.com-check');

        that.siblings("[data-name='checkBox']").toggleClass('box-add');

        var isTrue = false;

        //是否全选
        parent.find(":checkbox").each(function(index,val){

            if(!val.checked){

                isTrue = false;

                return false;
            }else{

                isTrue = true;
            }
        });

        if(isTrue){

            parent.find("[data-name='allCheck']").addClass('box-add');

        }else{

            parent.find("[data-name='allCheck']").removeClass('box-add');
        }

        ev.stopPropagation();
    });

    //点击全部选中
    _this.find("label[data-name='checkAll']").on('click',function(){

        var that = $(this);

        var parent = that.parents('.com-check');

        var has = that.find("[data-name='allCheck']").hasClass('box-add');

        if(has){

            //删除选中
            parent.find(":checkbox").prop('checked',false);
            //删除选中样式
            parent.find("[data-name='checkBox']").removeClass('box-add');

        }else{

            //选中
            parent.find(":checkbox").prop('checked',true);
            //选中样式
            parent.find("[data-name='checkBox']").addClass('box-add');
        }

        that.find("[data-name='allCheck']").toggleClass('box-add');

    })


};

