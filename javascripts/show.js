"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}}(),FeaturedContentPopOutWidget=function(){function e(t){_classCallCheck(this,e),this.configs=t,this.widget=$("#"+this.configs.widgetId),this.timerName="pop_out_shown",this.mobileRevealScrollEventHandler=this.mobileAutoRevealPopOut.bind(this),this.shouldRenderWidget()&&this.initialize()}return _createClass(e,[{key:"shouldRenderWidget",value:function(){var e=moment.tz(this.configs.startDate+" 00:00",this.configs.timezone),t=moment.tz(this.configs.endDate+" 23:59",this.configs.timezone),i=new Date(e.format()),o=new Date(t.format()),n=(new Date).getTime(),s=this.isValidDate(i)?i.getTime():n,a=this.isValidDate(o)?o.getTime():n;return n>=s&&n<=a?(this.widget.show(),!0):(this.widget.hide(),!1)}},{key:"isValidDate",value:function(e){return e instanceof Date&&!isNaN(e)}},{key:"initialize",value:function(){if(this.setBackgroundImage(),this.setListeners(),this.configs.bannerShownByDefault&&(this.widget.find(".featured-content-pop-out-aside").toggleClass("open"),this.widget.find(".reveal-btn").addClass("hidden")),"auto"!==this.configs.featuredContentPopOutType||this.isAutoRevealTimerSet()||this.setAutoReveal(),"100%"!==this.configs.bgColorOpacity){var e=this.hexToRgb(this.configs.bgColor);this.setBgColorOpacity(".featured-content-pop-out-aside",e,this.configs.bgColorOpacity)}if("overlay"===this.configs.bgEffect){var t=this.hexToRgb(this.configs.bgEffectOverlayColor);this.setBgColorOpacity(".featured-content-pop-out-overlay",t,this.configs.bgEffectOverlayOpacity)}if(""!==this.configs.bgOverlayColor){var i=this.hexToRgb(this.configs.bgOverlayColor);this.setBgColorOpacity(".featured-content-pop-out-wrapper-overlay",i,this.configs.bgOverlayOpacity)}this.widget.closest(".content-stripe-widget").addClass("absolute")}},{key:"autoRevealPopOut",value:function(){this.widget.not(".action-calls-activated")&&(this.toggleFeaturedContentPopOut(),this.setAutoRevealTimer())}},{key:"mobileAutoRevealPopOut",value:function(){$(document).scrollTop()>this.pageHeight*(this.configs.autoRevealScrollDistance/100)&&(this.autoRevealPopOut(),document.removeEventListener("scroll",this.mobileRevealScrollEventHandler))}},{key:"setAutoReveal",value:function(){var e=this;"delayed"===this.configs.autoRevealType&&(window.matchMedia("(max-width: "+this.configs.autoRevealMobileBreakpoint+"px)").matches?"false"===this.configs.autoRevealDisableMobile&&(this.pageHeight=$(document).height(),document.addEventListener("scroll",this.mobileRevealScrollEventHandler)):setTimeout(function(){e.autoRevealPopOut()},1e3*this.configs.autoRevealDelay)),"exit-intent"===this.configs.autoRevealType&&setTimeout(function(){$(document).on("mouseleave",function(t){t.clientY<0&&($(t.currentTarget).off("mouseleave"),e.autoRevealPopOut())})},2e3)}},{key:"setListeners",value:function(){var e=this,t=this.configs.customName?"."+this.configs.customNameClass:".featured-content-pop-out";$(".action-calls a"+t).on("click",function(){e.toggleFeaturedContentPopOut(),e.widget.addClass("action-calls-activated")}),this.widget.on("click",".reveal-btn, .close-btn, .featured-content-pop-out-overlay",function(){e.toggleFeaturedContentPopOut()}).on("click",".reveal-btn",function(){e.widget.find(".featured-content-pop-out-aside").focus()});var i='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',o=this.widget.find(i),n=o[0],s=o[o.length-1];$(document).on("keydown",function(t){27===t.keyCode&&e.toggleFeaturedContentPopOut(),13===t.keyCode&&document.activeElement===e.widget.find(".close-btn")[0]&&e.toggleFeaturedContentPopOut(),9===t.keyCode&&(t.shiftKey?document.activeElement===n&&(t.preventDefault(),s.focus()):document.activeElement===s&&(t.preventDefault(),n.focus()))})}},{key:"setBgEffect",value:function(){"blur"===this.configs.bgEffect&&$("header, #drop-target-main, footer").toggleClass("blur-effect")}},{key:"toggleFeaturedContentPopOut",value:function(){this.widget.find(".featured-content-pop-out-aside, .featured-content-pop-out-overlay").toggleClass("open"),this.setBgEffect(),this.setBgScrolling(),this.setRevealBtnVisibility()}},{key:"setBackgroundImage",value:function(){""!==this.configs.backgroundImageURL&&this.widget.find(".featured-content-pop-out-aside").css("background-image","url("+this.configs.backgroundImageURL+")")}},{key:"setBgColorOpacity",value:function(e,t,i){this.widget.find(e).css("background-color","rgba("+t[0]+", "+t[1]+", "+t[2]+", "+i+")")}},{key:"setBgScrolling",value:function(){"false"===this.configs.bgScrolling&&$("html").toggleClass("sc-no-scroll")}},{key:"setRevealBtnVisibility",value:function(){"100%"===this.configs.bgOverlayOpacity&&"100%"===this.configs.bgColorOpacity||this.widget.find(".reveal-btn").toggleClass("hidden")}},{key:"hexToRgb",value:function(e){var t=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,i,o){return"#"+t+t+i+i+o+o});return t.substring(1).match(/.{2}/g).map(function(e){return parseInt(e,16)})}},{key:"createCookie",value:function(e,t,i){var o="",n=new Date;n.setTime(n.getTime()+60*i*60*1e3),o="; expires="+n.toGMTString(),document.cookie=e+"="+t+o+"; path=/"}},{key:"getCookie",value:function(e){for(var t=e+"=",i=document.cookie.split(";"),o=0;o<i.length;o++){for(var n=i[o];" "==n.charAt(0);)n=n.substring(1,n.length);if(0===n.indexOf(t))return n.substring(t.length,n.length)}return null}},{key:"eraseCookie",value:function(e){this.createCookie(e,"",-1)}},{key:"checkCookie",value:function(){return"true"===this.getCookie(this.timerName)}},{key:"checkUserSession",value:function(){return"true"===sessionStorage.getItem(this.timerName)}},{key:"eraseUserSession",value:function(){localStorage.removeItem(this.timerName)}},{key:"setAutoRevealTimer",value:function(){"user-session"===this.configs.autoRevealTimer&&sessionStorage.setItem(this.timerName,"true"),"cookie"===this.configs.autoRevealTimer&&this.createCookie(this.timerName,"true",this.configs.cookieExpiration)}},{key:"isAutoRevealTimerSet",value:function(){return"user-session"===this.configs.autoRevealTimer?(this.eraseCookie(this.timerName),this.checkUserSession()):"cookie"===this.configs.autoRevealTimer?(this.eraseUserSession(),this.checkCookie()):void 0}}]),e}();G5.loadWidgetConfigs(".featured-content-pop-out > .config",FeaturedContentPopOutWidget);