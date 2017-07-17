var validateRule = {

    require:function(val){

        return $.trim(val).length > 0;

    },

    nameRule:function(val){

        return /^[\u4e00-\u9fa5|\d|\w]{3,}$/.test(val);

    },

    loginNameRule:function(val){

        return /^\d+$/.test(val);

    },

    loginPassRule:function(val,param){

        return $.trim(val).length >= param;

    },

    phoneRule:function(val,param){

        return $.trim(val).length >= param;

    }

}


window.validateMethod = function(form,validate,errorBox){

    var str = [];

    $.each(validate.rules,function(attrName,attrObj){

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

                    objParam.val = validate.prompt[attrName][ruleName];

                    return false;
                }
            }
        });

        if(objParam){

            str.push(objParam);

            if(errorBox){

                var hasDom = form.find("[name-error="+objParam.name+"]");

                if(hasDom.length <= 0){

                    form.find("[name="+objParam.name+"]").parents('.form-content').append('<p name="'+objParam.name+'-error">'+objParam.val+'</p>')
                }
            }

        }else{

            if(errorBox){form.find("[name='"+attrName+"-error']").remove();}
        }


    });

    return str;

};