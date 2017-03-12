

$.fn.comCheck = function(obj){

    var _this = $(this);

    if(obj.init){

        _this.find('input').click(function(ev){

            var input = $(this);

            var has = input.siblings("[name='checkList']").hasClass('box-add');

                has ? input.siblings("[name='checkList']").removeClass('box-add') : input.siblings("[name='checkList']").addClass('box-add');


            var isTrue = false;

            //是否全选
            var arr = _this.find(":checkbox").each(function(index,val){

                if(!val.checked){

                    isTrue = false;

                    return false;
                }else{

                    isTrue = true;
                }
            });

            if(isTrue){

                _this.find("[name='allCheck']").addClass('box-add');

            }else{

                _this.find("[name='allCheck']").removeClass('box-add');
            }


            ev.stopPropagation();
        })

        //allCheck
        _this.find("label[name='all']").on('click',function(){

            var label = $(this);

            var has = label.find("[name='allCheck']").hasClass('box-add');

            if(has){

                //删除选中
                _this.find(":checkbox").prop('checked',false)
                //删除选中样式
                _this.find("[name='checkList']").removeClass('box-add');
                //删除全部样式
                label.find("[name='allCheck']").removeClass('box-add')

            }else{

                //选中
                _this.find(":checkbox").prop('checked',true)
                //选中样式
                _this.find("[name='checkList']").addClass('box-add');

                //选中全部样式
                label.find("[name='allCheck']").addClass('box-add');
            }

        })


    }

}

