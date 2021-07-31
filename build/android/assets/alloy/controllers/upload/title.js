var Alloy=require("/alloy"),
Backbone=Alloy.Backbone,
_=Alloy._;




function __processArg(obj,key){
var arg=null;



return obj&&(arg=obj[key]||null),arg;
}

function Controller(){














































































































































































































































































































































































function photo_cancel(){
$.activityIndicator.show();var

url=Alloy.Globals.backend+"/photocancel.json",
client=Ti.Network.createHTTPClient({
onload:function(e){
$.activityIndicator.hide(),
$.activityIndicator.height=0,
$.title.close();
},
onerror:function(e){
$.activityIndicator.hide(),
$.activityIndicator.height=0,
$.title.close();
},
timeout:2e4});

client.open("POST",url);
var content={
uuid:UUID,
token:TOKEN,
ids:JSON.stringify(uploaded)};

client.send(content);
}if(require("/alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="upload/title",this.args=arguments[0]||{},arguments[0])var __parentSymbol=__processArg(arguments[0],"__parentSymbol"),$model=__processArg(arguments[0],"$model"),__itemTemplate=__processArg(arguments[0],"__itemTemplate");var $=this,exports={},__defers={};$.__views.title=Ti.UI.createWindow({layout:"vertical",titleid:"photo_upload",id:"title",hidesBackButton:!0}),$.__views.title&&$.addTopLevelView($.__views.title),$.__views.__alloyId30=Ti.UI.createView({height:Ti.UI.FILL,id:"__alloyId30"}),$.__views.title.add($.__views.__alloyId30),$.__views.activityIndicator=Ti.UI.createActivityIndicator({hiddenBehavior:Titanium.UI.HIDDEN_BEHAVIOR_GONE,style:Ti.UI.ActivityIndicatorStyle.BIG,indicatorColor:"black",id:"activityIndicator"}),$.__views.__alloyId30.add($.__views.activityIndicator),$.__views.__alloyId31=Ti.UI.createScrollView({width:Ti.UI.FILL,scrollType:"vertical",layout:"vertical",id:"__alloyId31"}),$.__views.__alloyId30.add($.__views.__alloyId31),$.__views.photospace=Ti.UI.createView({height:Ti.UI.SIZE,layout:"vertical",id:"photospace"}),$.__views.__alloyId31.add($.__views.photospace),$.__views.other_space=Ti.UI.createView({height:Ti.UI.SIZE,layout:"vertical",id:"other_space"}),$.__views.__alloyId31.add($.__views.other_space),$.__views.license=Ti.UI.createLabel({width:Ti.UI.SIZE,height:Ti.UI.SIZE,top:"5dp",bottom:"5dp",left:"5dp",right:"5dp",id:"license",textid:"license_acceptance"}),$.__views.other_space.add($.__views.license),$.__views.license_link=Ti.UI.createLabel({width:Ti.UI.SIZE,height:Ti.UI.SIZE,top:"5dp",bottom:"5dp",left:"5dp",right:"5dp",color:"#16ABFD",id:"license_link",textid:"license_link_text"}),$.__views.other_space.add($.__views.license_link),$.__views.conferma=Ti.UI.createButton({backgroundColor:"#006399",color:"#FFFFFF",top:"5dp",width:Ti.UI.FILL,left:"5dp",right:"5dp",id:"conferma",titleid:"confirm_upload"}),$.__views.other_space.add($.__views.conferma),$.__views.annulla=Ti.UI.createButton({backgroundColor:"#8f0000",color:"#FFFFFF",top:"5dp",width:Ti.UI.FILL,left:"5dp",right:"5dp",id:"annulla",titleid:"stop_upload"}),$.__views.other_space.add($.__views.annulla),exports.destroy=function(){},_.extend($,$.__views);var args=$.args,Dialog=require("ti.webdialog");$.conferma.hide(),$.activityIndicator.show();const UUID=args[0],TOKEN=args[1];var images=args[2],monument=args[3],fieldtext={},data=[],uploaded=[],today=new Date,counter=0,length=Array(images)[0].length;Array(images)[0].forEach(function(photo){var url=Alloy.Globals.backend+"/photoupload.json",client=Ti.Network.createHTTPClient({onload:function(e){if("User not found."==JSON.parse(this.responseText).error){var message=Ti.UI.createAlertDialog({messageid:"error_please_logout",okid:"ok"});message.addEventListener("click",function(e){$.title.close()}),message.show()}else if("Photo upload not succedeed."==JSON.parse(this.responseText).error){var view=Titanium.UI.createView({layout:"horizontal",width:Ti.UI.FILL,height:Ti.UI.SIZE}),image=Titanium.UI.createImageView({image:photo.media,top:"5dp",left:"5dp",width:"100dp",left:0}),label=Titanium.UI.createLabel({textid:"error_image_upload"});view.add(image),view.add(label),$.photospace.add(view),1<length&&$.photospace.add(Titanium.UI.createView({height:"2dp",left:"0dp",right:"0dp",borderWidth:"1",borderColor:"#aaa"})),counter==length&&($.activityIndicator.hide(),$.activityIndicator.height=0)}else{var response=JSON.parse(this.responseText),id=response.id,container=Titanium.UI.createView({layout:"horizontal",width:Ti.UI.FILL,height:Ti.UI.SIZE}),image=Titanium.UI.createImageView({image:photo.media,top:"5dp",left:"5dp",width:"100dp"}),view=Titanium.UI.createView({layout:"vertical",height:Ti.UI.SIZE});if(counter+=1,1==counter)var pretitolo=response.city+" - "+response.label+" - "+response.timestamp;else var pretitolo=response.city+" - "+response.label+" - "+response.timestamp+" "+counter;var title_label=Titanium.UI.createLabel({textid:"image_title",font:{fontSize:12,fontWeight:"bold"}}),title=Titanium.UI.createTextArea({hintText:L("image_title"),id:"title"+id,inputType:Titanium.UI.INPUT_TYPE_CLASS_TEXT,height:Ti.UI.SIZE,width:Ti.UI.FILL,font:{fontSize:16},left:"5dp",borderStyle:Titanium.UI.INPUT_BORDERSTYLE_BEZEL,borderWidth:.3,value:pretitolo});fieldtext["title"+id]=title,view.add(title_label),view.add(title);var predescrizione=response.city+" - "+response.label,description_label=Titanium.UI.createLabel({textid:"image_description",font:{fontSize:12,fontWeight:"bold"}}),description=Titanium.UI.createTextArea({hintText:L("image_description"),id:"description"+id,inputType:Titanium.UI.INPUT_TYPE_CLASS_TEXT,height:Ti.UI.SIZE,width:Ti.UI.FILL,left:"5dp",font:{fontSize:16},enableReturnKey:!0,borderStyle:Titanium.UI.INPUT_BORDERSTYLE_BEZEL,borderWidth:.3,value:predescrizione});fieldtext["description"+id]=description,view.add(description_label),view.add(description);var date_label=Titanium.UI.createLabel({textid:"image_date",font:{fontSize:12,fontWeight:"bold"}}),date=Titanium.UI.createTextArea({hintText:L("image_date"),id:"date"+id,inputType:Titanium.UI.INPUT_TYPE_CLASS_TEXT,width:Ti.UI.FILL,height:Ti.UI.SIZE,left:"5dp",font:{fontSize:16},borderStyle:Titanium.UI.INPUT_BORDERSTYLE_BEZEL,borderWidth:.3,value:response.today});fieldtext["date"+id]=date,view.add(date_label),view.add(date),uploaded.push(id),container.add(image),container.add(view),$.photospace.add(container),$.photospace.add(Titanium.UI.createView({height:"2dp",top:"5dp",left:"0dp",right:"0dp",borderWidth:"1",borderColor:"#aaa"})),counter==length&&($.activityIndicator.hide(),$.activityIndicator.height=0,$.conferma.show())}},onerror:function(e){var view=Titanium.UI.createView({layout:"horizontal",width:Ti.UI.FILL,height:Ti.UI.SIZE}),image=Titanium.UI.createImageView({image:photo.media,top:"5dp",left:"5dp",width:"100dp",left:0}),label=Titanium.UI.createLabel({textid:"error_image_upload"});view.add(image),view.add(label),$.photospace.add(view),$.photospace.add(Titanium.UI.createView({height:"2dp",left:"0dp",right:"0dp",borderWidth:"1",borderColor:"#aaa"})),$.activityIndicator.hide(),$.activityIndicator.height=0},timeout:6e5});client.open("POST",url);var content={file:photo.media,uuid:UUID,token:TOKEN,monument:monument};client.send(content)});const DATEREGEX=/\d{2}\/\d{2}\/\d{4}/;$.conferma.addEventListener("click",function(e){var photos={},campi_pieni=!0;if(uploaded.forEach(function(id){var title=fieldtext["title"+id].value.trim(),description=fieldtext["description"+id].value.trim(),date=fieldtext["date"+id].value.trim();photos[id]=[title,description,date],date.match(DATEREGEX)||(alert(L("error_date_format")),campi_pieni=!1),(""==title||""==description||""==date)&&(alert(L("fields_are_mandatory")),campi_pieni=!1)}),campi_pieni){var url=Alloy.Globals.backend+"/set_title.json",client=Ti.Network.createHTTPClient({onload:function(e){var message=Ti.UI.createAlertDialog({messageid:"image_queue_success",buttonNames:[L("ok")]});message.addEventListener("click",function(e){$.title.close()}),message.show()},onerror:function(e){var _Stringformat=String.format,message=Ti.UI.createAlertDialog({message:_Stringformat("image_queue_error",e.error),okid:"ok"});message.addEventListener("click",function(e){$.title.close()}),message.show()},timeout:2e4});client.open("POST",url);var content={uuid:UUID,token:TOKEN,photos:JSON.stringify(photos)};client.send(content)}}),
$.annulla.addEventListener("click",photo_cancel),


$.title.onBack=photo_cancel,

$.license_link.addEventListener("click",function(e){
Dialog.isSupported()?

Dialog.open({
title:"CC-BY-SA 4.0",
url:"https://creativecommons.org/licenses/by-sa/4.0/deed."+Ti.Locale.currentLanguage}):



Ti.Platform.openURL(response.wikipedia);

}),









_.extend($,exports);
}

module.exports=Controller;