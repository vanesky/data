
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

                    var tranObj = listObj.eq(i)[0];

                    var le = window.getComputedStyle(tranObj,null)['transform'].split(', ')[4];


                    if(le==-banner_*(listObj.length-1)){

                        listObj.eq(i).css('transform','translateX('+banner_+'px)');
                    }



                var tranObjIng = listObj.eq(i)[0];

                var leIng = window.getComputedStyle(tranObjIng,null)['transform'].split(', ')[4];


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

            var startTime = '',movex = '',movexIng = '';

            //var hammertime = new Hammer(main[0]);

            main[0].addEventListener('touchstart',function(e){

                clearInterval(time);

                startTime = new Date().getTime();

                movex = e.touches[0].clientX;

            })

            main[0].addEventListener('touchmove',function(e){

                movexIng = e.touches[0].clientX;

            })

            main[0].addEventListener('touchend',function(e){

                var timeout = new Date().getTime() - startTime;

                if(timeout<250&&movexIng&&movexIng-movex>0){

                    banner.slideRun('right');

                }else{
                    banner.slideRun('left');
                }
            })


            listObj.on('webkitTransitionEnd',function(){

                listObj.css('transition','');

                isRun = true;
            })

            //hammertime.on('swipeleft', function(){

            //banner.slideRun('left');

            //});

            //hammertime.on('swiperight', function(){

            //banner.slideRun('right')

            //});
        };

        this.btList = function(index){

            that.find('.label-list').css('backgroundColor',sel.listColor)

            that.find('.label-list').eq(index).css('backgroundColor',sel.nowColor)

        };


    }).apply(banner);


    banner.slideInit()

    banner.slideEvent();

    time = setTimeout(function(){

        banner.slideRun('left');

    },sel.speed)

    $(window).resize(function(){banner_w = $(window).width();  banner.slideInit();})
}










