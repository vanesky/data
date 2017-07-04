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


window.validateMethod = function(validate){

    var str = [];

    $.each(validate.rules,function(attrName,attrObj){

        var nameObj = $("[name='"+attrName+"']")

        var value = nameObj.val() || nameObj.attr('data-val') || nameObj.text() || '';

        $.each(attrObj,function(ruleName,ruleParam){

            if(!validateRule[ruleName](value)){

                str.push(validate.prompt[attrName][ruleName]);
            }
        })
    });

    if(str.length>0){

        com.prompt(0,str[0]);

        return false;
    }
    return true;
};