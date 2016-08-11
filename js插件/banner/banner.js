
;(function($){

    $.fn.banner = function(sel){

        var _this = this,num = 0,time,banner = {};

        var css3 = false;

        var banner_w = $(this).parents('.banner').width();

        (function(obj){

            this.fade = function(){

                clearInterval(time);

                if(obj.is(":animated")){return}

                if(num==obj.length-1){num = 0;}else{num = num+1;}       //判断是否循环到最后一个

                for(var i=0;i<obj.length;i++){

                    if(i==num){continue};

                    if(css3==true){                                     //若支持优先使用CSS3

                        obj.eq(i).css({opacity:0});

                    }else{                                              //否则使用jquery

                        obj.eq(i).animate({opacity:0},sel.mspeed);

                    }

                }

                if(css3==true){obj.eq(num).css({opacity:1});

                }else{

                    obj.eq(num).animate({opacity:1},sel.mspeed);

                    banner.btlist(num)
                }

                if(typeof sel.speed == 'undefined'|| typeof sel.mspeed =='undefined'){return false}

                time = setTimeout(function(){banner.fade();},sel.speed);

            };

            this.evtFade = function(){

                obj.parents('.banner').children('ul.ul-b').find('li').bind({

                    click:function(){

                        clearInterval(time);

                        if(obj.is(":animated")){return}

                        num = $(this).index()-1;           //获取底部的Index

                        banner.fade();

                    },

                    mouseenter:function(){ clearInterval(time) },

                    mouseleave:function(){ time = setTimeout(function(){banner.fade()},sel.speed) }

                });

                obj.parents('.banner').children('div').bind({              //左右点击按钮切换

                    click:function(){

                        if(obj.is(":animated")){return}

                        //obj.stop();

                        var direction = $(_this).attr('name');           //判断左右方向进行循环

                        if(direction == 'left'){

                            if(num==0){num=obj.length-1;}else{num = num-1;}

                        }else if(direction == 'right'){

                            if(num==obj.length-1){num=0;}else{num = num+1;}

                        }

                        banner.fade();

                    },

                    mouseenter:function(){ clearInterval(time); },

                    mouseleave:function(){ time = setTimeout(function(){banner.fade();},sel.speed) }

                });

            };

            this.slide = function(){

                //banner_w = obj.parents('.banner').width();

                $(_this).css('opacity',1);

                for(var i=0;i<obj.length;i++){

                    obj.eq(i).css({opacity:1,left:banner_w*i+'px'})

                }

            };

            this.slideRun = function(direction){

                clearTimeout(time);

                if(obj.is(":animated")){return}

                var banner_ = direction == 'left' ? banner_w:-banner_w;

                for(var i=0;i<obj.length;i++){                       //判断当前是否为最后一个元素 如果是则把元素位置初始化

                    if(obj.eq(i).css('left')==-banner_*(obj.length-1)+'px'){

                        obj.eq(i).css('left',banner_+'px');

                    }

                    var le = obj.eq(i).css('left');             //获取当前元素位置并向左运动

                    le = parseInt(le.substr(0,le.length-2));

                    le == banner_ ? banner.btlist(i) : false;

                    obj.eq(i).animate({left:le-banner_+'px'},sel.mspeed);

                }

                if(typeof sel.speed == 'undefined'|| typeof sel.mspeed =='undefined'){return false}

                time = setTimeout(function(){banner.slideRun('left');},sel.speed);

            };

            this.evtSlide = function(){

                obj.parents('.banner').children('div').bind({

                    click:function() {

                        if(obj.is(":animated")){return}

                        var direction = $(this).attr('name');      //判断向左还是向右

                            direction = direction == 'left' ? 'right' : 'left';

                            banner.slideRun(direction);

                        /*for(var i=0;i<obj.length;i++){

                            if(obj.eq(i).css('left')==left_right*(obj.length-1)+'px'){

                                obj.eq(i).css('left',-left_right+'px')

                            }

                            var le = obj.eq(i).css('left');

                            le = parseInt(le.substr(0,le.length-2));

                            obj.eq(i).animate({left:le+left_right+'px'},sel.mspeed);

                        }*/

                    },

                    mouseleave:function(){ time = setTimeout(function(){banner.slideRun('left');},sel.speed) },

                    mouseenter:function(){ clearTimeout(time) }

                });

            }

            this.btlist = function(index){

                obj.parent().next().find('li').css('backgroundColor',sel.listColor);

                obj.parent().next().find('li').eq(index).css('backgroundColor',sel.nowColor);

            };

        }).apply(banner,[_this]);

        function runResize(){

            //$(this).css('transition','');

            if(sel.style=='fade'){

                num = 0;

                if(css3==true){ obj.css('transition','all '+sel.mspeed/1000+'s');}

                banner.evtFade();    // 添加事件banner事件

                time = setTimeout(function(){banner.fade();},sel.speed);

            }else if(sel.style=='slide'){

                banner.slide();

                banner.evtSlide();

                time = setTimeout(function(){banner.slideRun('left');},sel.speed);

                //time = setInterval(function(){banner.slideRun('left');},sel.speed);

                $(window).resize(function(){banner_w = $(window).width(); banner.slide();})

            }
        }

        runResize();

    }

})(jQuery);









