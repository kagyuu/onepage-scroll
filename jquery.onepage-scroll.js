!function($){

  $.fn.onepage_scroll = function(options){
    var el = $(this),
        sections = $("section"),
        pos = 0,
        total = sections.length;

    $.fn.moveDown = function() {
      el.moveTo(pos+1);
    }

    $.fn.moveUp = function() {
      el.moveTo(pos-1);
    }

    $.fn.moveTo = function(page_index) {
      if (page_index < 0 || total <= page_index) {
        return;
      }
      pos = page_index;
      sections.each(function(sec_index, sec_element){
        $(sec_element).children("div").each(function(div_index, div_element){
          if(page_index === sec_index) {
            $(div_element).removeClass("hidden");
          } else {
            $(div_element).addClass("hidden");
          }
        });
      });
    }

    return false;
  }


}(window.jQuery);
