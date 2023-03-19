jQuery("#"+this.questionId+" .TextEntryBox").each(function() {
    var tb = jQuery(this);
    tb.css({"float":"none","background-color":"white","width":"30%"});
    tb.prev("label").css("display","block").append(" ").append(tb);
});
