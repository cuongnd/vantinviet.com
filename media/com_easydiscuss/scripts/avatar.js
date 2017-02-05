EasyDiscuss.module("avatar",function(e){var t=this;EasyDiscuss.require().library("imgareaselect").done(function(e){EasyDiscuss.Controller("Avatar",{defaultOptions:{"{avatarContainer}":".avatarContainer","{avatar}":".avatarContainer img","{avatarPreviewContainer}":".avatarPreviewContainer","{avatarPreviewPlaceholder}":".avatarPreviewPlaceholder","{avatarPreview}":".avatarPreview","{startCropButton}":".startCropButton","{saveCropButton}":".saveCropButton","{stopCropButton}":".stopCropButton","{alertMessage}":".alertMessage",selection:{disable:!1,handles:!0,show:!0,minWidth:160,minHeight:160,x1:0,y1:0,x2:160,y2:160,previewWidth:160,previewHeight:160,aspectRatio:"1:1"}}},function(t){return{init:function(){t.avatarPreviewContainer().css({width:t.options.selection.previewWidth,height:t.options.selection.previewHeight,position:"relative",overflow:"hidden"}),t.avatarPreview().css({maxWidth:"none"})},start:function(){t.alertMessage().hide(),t.element.addClass("cropping");var n=t.options.selection,r=t.avatar(),i=t.avatarPreview(),s=r.width(),o=r.height(),u,a,f,l;t.selector=r.imgAreaSelect(e.extend({},n,{parent:t.avatarContainer(),instance:!0,x1:u=s/2-n.minWidth/2,y1:f=o/2-n.minHeight/2,x2:u+n.minWidth,y2:f+n.minHeight,onSelectChange:function(e,t){var r=n.previewWidth/(t.width||1),u=n.previewHeight/(t.height||1);i.css({width:Math.round(r*s)+"px",height:Math.round(u*o)+"px",marginLeft:"-"+Math.round(r*t.x1)+"px",marginTop:"-"+Math.round(u*t.y1)+"px"})}})),t.avatarPreviewPlaceholder().hide(),t.avatarPreview().show()},stop:function(){t.alertMessage().remove(),t.element.removeClass("cropping"),t.avatarPreview().hide(),t.avatarPreviewPlaceholder().show(),t.avatar().imgAreaSelect({hide:!0,disable:!0}),delete t.selector},save:function(){if(t.selector==undefined){t.stop();return}var n=t.selector.getSelection();t.saveCropButton().addClass("btn-loading"),EasyDiscuss.ajax("site.views.profile.cropphoto",n).done(function(n,r){t.stop(),t.avatarPreviewPlaceholder().attr("src",n+"?"+e.uid()),t.alert(r||"Avatar successfully cropped!","success")}).fail(function(e){t.alert(e||"Unable to crop avatar.","error")}).always(function(){t.saveCropButton().removeClass("btn-loading")})},alert:function(n,r){r===undefined&&(r="info"),t.alertMessage().remove(),e('<div class="alert alertMessage"></div>').addClass("alert-"+r).html(n).prependTo(t.element)},"{startCropButton} click":function(){t.start()},"{saveCropButton} click":function(){t.save()},"{stopCropButton} click":function(){t.stop()}}}),t.resolve()})});