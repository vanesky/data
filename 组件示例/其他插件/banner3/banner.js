
$.fn.banner = function(sel){

    var that = $(this),time = '',dir = 'left',pause = false,isRun = false;

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
        }

        this.slideRun = function(direction){
            //如果正在运动则返回
            if(isRun){return}

            dir = direction;

            var banner_ = direction == 'left' ? -banner_w:banner_w;

            for(var i=0;i<listObj.length;i++){                       //判断当前是否为最后一个元素 如果是则把元素位置初始化

                var le = listObj.eq(i).css('transform').split(',')[4];

                    le = Number(le.trim());

                    if(le==-banner_*(listObj.length-1)){

                        listObj.eq(i).css('transition','');

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

            if(typeof sel.speed == 'undefined'|| typeof sel.mspeed =='undefined'){return false}

            time = setTimeout(function(){banner.slideRun();},sel.speed);

            //设置正在运动
            //isRun = true;
        };

        /*this.slideEventEnd = function(){

            listObj.on('webkitTransitionEnd',function(){

                listObj.css('transition','')

                clearTimeout(time);

                //运动完毕
                isRun = false;

                var banner_ = dir == 'left' ? banner_w:-banner_w;

                for(var i=0;i<listObj.length;i++){    //判断当前是否为最后一个元素 如果是则把元素位置初始化

                    var le = listObj.eq(i).css('transform').split(',')[4];

                        le = Number(le.trim());

                    if(le == -banner_*(listObj.length-1)){

                        listObj.eq(i).css('transform','translateX('+banner_+'px)')
                    }
                }


                //运动完成间隔
                time = setTimeout(function(){
                    //如果鼠标在点击区则取消
                    if(pause){return}

                    banner.slideRun('left');

                },sel.speed);
            })

        };*/

        this.slideEvent = function(){

            that.find("[name='toggle']").on({

                'click':function(){

                    var direction = $(this).prop('class');

                        direction = direction == 'left' ? 'right' : 'left';

                        banner.slideRun(direction);
                },

                'mouseenter':function(){

                    pause = true;

                    clearTimeout(time);
                },

                'mouseleave':function(){

                    pause = false;

                    time = setTimeout(function(){

                        banner.slideRun('left');

                    },sel.speed);
                }

            })
        };

        this.btList = function(index){

            that.find('.label-list').css('backgroundColor',sel.listColor)

            that.find('.label-list').eq(index).css('backgroundColor',sel.nowColor)

        };


    }).apply(banner);


    banner.slideInit()

    //banner.slideEventEnd()

    //动画完毕间隔执行
    //banner.slideEvent();

    //setTimeout(function(){

        banner.slideRun('left');

    //},sel.speed)


}










