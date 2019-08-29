!function($){

  var defaults = {
    beforeMove: null,
    afterMove: null,
  };
  
  $.fn.onepage_scroll = function(options){
    var el = $(this),
        settings = $.extend({}, defaults, options),
        sections = $("section"),
        pos = 0,
        total = sections.length;

    $.fn.moveDown = function() {
      pos+=1;
      el.transformPage();
    }

    $.fn.moveUp = function() {
      pos-=1;
      el.transformPage();
    }

    // the page_index starts with 1.
    $.fn.moveTo = function(page_index) {
      pos = page_index - 1;
      el.transformPage();
    }

    $.fn.moveToId = function(target_id) {
      var continue_loop = true;
      sections.each(function(sec_index, sec_element){
        $(sec_element).children("div").each(function(div_index, div_element){
          if(target_id == $(div_element).attr("id")) {
            pos = sec_index;
            continue_loop = false;
            return false; // break-loop
          }
        });
        // return true : continue-loop
        // return false : break-loop
        return continue_loop; 
      });
      el.transformPage();
    }

    $.fn.transformPage = function() {
      if (pos < 0) {
        pos = 0;
      }
      if (pos >= total) {
        pos = total - 1;
      }

      if (typeof settings.beforeMove == 'function') settings.beforeMove(pos+1);

      sections.each(function(sec_index, sec_element){
        $(sec_element).children("div").each(function(div_index, div_element){
          if(pos == sec_index) {
            $(div_element).removeClass("hidden");
          } else {
            $(div_element).addClass("hidden");
          }
        });
      });

      if (typeof settings.afterMove == 'function') settings.afterMove(pos+1);
    }

    return false;
  }


}(window.jQuery);
