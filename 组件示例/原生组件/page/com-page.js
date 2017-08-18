
$.fn.comPage = function(obj){

    var _this = $(this);

    var temp = 1;

    //显示的数字
    var num = Math.floor(obj.total/obj.pages);

        if(obj.total%obj.pages!=0){

            num+=1;
        }

    //设置前后数字
    _this.find("[data-name='num']").first().text(1);

    _this.find("[data-name='num']").last().text(num);


    //点击事件
    _this.find("[data-name='num']").on('click',function(){

        //var temp = start = Number($(this).text());

        render(Number($(this).text()));

        //$(this).addClass('active').siblings('.item-list').removeClass('active')
    });

    //省略号事件
    _this.find("[data-name='more']").on('click',function(){

        var index = $(this).index();

        if(index == 1){

            var s = Number(_this.find("[data-name='num']").eq(1).text());

            if(s - 3 > 1){

                render(s)
            }

        }else{

            var e = Number(_this.find("[data-name='num']").eq(5).text());

            if(e + 3 < num){

                render(e)
            }
        }
    });

    //上一页下一页事件
    _this.find(".page-btn").on('click',function(){

        if($(this).index()==0){

            if(temp-1 < 1){return;}
         
            render(temp-1)

        }else{

            if(temp+1 > num){return;}
        
            render(temp+1)
        }
    })
    
    function render(start){

        temp = start;

        //如果总页数大于6 并且点击页数大于5
        if(num>6 && start>5){

            if(num > 7){  _this.find("[data-name='more']").first().show();}

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

        _this.find(".item-list").each(function(index,item){

            var that = $(item);

            if(temp == that.text()){

                that.addClass('active').siblings('.item-list').removeClass('active')

                return false;
            }
        })

        obj.callback(temp);
    }

    function init(){

        var number = 2;

        _this.find("[data-name='num']").each(function(index,item){

            if(index == 0 || index == 6){return true;}

            if(index + 1 > num){

                $(item).hide()
            }

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
