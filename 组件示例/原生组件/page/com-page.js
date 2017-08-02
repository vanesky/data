
$.fn.comPage = function(obj){

    var _this = $(this);

    //显示的数字
    var num = Math.floor(obj.total/obj.pages);

        if(obj.total%obj.pages!=0){

            num+=1;
        }

    _this.find("[data-name='num']").on('click',function(){

        var start = Number($(this).text());

        //如果总页数大于5
        if(num>5 && start>4){

            if(start + 3 >= num){

                start = num - 4;

                _this.find("[data-name='num']").each(function(index,item){

                    $(item).text(start);

                    start++;
                })

                _this.find("[data-name='more']").last().hide()

                _this.find("[data-name='last']").hide()

            }else{

                _this.find("[data-name='num']").each(function(index,item){

                    $(item).text(start-2);

                    start++;
                })

                _this.find("[data-name='more']").last().show()

                _this.find("[data-name='last']").show()
            }

            _this.find("[data-name='first']").text(1).show();

            _this.find("[data-name='more']").first().show()

        }

        if(num>5 && start<5){

            init()

            _this.find("[data-name='first']").text(1).hide();

            _this.find("[data-name='more']").first().hide()
        }


    })

    function init(){

        var number = 1;

        _this.find("[data-name='num']").each(function(index,item){

            //if(index == 0 || index == 6){return true;}

            if(index + 1 > num){

                $(item).hide()
            }

            $(item).text(number)

            number++;
        })

        //判断某些按钮是否显示
        if(num>5){

            _this.find("[data-name='last']").show().text(num);
        }

        if(num>6){

            _this.find("[data-name='more']").last().show()
        }

    }

    init()




};
