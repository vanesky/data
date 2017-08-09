
$.fn.comPage = function(obj){

    var _this = $(this);

    //显示的数字
    var num = Math.floor(obj.total/obj.pages);

        if(obj.total%obj.pages!=0){

            num+=1;
        }

    //设置前后数字
    _this.find("[data-name='num']").first().text(1);

    _this.find("[data-name='num']").last().text(num);


    //点击事件
    _this.find(".item-list").on('click',function(){

        var start = Number($(this).text());

        //如果总页数大于5 并且点击页数大于5
        if(num>6 && start>5){

            //显示之前更多
            //_this.find("[data-name='num']").first().text(1).show();

            _this.find("[data-name='more']").first().show();

            //点击接近最后数字
            if(start + 3 >= num){

                start = num - 5;

                _this.find("[data-name='num']").each(function(index,item){

                    if(index == 0 || index == 6){return true;}

                    $(item).text(start);

                    start++;
                });

                _this.find("[data-name='more']").last().hide();

                //_this.find("[data-name='num']").last().hide();

            }else{

                _this.find("[data-name='num']").each(function(index,item){

                    if(index == 0 || index == 6){return true;}

                    $(item).text(start-2);

                    start++;
                });

                _this.find("[data-name='more']").last().show();

                _this.find("[data-name='num']").last().show();
            }

        }

        if(num>6 && start<6){

            init();

            //_this.find("[data-name='num']").first().text(1).hide();

            _this.find("[data-name='more']").first().hide()
        }

        //添加样式

        /*_this.find(".item-list").each(function(index,item){

            var that = $(item);

            if(temp == that.text()){

                that.addClass('active').siblings('.item-list').removeClass('active')

                return false;
            }
        })*/

        //$(this).addClass('active').siblings('.item-list').removeClass('active')
    })

    function init(){

        var number = 2;

        _this.find("[data-name='num']").each(function(index,item){

            if(index == 0 || index == 6){return true;}

            /*if(index + 1 > num){

                $(item).hide()
            }*/

            $(item).text(number);

            number++;
        });

        //判断某些按钮是否显示
        if(num>6){

            _this.find("[data-name='num']").last().show().text(num);
        }

        if(num>7){

            _this.find("[data-name='more']").last().show()
        }

    }

    init()




};
