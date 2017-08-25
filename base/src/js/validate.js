var validateRule = {

    require:function(val){

        return $.trim(val).length > 0;
    },
    email:function(val){

      return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(val);
    },

    nameRule:function(val){

        return /^[\u4e00-\u9fa5|\d|\w]{3,}$/.test(val);
    },

    phoneRule:function(val){

        return /^1[13578]\d{9}/.test(val);
    }

}


window.validateMethod = function(param,fun){

    //form,validate,errorBox
    var p = param;

    var form = p.formName;

    var promptBox = '.form-content';

    if( param.promptBox){

        promptBox = param.promptBox;
    }

    var str = [];

    var v = {
        //校验方法
        run:function(){

            str = [];

            $.each(p.validate.rules,function(attrName,attrObj){

                var nameObj = form.find("[name='"+attrName+"']");

                if(nameObj.length < 1){

                    return str = attrName + ' no find';
                }

                var value = nameObj.val() || nameObj.attr('data-val') || nameObj.text() || '';

                //如果check radio
                if(nameObj.length>1){

                    value = '';

                    nameObj.each(function(index,item){

                        if(item.checked){

                            value = 1;

                            return false;
                        }
                    })
                }

                /*遍历规则*/
                var objParam = null;

                $.each(attrObj,function(ruleName,ruleParam){

                    //是否启动了此校验
                    if(ruleParam){
                        //如果校验没通过
                        if(!validateRule[ruleName](value)){

                            objParam = {};

                            objParam.name = attrName;

                            objParam.val = p.validate.prompt[attrName][ruleName];

                            return false;
                        }
                    }
                });

                if(objParam){

                    str.push(objParam);

                }else{

                    if(prompt){form.find("[name='"+attrName+"-error']").remove();}
                }

            });
        },

        prompt:function(name){ //如果参数存在则只执行当前Input的提示

            if(str.length<=0){return;}

            //遍历未通过数组
            $.each(str,function(index,item){

                if(name){

                    if(item.name == name){

                        //先删除提示信息
                        v.promptRun(index, item);

                        return false;
                    }

                }else {

                    v.promptRun(index, item);
                }
            })

        },
        promptRun:function(index,item){

            //先删除提示信息
            form.find("[name=" + item.name + "-error]").remove();

            form.find("[name=" + item.name + "]").parents('.form-item').find(promptBox).append('<p class="error" name="' + item.name + '-error">' + item.val + '</p>');
        }
    };

    //是否启用了文字提示
    if(p.prompt){

        form.find('input').change(function(){

            v.run();

            v.prompt($(this).attr('name'));
        });

        $(p.submit).on('click',function(){

            v.run();

            v.prompt();

            if(str.length<=0){fun()}
        });

        //其他组件事件点击触发
        if(p.evList){

            $.each(p.evList,function(index,item){

                $('body').on('click',item.key,function(){

                    v.run();

                    v.prompt(item.name);
                })
            })
        }

    }else{

        $(p.submit).on('click',function(){

            v.run();

            fun(str)
        })
    }



};