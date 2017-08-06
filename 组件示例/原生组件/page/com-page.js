
$.fn.comPage = function(obj){

    var _this = $(this);

    //显示的数字
    var num = Math.floor(obj.total/obj.pages);

        if(obj.total%obj.pages!=0){

            num+=1;
        }

    _this.find(".item-list").on('click',function(){

        var temp = '',start = '';

            temp = start = Number($(this).text());

        //如果总页数大于5
        if(num>5 && start>4){

            if(start + 3 >= num){

                start = num - 4;

                _this.find("[data-name='num']").each(function(index,item){

                    $(item).text(start);

                    start++;
                })

                _this.find("[data-name='more']").last().hide()

                _this.find("[data-name='num']").last().hide()

            }else{

                _this.find("[data-name='num']").each(function(index,item){

                    $(item).text(start-2);

                    start++;
                })

                _this.find("[data-name='more']").last().show()

                _this.find("[data-name='num']").last().show()
            }

            _this.find("[data-name='num']").first().text(1).show();

            _this.find("[data-name='more']").first().show()

        }

        if(num>5 && start<5){

            init()

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

            _this.find("[data-name='num']").last().show().text(num);
        }

        if(num>6){

            _this.find("[data-name='more']").last().show()
        }

    }

    init()




};
