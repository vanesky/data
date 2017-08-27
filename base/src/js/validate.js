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

            var errArr = [];

            $.each(p.validate.rules,function(attrName,attrObj){

                var nameObj = form.find("[name='"+attrName+"']");

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

                var objParam = {type:1,name:attrName}

                $.each(attrObj,function(ruleName,ruleParam){

                    //是否启动了此校验
                    if(ruleParam){

                        //如果校验没通过
                        if(!validateRule[ruleName](value)){

                            objParam.type = 0;

                            objParam.val = p.validate.prompt[attrName][ruleName];

                            return false;
                        }
                    }
                });

                str.push(objParam);
            });

            //过滤出校验不正确的数组信息
            $.each(str,function(index,item){

                if(!item.type){errArr.push(item)}
            })

            return errArr;
        },

        prompt:function(name){ //如果参数存在则只执行当前Input的提示

            $.each(str,function(index,item){

                if(name){

                    if(item.name == name){

                        v.mesToggle(index,item)
                    }
                }else{

                    v.mesToggle(index,item)
                }
            })
        },

        mesToggle:function(index,item){

            form.find("[name=" + item.name + "-error]").remove();

            if(!item.type){

                form.find("[name=" + item.name + "]").parents('.form-item').find(promptBox).append('<p class="error" name="' + item.name + '-error">' + item.val + '</p>');
            }
        }

    };


    //是否启用了文字提示
    if(p.prompt){

        form.find('input,textarea').change(function(){

            v.run();

            v.prompt($(this).attr('name'));
        });

        $(p.submit).on('click',function(){

            var isTRUE = v.run();

            v.prompt();

            if(isTRUE.length<=0){fun()}
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

            fun(v.run())
        })
    }



};