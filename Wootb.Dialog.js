///<reference path="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.7.2-vsdoc.js" />

(function ($) {
    var Methods = {
         init: function () {
            if(document.getElementById("overlay")===null){
                 $('<div id="overlay" ></div>').appendTo('body').click(function(){$(('.login,.box')).WootbDialog('close');});
            }
        },
        show:function () {
            Methods.init();
            var $this = $(this);
            $this.css('display', 'block');
            var value = $(window).width() * 0.3;
            $('#overlay').fadeIn('slow', function () {
                $this.animate({ 'left': value }, 400);
            });
           
        },
        close:function () {
            var $this = $(this);
            $this
            .animate({ 'left': '-100%' }, 600, function () {
                $this.css('left', '100%');
            });  
            $('#overlay').fadeOut(800);
        }
    }

    $.fn.WootbDialog = function (optionsOrMethod, methodArguments) {
        if (Methods[optionsOrMethod]) {
            if(methodArguments===undefined) 
                Methods[optionsOrMethod].apply(this, Array.prototype.slice.call(arguments, 1));
            if (optionsOrMethod !== 'init')
                return this;
        }
        var options = optionsOrMethod; // is options
        var settings = {
            box:"boxpopup",
            overlay:"overlay",
            
        };
        settings = $.extend(settings, options);
        var $box = $('#'+settings.box);
        var $overlay = $('#'+settings.overlay);
        return $this;
    };
})(jQuery);

