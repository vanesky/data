
$.fn.banner = function(sel){

    var that = $(this),time = '',pause = false,isRun = true;

    var banner = {};

    //main
    var main = this.find('.banner-main');

    //main-list
    var listObj = this.find('.list');

    //banner宽度
    var banner_w = this.width();


    (function(){
        //初始化
        this.slideInit = function(){

            for(var i=0;i<listObj.length;i++){

                listObj.eq(i).css({

                    opacity:1,

                    transform:'translateX('+banner_w*i+'px)'
                })
            }
            that.find('.label-list').eq(0).css('backgroundColor',sel.nowColor)
        }

        this.slideRun = function(direction){

            if(!isRun){return}

            var banner_ = direction == 'left' ? banner_w:-banner_w;

            for(var i=0;i<listObj.length;i++){                       //判断当前是否为最后一个元素 如果是则把元素位置初始化

                var le = listObj.eq(i).css('transform').split(',')[4];

                    le = Number(le.trim());

                    if(le==-banner_*(listObj.length-1)){

                        listObj.eq(i).css('transform','translate('+banner_+'px)');
                    }


                var leIng = listObj.eq(i).css('transform').split(',')[4];

                    leIng = Number(leIng.trim());

                    leIng == banner_ ? banner.btList(i) : false;

                    listObj.eq(i).css({

                        transition:'all '+sel.mspeed/1000+'s',

                        transform:'translateX('+(leIng-banner_)+'px)'

                    });
            }

            isRun = false;

            if(typeof sel.speed == 'undefined'|| typeof sel.mspeed =='undefined'){return false}

            if(pause){return false}

            time = setTimeout(function(){banner.slideRun('left');},sel.speed);


        };


        this.slideEvent = function(){

            that.find("[name='toggle']").on({

                'click':function(){

                    var direction = $(this).prop('class');

                        direction = direction == 'left' ? 'right' : 'left';

                        banner.slideRun(direction);
                },

                'mouseenter':function(){

                    clearTimeout(time);

                    pause = true;
                },

                'mouseleave':function(){

                    pause = false;

                    time = setTimeout(function(){

                        banner.slideRun('left');

                    },sel.speed);
                }

            });

            listObj.on('webkitTransitionEnd',function(){

                listObj.css('transition','');

                isRun = true;
            })

        };

        this.btList = function(index){

            that.find('.label-list').css('backgroundColor',sel.listColor)

            that.find('.label-list').eq(index).css('backgroundColor',sel.nowColor)

        };


    }).apply(banner);


    banner.slideInit()


    //动画完毕间隔执行
    banner.slideEvent();

    setTimeout(function(){

        banner.slideRun('left');

    },sel.speed)

    $(window).resize(function(){banner_w = $(window).width();  banner.slideInit();})
}










