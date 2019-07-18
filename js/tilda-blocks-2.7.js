function t132_unifyHeights(){$('.t132__box').children('.t132__wrappper').each(function(){$(this).children('a').children('div').css('width',$(this).outerWidth()-1);$(this).children('a').children('div').css('height',$(this).outerHeight()-40)})}
function t190_scrollToTop(){$('html, body').animate({scrollTop:0},700)}
function t466_highlight(){var url=window.location.href;var pathname=window.location.pathname;if(url.substr(url.length-1)=="/"){url=url.slice(0,-1)}
if(pathname.substr(pathname.length-1)=="/"){pathname=pathname.slice(0,-1)}
if(pathname.charAt(0)=="/"){pathname=pathname.slice(1)}
if(pathname==""){pathname="/"}
$(".t466__item a[href='"+url+"']").addClass("t-active");$(".t466__item a[href='"+url+"/']").addClass("t-active");$(".t466__item a[href='"+pathname+"']").addClass("t-active");$(".t466__item a[href='/"+pathname+"']").addClass("t-active");$(".t466__item a[href='"+pathname+"/']").addClass("t-active");$(".t466__item a[href='/"+pathname+"/']").addClass("t-active")}
function t466_checkAnchorLinks(recid){if($(window).width()>=960){var t466_navLinks=$("#rec"+recid+" .t466__menu a:not(.tooltipstered)[href*='#']");if(t466_navLinks.length>0){t466_catchScroll(t466_navLinks)}}}
function t466_catchScroll(t466_navLinks){var t466_clickedSectionId=null,t466_sections=new Array(),t466_sectionIdTonavigationLink={},t466_interval=100,t466_lastCall,t466_timeoutId,t466_offsetTop=$(".t466").attr("data-offset-top");if(typeof t466_offsetTop=="undefined"){t466_offsetTop=0}
t466_navLinks=$(t466_navLinks.get().reverse());t466_navLinks.each(function(){var t466_cursection=t466_getSectionByHref($(this));if(typeof t466_cursection.attr("id")!="undefined"){t466_sections.push(t466_cursection)}
t466_sectionIdTonavigationLink[t466_cursection.attr("id")]=$(this)});t466_highlightNavLinks(t466_navLinks,t466_sections,t466_sectionIdTonavigationLink,t466_clickedSectionId,t466_offsetTop);t466_navLinks.click(function(){if(!$(this).hasClass("tooltipstered")){t466_navLinks.removeClass('t-active');t466_sectionIdTonavigationLink[t466_getSectionByHref($(this)).attr("id")].addClass('t-active');t466_clickedSectionId=t466_getSectionByHref($(this)).attr("id")}});$(window).scroll(function(){var t466_now=new Date().getTime();if(t466_lastCall&&t466_now<(t466_lastCall+t466_interval)){clearTimeout(t466_timeoutId);t466_timeoutId=setTimeout(function(){t466_lastCall=t466_now;t466_clickedSectionId=t466_highlightNavLinks(t466_navLinks,t466_sections,t466_sectionIdTonavigationLink,t466_clickedSectionId,t466_offsetTop)},t466_interval-(t466_now-t466_lastCall))}else{t466_lastCall=t466_now;t466_clickedSectionId=t466_highlightNavLinks(t466_navLinks,t466_sections,t466_sectionIdTonavigationLink,t466_clickedSectionId,t466_offsetTop)}})}
function t466_getSectionByHref(curlink){if(curlink.is('[href*="#rec"]')){return $(".r[id='"+curlink.attr("href").substring(1)+"']")}
else{return $(".r[data-record-type='215']").has("a[name='"+curlink.attr("href").substring(1)+"']")}}
function t466_highlightNavLinks(t466_navLinks,t466_sections,t466_sectionIdTonavigationLink,t466_clickedSectionId,offsetTop){var t466_scrollPosition=$(window).scrollTop(),t466_valueToReturn=t466_clickedSectionId;$(t466_sections).each(function(e){var t466_curSection=$(this),t466_sectionTop=t466_curSection.offset().top,t466_id=t466_curSection.attr('id'),t466_navLink=t466_sectionIdTonavigationLink[t466_id];if(t466_scrollPosition>=(t466_sectionTop-offsetTop)||(t466_sections[0].attr("id")==t466_id&&$(window).scrollTop()>=$(document).height()-$(window).height())){if(t466_clickedSectionId==null&&!t466_navLink.hasClass('t-active')){t466_navLinks.removeClass('t-active');t466_navLink.addClass('t-active');t466_valueToReturn=null}else{if(t466_clickedSectionId!=null&&t466_id==t466_clickedSectionId){t466_valueToReturn=null}}
return!1}});return t466_valueToReturn}
function t466_initMobileMenu(recid){var window_width=$(window).width();var el=$("#rec"+recid);if(980>window_width){el.find(".t466").each(function(){$(this).find(".t466__mobile").css("top",$(this).find(".t466__container__bg_main").innerHeight()+2);$(this).find(".t466__burger, a[href*=#]").click(function(){if($(this).is(".tooltipstered, .t794__tm-link")){return}
$("body").toggleClass('t466_opened');$(this).closest(".t466").find(".t466__mobile").slideToggle(300)})})}
$('.t466').bind('clickedAnchorInTooltipMenu',function(){$('body').removeClass('t466_opened');$(this).closest(".t466").find(".t466__mobile").slideUp(300)})}
function t466_appearMenu(recid){var window_width=$(window).width();var record=$("#rec"+recid);record.find(".t466").each(function(){var el=$(this);var appearoffset=el.attr("data-appearoffset");if(appearoffset!=""){if(appearoffset.indexOf('vh')>-1){appearoffset=Math.floor((window.innerHeight*(parseInt(appearoffset)/100)))}
appearoffset=parseInt(appearoffset,10);if($(window).scrollTop()>=appearoffset){if(el.hasClass('t466__beforeready')){el.removeClass('t466__beforeready')}}else{el.addClass('t466__beforeready')}}})}
function t466_changeBgOpacityMenu(recid){var window_width=$(window).width();var record=$("#rec"+recid);record.find(".t466__container__bg").each(function(){var el=$(this);var bgcolor=el.attr("data-bgcolor-rgba");var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");var bgopacity=el.attr("data-bgopacity");var bgopacity_afterscroll=el.attr("data-bgopacity2");var menu_shadow=el.attr("data-menu-shadow");if($(window).scrollTop()>20){el.css("background-color",bgcolor_afterscroll);if(bgopacity_afterscroll!="0"&&bgopacity_afterscroll!="0.0"){el.css('box-shadow',menu_shadow)}else{el.css('box-shadow','none')}}else{el.css("background-color",bgcolor);if(bgopacity!="0"&&bgopacity!="0.0"){el.css('box-shadow',menu_shadow)}else{el.css('box-shadow','none')}}})}
function t505__createPieChart(recid,data1,data2,data3,data4,sectorcolor,piebgcolor,bgcolor,blocksnumber,diagramwidth,diameter){if(diameter>300||diameter==""||diameter<100){if(diameter==""){var t505__radius=100;diameter=200}
if(diameter>300){var t505__radius=150;diameter=300}
if(diameter<100){var t505__radius=50;diameter=100}}else{var t505__radius=diameter/2}
if(diagramwidth==""){diagramwidth=10}
if(diagramwidth>t505__radius){diagramwidth=10}
if(diagramwidth<1){diagramwidth=1}
if(window.devicePixelRatio>=2){var t505__oldsize=diameter;t505__radius=t505__radius*2;diameter=diameter*2;diagramwidth=diagramwidth*2}
var t505__correction=+diagramwidth/2;var t505__dataarray=[data1,data2,data3,data4];for(var i=0;i<4;i++){if(t505__dataarray[i]!=""&&blocksnumber>i){var t505__canvas=document.querySelector('#rec'+recid+' .t505__pie'+(i+1));t505__canvas.setAttribute("width",diameter);t505__canvas.setAttribute("height",diameter);var t505__context=t505__canvas.getContext("2d");if(window.devicePixelRatio>=2){t505__canvas.style.width=t505__oldsize+"px";t505__canvas.style.height=t505__oldsize+"px"}
for(var j=0;j<2;j++){if(j==1&&t505__dataarray[i]==0){continue}
if(j==0){t505__context.strokeStyle=piebgcolor;var t505__angle=Math.PI*2;t505__context.lineWidth=diagramwidth-1}else{t505__context.strokeStyle=sectorcolor;var t505__angle=Math.PI*2*(t505__dataarray[i]/100);t505__context.lineWidth=diagramwidth}
t505__context.beginPath();t505__context.lineCap="round";t505__context.moveTo(diameter-t505__correction,t505__radius);t505__context.arc(t505__radius,t505__radius,t505__radius-t505__correction,0,t505__angle,!1);t505__context.stroke()}}}}
function t576_init(recid){var el=$('#rec'+recid),line=el.find('.t576__line'),cirqle=el.find('.t576__cicqle'),block=el.find('.t576__item'),t576_resize;block.each(function(){$(this).find('.t576__circle').css('top',$(this).find('.t576__img').outerHeight()+15)});el.find('.t576__item:first-child').find('.t576__line').css('top',el.find('.t576__item:first-child').find('.t576__img').outerHeight()+15);el.find('.t576__item:last-child').find('.t576__line').css('height',el.find('.t576__item:last-child').find('.t576__img').outerHeight()+20)}
function t635_init(recid){t635_startType(recid)}
function t635_startType(recid){var t635_el=$('#rec'+recid),t635_data=t635_el.find(".t635__textholder"),t635_animRecId=t635_data.attr("data-recid"),t635_animText=t635_findAnimElem(t635_animRecId),t635_phrasesList=[],t635_phrase1=t635_data.attr("data-text1"),t635_phrase2=t635_data.attr("data-text2"),t635_phrase3=t635_data.attr("data-text3"),t635_phrase4=t635_data.attr("data-text4"),t635_phrase5=t635_data.attr("data-text5"),t635_speed=t635_data.attr("data-speed"),t635_loop=t635_data.attr("data-loop"),t635_backspaceDelay=t635_data.attr("data-backspacing-delay");if(typeof t635_animText=="undefined"){return}
if(typeof t635_phrase1!="undefined"){t635_phrasesList.push(t635_phrase1.slice(0,80))}
if(typeof t635_phrase2!="undefined"){t635_phrasesList.push(t635_phrase2.slice(0,80))}
if(typeof t635_phrase3!="undefined"){t635_phrasesList.push(t635_phrase3.slice(0,80))}
if(typeof t635_phrase4!="undefined"){t635_phrasesList.push(t635_phrase4.slice(0,80))}
if(typeof t635_phrase5!="undefined"){t635_phrasesList.push(t635_phrase5.slice(0,80))}
if(t635_animText.length!=0&&t635_phrasesList.length!=0){var t635_animTextHtml=t635_animText.html(),t635_animTextSplitted=t635_animTextHtml.split("|"),t635_curWin=$(window);t635_animText.html(t635_animTextSplitted[0]+"<span class=\"t635__typing-text\"></span>"+t635_animTextSplitted[1]);t635_updateAnimTextLimits(t635_animRecId);t635_curWin.bind('resize',t_throttle(function(){t635_updateAnimTextLimits(t635_animRecId)},200));setInterval(function(){t635_updateAnimTextLimits(t635_animRecId)},5000);var t635_animatedText=$("#rec"+t635_animRecId+" .t635__typing-text"),t635_animTextTop=t635_animatedText.attr("data-top-limit"),t635_animTextBottom=t635_animatedText.attr("data-bottom-limit"),t635_winTop=t635_curWin.scrollTop(),t635_winBottom=t635_winTop+t635_curWin.height();t635_animateText(t635_animRecId,t635_phrasesList,t635_speed,t635_loop,t635_backspaceDelay);if(t635_animTextBottom<t635_winTop||t635_animTextTop>t635_winBottom){$("#rec"+t635_animRecId+" .t635__typing-text").data('typed').pauseTyping();$("#rec"+t635_animRecId+" .t635__typing-text").html("")}
t635_curWin.bind('scroll',t_throttle(function(){t635_animTextTop=t635_animatedText.attr("data-top-limit");t635_animTextBottom=t635_animatedText.attr("data-bottom-limit");t635_winTop=t635_curWin.scrollTop();t635_winBottom=t635_winTop+t635_curWin.height();if(t635_animTextBottom<t635_winTop||t635_animTextTop>t635_winBottom){$("#rec"+t635_animRecId+" .t635__typing-text").data('typed').pauseTyping();$("#rec"+t635_animRecId+" .t635__typing-text").html("")}else{$("#rec"+t635_animRecId+" .t635__typing-text").data('typed').continueTyping()}},200))}}
function t635_findAnimElem(animRecId){var animRec=$("#rec"+animRecId);var animH1=animRec.find("h1:contains(\'|\')").last();var animH2=animRec.find("h2:contains(\'|\')").last();var animH3=animRec.find("h3:contains(\'|\')").last();var animDiv=animRec.find("div:contains(\'|\')").last();if(typeof animH1!="undefined"&&animH1.length>0){return animH1}
if(typeof animH2!="undefined"&&animH2.length>0){return animH2}
if(typeof animH3!="undefined"&&animH3.length>0){return animH3}
if(typeof animDiv!="undefined"&&animDiv.length>0){return animDiv}}
function t635_updateAnimTextLimits(t635_animRecId){var t635_animatedBlock=$("#rec"+t635_animRecId),t635_animatedText=t635_animatedBlock.find(".t635__typing-text");t635_animatedText.attr("data-top-limit",t635_animatedText.offset().top);t635_animatedText.attr("data-bottom-limit",(t635_animatedBlock.offset().top+t635_animatedBlock.height()))}
function t635_animateText(t635_animRecId,t635_phrasesList,t635_speed,t635_loop,t635_backspaceDelay){if(typeof t635_speed=="undefined"){t635_speed=40}
if(typeof t635_backspaceDelay=="undefined"){t635_backspaceDelay=800}
if(typeof t635_loop=="undefined"){t635_loop=!0}else{t635_loop=!1}
$("#rec"+t635_animRecId+" .t635__typing-text").typed({strings:t635_phrasesList,typeSpeed:t635_speed*1,startDelay:600,backSpeed:10,backDelay:t635_backspaceDelay*1,loop:t635_loop,contentType:'text'})}
function t698_fixcontentheight(id){var el=$("#rec"+id);var hcover=el.find(".t-cover").height();var hcontent=el.find("div[data-hook-content]").outerHeight();if(hcontent>300&&hcover<hcontent){var hcontent=hcontent+120;if(hcontent>1000){hcontent+=100}
console.log('auto correct cover height: '+hcontent);el.find(".t-cover").height(hcontent);el.find(".t-cover__filter").height(hcontent);el.find(".t-cover__carrier").height(hcontent);el.find(".t-cover__wrapper").height(hcontent);if($isMobile==!1){setTimeout(function(){var divvideo=el.find(".t-cover__carrier");if(divvideo.find('iframe').length>0){console.log('correct video from cover_fixcontentheight');setWidthHeightYoutubeVideo(divvideo,hcontent+'px')}},2000)}}}
function t698_onSuccess(t698_form){var t698_inputsWrapper=t698_form.find('.t-form__inputsbox');var t698_inputsHeight=t698_inputsWrapper.height();var t698_inputsOffset=t698_inputsWrapper.offset().top;var t698_inputsBottom=t698_inputsHeight+t698_inputsOffset;var t698_targetOffset=t698_form.find('.t-form__successbox').offset().top;if($(window).width()>960){var t698_target=t698_targetOffset-200}else{var t698_target=t698_targetOffset-100}
if(t698_targetOffset>$(window).scrollTop()||($(document).height()-t698_inputsBottom)<($(window).height()-100)){t698_inputsWrapper.addClass('t698__inputsbox_hidden');setTimeout(function(){if($(window).height()>$('.t-body').height()){$('.t-tildalabel').animate({opacity:0},50)}},300)}else{$('html, body').animate({scrollTop:t698_target},400);setTimeout(function(){t698_inputsWrapper.addClass('t698__inputsbox_hidden')},400)}
var successurl=t698_form.data('success-url');if(successurl&&successurl.length>0){setTimeout(function(){window.location.href=successurl},500)}}
function t718_onSuccess(t718_form){var t718_inputsWrapper=t718_form.find('.t-form__inputsbox');var t718_inputsHeight=t718_inputsWrapper.height();var t718_inputsOffset=t718_inputsWrapper.offset().top;var t718_inputsBottom=t718_inputsHeight+t718_inputsOffset;var t718_targetOffset=t718_form.find('.t-form__successbox').offset().top;if($(window).width()>960){var t718_target=t718_targetOffset-200}else{var t718_target=t718_targetOffset-100}
if(t718_targetOffset>$(window).scrollTop()||($(document).height()-t718_inputsBottom)<($(window).height()-100)){t718_inputsWrapper.addClass('t718__inputsbox_hidden');setTimeout(function(){if($(window).height()>$('.t-body').height()){$('.t-tildalabel').animate({opacity:0},50)}},300)}else{$('html, body').animate({scrollTop:t718_target},400);setTimeout(function(){t718_inputsWrapper.addClass('t718__inputsbox_hidden')},400)}
var successurl=t718_form.data('success-url');if(successurl&&successurl.length>0){setTimeout(function(){window.location.href=successurl},500)}}
function t796_init(recid){var el=$("#rec"+recid);var shapeEl=el.find(".t796__shape-border");var recs=el.find(".t796").attr("data-shape-rec-ids");if(typeof recs!="undefined"){recs=recs.split(",");recs.forEach(function(rec_id,i,arr){var curRec=$("#rec"+rec_id);var curShapeEl=shapeEl.clone();t796_setColor(el,curShapeEl);t796_addDivider(curRec,curShapeEl)})}else{if(shapeEl.hasClass('t796__shape-border_top')||shapeEl.hasClass('t796__shape-border_top-flip')){var curRec=el.next(".r");if(curRec.attr("data-record-type")=="215"||curRec.attr("data-record-type")=="706"){curRec=curRec.next(".r")}}
if(shapeEl.hasClass('t796__shape-border_bottom')||shapeEl.hasClass('t796__shape-border_bottom-flip')){var curRec=el.prev(".r");if(curRec.attr("data-record-type")=="215"||curRec.attr("data-record-type")=="706"){curRec=curRec.prev(".r")}}
if(curRec.length!=0){var curShapeEl=shapeEl.clone();t796_setColor(el,curShapeEl);t796_addDivider(curRec,curShapeEl)}}}
function t796_addDivider(curRec,curShapeEl){curRec.attr("data-animationappear","off").removeClass('r_hidden');var coverWrapper=curRec.find(".t-cover");var zeroWrapper=curRec.find(".t396");if(coverWrapper.length>0||zeroWrapper.length>0){if(coverWrapper.length>0){coverWrapper.find(".t-cover__filter").after(curShapeEl)}
if(zeroWrapper.length>0){zeroWrapper.after(curShapeEl);curRec.css("position","relative")}
curShapeEl.css("display","block")}else{var wrapper=curRec;var curRecType=curRec.attr("data-record-type");if(wrapper.length==0){return!0}
wrapper.append(curShapeEl);wrapper.css("position","relative");if(curRecType!="554"&&curRecType!="125"){wrapper.children("div").first().css({"position":"relative","z-index":"1"}).addClass("t796_cont-near-shape-divider")}
if(curRecType=="734"||curRecType=="675"||curRecType=="279"||curRecType=="694"){curShapeEl.css("z-index","1")}
curShapeEl.css("display","block")}}
function t796_setColor(el,curShapeEl){if(typeof curShapeEl.attr("data-fill-color")!="undefined"){return}
if(curShapeEl.hasClass("t796__shape-border_bottom")||curShapeEl.hasClass("t796__shape-border_bottom-flip")){var nearestBlock=el.next(".r")}else{var nearestBlock=el.prev(".r")}
if(nearestBlock.length==0){return}
var fillColor=nearestBlock.attr("data-bg-color");if(typeof fillColor=="undefined"){return}
curShapeEl.find(".t796__svg").css("fill",fillColor)}
function t823_onSuccess(form){var inputsWrapper=form.find('.t-form__inputsbox');var inputsHeight=inputsWrapper.height();var inputsOffset=inputsWrapper.offset().top;var inputsBottom=inputsHeight+inputsOffset;var targetOffset=form.find('.t-form__successbox').offset().top;if($(window).width()>960){var target=targetOffset-200}else{var target=targetOffset-100}
if(targetOffset>$(window).scrollTop()||($(document).height()-inputsBottom)<($(window).height()-100)){inputsWrapper.addClass('t823__inputsbox_hidden');setTimeout(function(){if($(window).height()>$('.t-body').height()){$('.t-tildalabel').animate({opacity:0},50)}},300)}else{$('html, body').animate({scrollTop:target},400);setTimeout(function(){inputsWrapper.addClass('t823__inputsbox_hidden')},400)}
var successurl=form.data('success-url');if(successurl&&successurl.length>0){setTimeout(function(){window.location.href=successurl},500)}}
function t826_init(recid){t826_startAnimation(recid);var t826__smartResize;window.addEventListener("resize",function(){if(!$isMobile){clearTimeout(t826__smartResize);t826__smartResize=setTimeout(function(){$("div:not(.t826__animation) > div[data-galaxy-id="+recid+"]").remove();t826_startAnimation(recid)},500)}},!1);window.addEventListener("orientationchange",function(){if($isMobile){clearTimeout(t826__smartResize);t826__smartResize=setTimeout(function(){$("div:not(.t826__animation) > div[data-galaxy-id="+recid+"]").remove();t826_startAnimation(recid)},500)}},!1);$('.t826').bind('displayChanged',function(){$("div:not(.t826__animation) > div[data-galaxy-id="+recid+"]").remove();t826_startAnimation(recid)})}
function t826_startAnimation(recid){var el=$("#rec"+recid);var GalaxyEl=el.find(".t826__galaxy");var wr=el.find(".t826");var recs=wr.attr("data-galaxy-rec-ids");var wholepage=wr.attr("data-galaxy-whole-page");var vertFlip=wr.attr("data-galaxy-vflip");var color=wr.attr("data-element-color");var opacity=wr.attr("data-element-opacity");var options={'color':(color===""?"255, 255, 255":color),'opacity':(opacity===""?1:opacity)};if(vertFlip==="yes"){GalaxyEl.addClass("t826__galaxy_flip")}
if($("#allrecords").attr("data-tilda-mode")==="edit"){t826_addAnimation(el.find(".t826__demo"),GalaxyEl,options);return}
if(typeof recs!=="undefined"){recs=recs.split(",");recs.forEach(function(rec,index,array){var curRec=$("#rec"+rec);var curGalaxyEl=GalaxyEl.clone().css("position","absolute");t826_addAnimation(curRec,curGalaxyEl,options)})}else{var nextBlock=el.next(":has(.t-cover)");var prevBlock=el.prev(":has(.t-cover)");var curGalaxyEl=GalaxyEl.clone().css("position","absolute");if(nextBlock.length!==0){t826_addAnimation(nextBlock,curGalaxyEl,options)}else if(prevBlock.length!==0){t826_addAnimation(prevBlock,curGalaxyEl,options)}}
if(wholepage==="yes"){el.find(".t826__animation").css("display","block");t826_addAnimation($("#allrecords"),GalaxyEl.css("position","fixed"),options)}}
function t826_addAnimation(curRec,GalaxyEl,options){curRec.attr("data-animationappear","off").removeClass('r_hidden');var curRecType=curRec.attr("data-record-type");var curRecId=curRec.attr("id");if(curRecType==="396"){curRec.find(".t396__filter").after(GalaxyEl);GalaxyEl.css("z-index","0")}else if(curRecId==="allrecords"){GalaxyEl.css("z-index","-1")}else{var coverWrapper=curRec.find(".t-cover");if(coverWrapper.length>0){coverWrapper.find(".t-cover__filter").after(GalaxyEl);GalaxyEl.css("z-index","0")}else{var wrapper=curRec;if(wrapper.length==0){return!0}
wrapper.append(GalaxyEl);wrapper.css("position","relative");wrapper.children("div").first().css({"position":"relative","z-index":"1"});if(curRecType=="734"||curRecType=="675"){return}
GalaxyEl.css("z-index","0")}}
t826_runningAnimation(curRec,options)}
function t826_runningAnimation(curRec,options){var starsSetting=[{name:"near",count:100,speed:50},{name:"mid",count:200,speed:100},{name:"far",count:700,speed:150}];var curRecId=curRec.attr("id");var maxHeight=curRec.outerHeight();var maxWidth=curRec.outerWidth();if(typeof curRecId==="undefined"){curRecId="demo"}else if(curRecId==="allrecords"){maxHeight=$(window).height();maxWidth=$(window).width()}
var animationName="t826__galaxy-"+curRecId;curRec.find("#"+animationName).remove();var newStyle=document.createElement("style");newStyle.type="text/css";newStyle.id=animationName;newStyle.innerHTML="@keyframes "+animationName+" {"+"to {"+"transform: translateY("+(-maxHeight)+"px);"+"}"+"}";if(options.color==="#ffffff")options.color="#fff";starsSetting.forEach(function(value,index,array){var x=Math.round(Math.random()*maxHeight);var y=Math.round(Math.random()*maxWidth);var dot="";if(options.opacity<1){dot=x+"px "+y+"px rgba("+options.color+","+options.opacity+")"}else{dot=x+"px "+y+"px rgb("+options.color+")"}
var countDots=Math.round(array[index].count*maxHeight/2000);for(var i=0;i<countDots;i++){var x=Math.round(Math.random()*maxWidth);var y=Math.round(Math.random()*maxHeight);if(options.opacity<1){dot+=", "+x+"px "+y+"px rgba("+options.color+","+options.opacity+")";dot+=", "+x+"px "+(y+maxHeight)+"px rgba("+options.color+","+options.opacity+")"}else{dot+=", "+x+"px "+y+"px rgb("+options.color+")";dot+=", "+x+"px "+(y+maxHeight)+"px rgb("+options.color+")"}}
var animationDuration=Math.round(array[index].speed*maxHeight/2000);className="t826__galaxy-"+array[index].name+"-"+curRecId;newStyle.innerHTML+="."+className+":after, ."+className+" {"+"box-shadow: "+dot+";"+"animation-duration: "+animationDuration+"s;"+"animation-name: "+animationName+"} ."+className+":after {"+"content: ' ';"+"position: absolute;"+"top: "+maxHeight+"px"+"}";curRec.find(".t826__galaxy > .t826__galaxy-wrapper > .t826__galaxy-"+array[index].name).addClass(className)});curRec.prepend(newStyle);curRec.find(".t826__galaxy > .t826__galaxy-wrapper").css("animation-name","t826__galaxy-fadeIn")}