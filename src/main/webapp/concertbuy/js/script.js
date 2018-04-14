/*------------------------------------------------
Create By:			CaoNing
Create Time:		2014-05-28 10:00
*Filename:			script.js
*Version:			1.0.0.0
*Website:			http://www.damai.cn
*Page width:		1000px
------------------------------------------------*/
$(document).ready(function () {
    tab($('.login_layer'));
    function tab(obj) {
        obj.find('.tab li').click(function () {
            obj.find('.con').hide().end().find('.con').eq(obj.find('.tab > li').index(this)).show().end().end().find('li').removeClass('active').end().find(this).addClass('active');
        });
    };

});





$(document).ready(function () {
	var img=['m_login_active.png','m_ewm_active.png','m_message_active.png'];
	var account_txt=document.getElementById('account_txt');
	var account_share=document.getElementById('account_share');
	var tishi1=document.getElementById('tishi1');
	
    tab($('.account_con'));
    function tab(obj) {
        obj.find('.tab li').click(function () {
			var i=obj.find('.tab li').index(this);
            obj.find('.con').hide().end().find('.con').eq(obj.find('.tab > li').index(this)).show().end().end().find('li').removeClass('active').end().find(this).addClass('active');
			obj.find('span').css({'background-image':''});
			obj.find('span').eq($(this).index()).css({'background-image':'url(//dui.damai.cn/damai_v2/login_register3.0/images/new-pop/'+img[$(this).index()]+')'});
			if(i==0){
				tishi1.style.display='none';
				account_share.style.display='block';
				account_txt.style.display='block';
				
			}if(i==1){
				tishi1.style.display='none';
				account_share.style.display='none';
				account_txt.style.display='none';
				
			}
			if(i==2){
				account_share.style.display='none';
				account_txt.style.display='none';
				tishi1.style.display='block';
			}
        });
    };

});

$(document).ready(function () {
    tab($('.layer_infor'));
	var tishi=document.getElementById('tishi');
    function tab(obj) {
        obj.find('.tab li').click(function () {
			var i=obj.find('.tab li').index(this);
            obj.find('.con').hide().end().find('.con').eq(obj.find('.tab > li').index(this)).show().end().end().find('li').removeClass('active').end().find(this).addClass('active');
			if(i==1){
				tishi.style.display='block';
			}else{
				tishi.style.display='none';
			}
        });
    };

});




$(function(){	
	$(".text").focusin(function() {
         $(this).addClass('cor1');
		 if($(this).val()=='閭/鎵嬫満鍙�'){
			 $(this).val("");
		 }

    });
	$(".text").blur(function() {
         $(this).removeClass('cor1');
		 if($(this).val()==''){
			 $(this).val("");
		 }
    });	
		
	var oBtn = $('.change_btn');
	oBtn.toggle(function(){
		$('.change_login').css('display', 'none');
		$('.change_reg').css('display', 'block');
		
		$('.login_change').animate({ top: -404 }, 'normal');
	},function(){
		$('.change_reg').css('display', 'none');
		$('.change_login').css('display', 'block');
		
		$('.login_change').animate({ top: 0 }, 'normal');
	});
	
	$('.account_arrow').toggle(function(){
		$('.arrow_img').css('display', 'none');
		$('.account_box').css('display', 'none');
		$('.arrow_infor').css('display', 'block');
		$('.account_code').css('display', 'block');

	},function(){
		$('.arrow_infor').css('display', 'none');
		$('.account_code').css('display', 'none');
		$('.arrow_img').css('display', 'block');
		$('.account_box').css('display', 'block');
	});
	
})

/*鑷畾涔塸laceholder*/
$(function () {
    (function ($) {
        $.fn.placeHolder = function (options) {

            //瀹氫箟鍙傛暟榛樿鍊�
            var defaults = {
                value:" ",
                //defaults CSS
                defStyle:{
                    color:"#ccc",
                    fontSize:"12px",
                    left:0,
                    top:0,
                    zIndex:0
                },
                //focus css
                focStyle:{
                    color:"#ccc",
                    fontSize:"12px",
                    zIndex:0
                }
            }

            var opts = $.extend(defaults, options);

            return this.each(function () {
                var obj = $(this);
                var oriVal = obj.attr("phdata");
                opts.value = oriVal || opts.value;
                obj.parent().css({"position":"relative"});
                obj.before('<label for="' + obj.attr('name') + '"></label>');
                var label = obj.prev();

                if (obj.css("display") == "none" || obj.val() != "") {
                    label.css("display", "none")
                }

                //瀹氫箟杈撳叆妗嗛粯璁SS
                label.css({"position":"absolute", "top":opts.defStyle.top, "left":opts.defStyle.left, "cursor":"text", 'color':opts.defStyle.color, 'font-size':opts.defStyle.fontSize, "line-height":obj.outerHeight() + "px", "z-index":opts.defStyle.zIndex});
                $('textarea').prev().css({"line-height":"30px"});//瀹氫箟鐗规畩鐨則extarea
                obj.css({'border':opts.defStyle.border, 'background':opts.defStyle.background});

                label.click(function () {
                    obj.focus();
                });

                var timer = null; //鍒ゆ柇濡傛灉杩欎釜鍏冪礌blur浜嗗氨涓嶅啀鎵ц瀹氭椂鍣�
                obj.focus(
                    function () {

                        //璺熻釜鐢ㄦ埛杈撳叆浜嬩欢
                        var checkInputVal = function () {
                            if (obj.val() != "") {
                                label.css("display") != "none" && label.hide();
                            }
                            else {
                                label.css("display") == "none" && label.show();
                            }

                            if (obj.css("display") == "none") {
                                label.css("display", "none")
                            }
                        };
                        timer = setInterval(checkInputVal, 10);

                        obj.css({'font-size':opts.focStyle.fontSize, 'border':opts.focStyle.border, 'background':opts.focStyle.background});
                        label.css({'color':opts.focStyle.color, 'font-size':opts.focStyle.fontSize});

                    }).blur(function () {
                        clearInterval(timer);//鍒ゆ柇濡傛灉杩欎釜鍏冪礌blur浜嗗氨涓嶅啀鎵ц瀹氭椂鍣�
                        timer = null;

                        if (obj.val() == '') {
                            obj.css({'font-size':opts.defStyle.fontSize, 'border':opts.defStyle.border, 'background':opts.defStyle.background});
                            label.css({'color':opts.defStyle.color, 'font-size':opts.defStyle.fontSize});
                        } else {
                            obj.css({'font-size':opts.defStyle.fontSize, 'border':opts.defStyle.border, 'background':opts.defStyle.background});
                        }
                    });
                //鍒ゆ柇濡傛灉鍦╦s娌℃湁鍔犺浇鐨勬椂鍊欏厓绱犲凡缁廸ocus鐨刡ug
                if (obj.filter(":focus").length > 0) {
                    obj.filter(":focus").trigger("focus");
                }

            });

        };
    })(jQuery);

    //input榛樿鍊�
    $(".layer_text").placeHolder({
        defStyle:{
            color:"#c3c3c3",
            fontSize:"14px",
            left:"10px",
            top:"4px",
            zIndex:0
        },
        //focus css
        focStyle:{
            color:"#000",
            fontSize:"14px",
            zIndex:0
        }

    });
	
	//浠縎elect
	$(function(){
	  var oDivSelect = document.getElementById('select');
	  var oNow = oDivSelect.getElementsByTagName('h3')[0];
	  var oNowb = oNow.getElementsByTagName('b');
	  var oDivItem = oDivSelect.getElementsByTagName('div')[0];
	  var aItem = oDivSelect.getElementsByTagName('p');
	  var iNum = 0;
	  var iNow = 0;
	  var bFlag = false;
	  for(var i=0; i<aItem.length; i++)
	    {
	      aItem[i].index = i;
	      aItem[i].onmouseover = function () {
	      this.className = 'active';
		  
		}	
	      aItem[i].onmouseout = function () {
	      this.className = '';
		}
	      aItem[i].onclick = function () {
	      oNow.innerHTML = this.innerHTML;
	      iNow = this.index;
	      oDivItem.className = 'hide';
	      bFlag = false;
		  oNowb[0].style.display="none";
		  
	    }
		
	  }
      oDivSelect.onkeydown = function (ev) {
        var oEvent = ev || window.event;
        if(oEvent.keyCode == 13)
		{
          for(var i=0; i<aItem.length; i++)
          {
             if(aItem[i].className == 'active')
             {
               iNow = i;
             }
               oNow.innerHTML = aItem[iNow].innerHTML;
               oDivItem.className = 'hide';
             }
               bFlag = false;
		}	
        if(oEvent.keyCode == 40)
		{
           iNum++;
           if(iNum >= aItem.length)
           {
             iNum = 0;
             aItem[aItem.length-1].className = '';
           }
           else
           {
             aItem[iNum-1].className = '';
           }
             aItem[iNum].className = 'active';
		}
		if(oEvent.keyCode == 38)
		{
           iNum--;
           if(iNum < 0)
           {
             iNum = aItem.length-1;
             aItem[0].className = '';
           }
           else
           {
             aItem[iNum+1].className = '';
           }
             aItem[iNum].className = 'active';
		}
      }
      oNow.onclick = function (ev) {
        var oEvent = ev || window.event;
		bFlag = !bFlag;
		if(bFlag)
		{
           oDivItem.className = 'show';
           for(var i=0; i<aItem.length; i++)
           {
             aItem[i].className = '';
           }
             aItem[iNow].className = 'active';
		}
		else
		{
           oDivItem.className = 'hide';	
		}
		oEvent.cancelBubble = true;
      }
	  oDivItem.onclick = function (ev) {
		var oEvent = ev || window.event;		
		oEvent.cancelBubble = true;	
	  };
	  document.onclick = function () {
		oDivItem.className = 'hide';
		bFlag = false;
	  };
	  for(var i=0;i<oNowb.length;i++){
		 oNowb[i].style.display="none";
		 
	  }
	  oNowb[1].style.display="block";
	});

})






/* Modify By ChenXi Begin At 2015-12-08 10:32 */
$(document).ready(function () {
  auth('.m-captcha', function () {
    console.log('passed');
  });

  function auth(selector, passed, offset) {
    var $element = $(selector);
    var $bg = $element.find('.bg');
    var $btn = $element.find('.btn');

    var btn = null;
    var disX = 0;
    var left = 0;

    offset = offset === undefined ? 1 : offset;

    $element.on('mousedown', '.btn', down);

    function down(ev) {
      if ($element.hasClass('pass')) return;

      var ev = ev || window.event;

      left = 0;

      disX = ev.clientX - $(this).position().left;

      $(document).on('mousemove', move);

      $(document).on('mouseup', end);

      ev.preventDefault();
    }

    function move(ev) {
      if ($element.hasClass('pass')) return;

      var ev = ev || window.event;
      
      left = ev.clientX - disX;

      var bool = left + $btn.outerWidth(true) + offset > $element.width();

      if (left < -offset) left = -offset;

      if (bool) {
        left = $element.width() - $btn.outerWidth(true) + offset;
      }

      $bg.css({
        'width': left
      });

      $btn.css({
        'left': left
      });

      if (bool) {
        pass();
      }

      ev.preventDefault();
    }

    function end(ev) {
      $(document).off('mousemove', move);
      $(document).off('onmouseup', end);

      if (left !== $element.width() - $btn.outerWidth(true) + offset) {
        left = -offset;

        $bg.animate({
          'width': 0
        });

        $btn.animate({
          'left': -offset
        });
      }
    }

    function pass() {
      $element.addClass('pass');

      passed && passed();
    }
  }
});
/* Modify By ChenXi End At 2015-12-08 10:32 */