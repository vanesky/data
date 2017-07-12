var validateRule = {

    require:function(val){

        return $.trim(val).length > 0;

    },

    nameRule:function(val){

        return /^[\u4e00-\u9fa5|\d|\w]*$/.test(val);

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


window.validateMethod = function(form,validate){

    var str = [];

    $.each(validate.rules,function(attrName,attrObj){

        var nameObj = form.find("[name='"+attrName+"']")

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

        $.each(attrObj,function(ruleName,ruleParam){

            //校验规则启用
            if(ruleParam){

                var obj = {};

                obj.name = attrName;

                if(!validateRule[ruleName](value)){

                    obj.val = validate.prompt[attrName][ruleName];

                }else{
                    obj.val = true;
                }

                str.push(obj);
            }
        })

    });

    return str;

};