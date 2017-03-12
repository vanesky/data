
$.fn.selSearch = function(obj){

    var _this = $(this);

    if(obj.init){

        var time = '';

        var count = 0;

        var num = 0;

        //输入事件
        _this.find(":text").on('input',function(){

            clearTimeout(time);

            var p = new Promise(function(r,s){

                time = setTimeout(function(){

                    app.ajax('get','http://127.0.0.1/demo.php',{},data => {

                        r(data)
                    })

                },500)

            })

            p.then(function(data){

                var data = data;

                if(data){

                    var result = '';

                    num = data.length;

                    var str = $('<div><li class="list"></li></div>');

                    data.forEach(function(val,index){

                        str.find('.list').text(val);

                        result += str.html();
                    })

                    //清除
                    count = 0;

                    _this.find('.list').removeClass('bc-f2');

                    _this.find('.list-item').html(result).removeClass('hide');

                }
            })


        })

        //点击列表事件
        _this.find('.list-item').on('click','.list',function(){

            _this.find(":text").val($(this).text())

            _this.find('.list-item').addClass('hide')

        })

        //键盘
        _this.find(':text').on('keydown',function(ev){


            if(ev.keyCode == 38){

                if(count <= 1){return}

                count--;

            }else if(ev.keyCode == 40){

                if(count >= num){return}

                count++;

            }else if(ev.keyCode == 13){

                $(this).val(_this.find('.list').eq(count-1).text());

                _this.find('.list-item').addClass('hide');
            }

            if(ev.keyCode == 38 || ev.keyCode == 40){

                _this.find('.list').removeClass('bc-f2');

                _this.find('.list').eq(count-1).addClass('bc-f2')
            }

        })


    }

}

