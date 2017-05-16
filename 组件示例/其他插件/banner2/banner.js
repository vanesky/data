
$.fn.banner = function(sel){

    //var _this = $(this),num = 0,time,banner = {};

    var _this = this;

    var banner = {};

    //main
    var main = this.find('.banner-main');

    //main-list
    var listObj = this.find('.list');

    //banner宽度
    var banner_w = this.width();

    (function(){

        this.slideInit = function(){

            main.css('width',Number(listObj.length)*banner_w);

            listObj.css({

                position:'relative',

                width:banner_w+'px',

                float:'left',

            });
        }

        this.slideRun = function(){

            main.css({

                'transition':'all 1s',

                'transform':"translateX("+-banner_w+"px"+")"
            })
        }

        this.slideEventEnd = function(){

            main.on('webkitTransitionEnd',function(){

                //重新获取第一个dom
                var dom = _this.find('.list').eq(0).remove()

                main.append(dom);

                main.css({

                    'transition':'',

                    'transform':"translateX(0)"

                });

                //动画完毕间隔执行
                setTimeout(function(){

                    banner.slideRun()

                },4000)
            })

        }



    }).apply(banner);


    banner.slideInit()

    banner.slideEventEnd()

    banner.slideRun()

}










