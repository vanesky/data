
;(function($){

    $.fn.banner = function(sel){

        var _this = this,num = 0,time,banner = {};
        //时间所需宽
        var banner_w = $(this).parents('.banner').width();

        (function(obj){

            this.slide = function(){

                banner_w = obj.parents('.banner').width();

                for(var i=0;i<obj.length;i++){

                    obj.eq(i).css({

                        'opacity':1,

                        'transform':'translate('+banner_w*i+'px)'

                    })

                }

            };

            this.slideRun = function(direction){

                //var banner_ = banner_w;

                //if(direction == 'right'){ banner_ = -banner_w;}

                var banner_ = direction == 'left'? banner_w : -banner_w;

                for(var i=0;i<obj.length;i++){                      //判断当前是否为最后一个元素 如果是则把元素位置初始化

                    //var tsle = obj.eq(i).css('transform').split(', ')[4];

                    //var elst = Number(obj.eq(i).css('transform').match(/\((.+)px\)/)[1]);

                    var tranObj = obj.eq(i)[0];

                    var x = window.getComputedStyle(tranObj,null)['transform'].split(', ')[4];

                    if(x==-banner_*(obj.length-1)){
                                                                    //alert('ss')
                        obj.eq(i).css('transition','');

                        obj.eq(i).css('transform','translate('+banner_+'px)');

                    }

                    //var le = obj.eq(i).css('transform').split(', ')[4];

                    //var le2 = obj.eq(i).css('transform').match(/\((.+)px\)/)[1];

                    var tranObjIng = obj.eq(i)[0];

                    var xIng = window.getComputedStyle(tranObjIng,null)['transform'].split(', ')[4];

                    xIng == banner_ ? banner.btlist(i) : false;

                    //循环表
                    obj.eq(i).css({

                        'transition':'all '+sel.mspeed/1000+'s',

                        'transform':'translate('+(xIng-banner_)+'px)'

                    });

                }
                if(typeof sel.speed == 'undefined'|| typeof sel.mspeed =='undefined'){return false}

                time = setTimeout(function(){banner.slideRun();},sel.speed);
            };

            this.evtSlide = function(){

                //var hammertime = new Hammer(obj.parent('ul')[0]);

                var startTime = '',movex = '',movexIng = '';

                obj.parent('ul')[0].addEventListener('touchstart',function(e){

                    startTime = new Date().getTime();

                    movex = e.touches[0].clientX;

                    clearInterval(time);

                    obj.css('transition','');

                });

                obj.parent('ul')[0].addEventListener('touchmove',function(e){

                    movexIng = e.touches[0].clientX;

                })

                obj.parent('ul')[0].addEventListener('touchend',function(e){

                    var difference = new Date().getTime() - startTime;

                    if(difference<250&&movexIng-movex<0){

                        //console.log('left')

                        banner.slideRun('left');

                    }
                    else if(difference<250&&movexIng-movex>0){

                        //console.log('right');

                        banner.slideRun('right');

                    }

                });

                //hammertime.on('swipeleft', function(){

                    //banner.slideRun('left');

                //});

                //hammertime.on('swiperight', function(){

                    //banner.slideRun('right')

                //});

            };

            this.btlist = function(index){

                obj.parent().next().find('li').css('backgroundColor',sel.listColor);

                obj.parent().next().find('li').eq(index).css('backgroundColor',sel.nowColor);

            };

        }).apply(banner,[_this]);

        function runResize(){

                banner.slide();

                banner.evtSlide();

                if(typeof sel.speed == 'undefined'|| typeof sel.mspeed =='undefined'){return}

                time = setTimeout(function(){banner.slideRun('left');},sel.speed);

                //$(window).resize(function(){ banner.slide();})

        }
        runResize();
    }

})(Zepto);









