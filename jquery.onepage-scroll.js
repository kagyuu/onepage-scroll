!function($){

  $.fn.onepage_scroll = function(options){
    var el = $(this),
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

    $.fn.transformPage = function() {
      if (pos < 0) {
        pos = 0;
      }
      if (pos >= total) {
        pos = total - 1;
      }
      sections.each(function(sec_index, sec_element){
        $(sec_element).children("div").each(function(div_index, div_element){
          if(pos == sec_index) {
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
