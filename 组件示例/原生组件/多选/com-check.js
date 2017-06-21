

$.fn.comCheck = function(obj){

    var _this = $(this);

    _this.find('input').change(function(ev){

        //当前点击checked对象
        var input = $(this);

        /*
         * @inputParent
         * @当前点击模块最外层模块
         * @如果实例(_this)是多个，确定在当前模块实例中防止干扰其他实例。
         */
        var inputParent = input.parents('.com-check');

        input.siblings("[data-name='checkList']").toggleClass('box-add');

        var isTrue = false;

        //是否全选
        inputParent.find(":checkbox").each(function(index,val){

            if(!val.checked){

                isTrue = false;

                return false;
            }else{

                isTrue = true;
            }
        });

        if(isTrue){

            inputParent.find("[data-name='allCheck']").addClass('box-add');

        }else{

            inputParent.find("[data-name='allCheck']").removeClass('box-add');
        }

        ev.stopPropagation();
    });

    //allCheck
    _this.find("label[data-name='all']").on('click',function(){

        var label = $(this);

        var has = label.find("[data-name='allCheck']").hasClass('box-add');

        if(has){

            //删除选中
            _this.find(":checkbox").prop('checked',false);
            //删除选中样式
            _this.find("[data-name='checkList']").removeClass('box-add');
            //删除全部样式
            label.find("[data-name='allCheck']").removeClass('box-add')

        }else{

            //选中
            _this.find(":checkbox").prop('checked',true);
            //选中样式
            _this.find("[data-name='checkList']").addClass('box-add');

            //选中全部样式
            label.find("[data-name='allCheck']").addClass('box-add');
        }

    })


};

