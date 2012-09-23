 (function ($) {
       
        $.fn.Colors = function (options) {
            var base = this;
            base.$el = $(base);

            var SessionWootbColorSettingsKey = "WootbColorSettings"
            function GetWootbColorSettings() {
                var metrosettings = localStorage.getItem(SessionWootbColorSettingsKey);
                return metrosettings !== null ? JSON.parse(localStorage.getItem(SessionWootbColorSettingsKey)) : null;
            }

            function changeColorTheme(color) {
                $('body,html,#overlay').css('background-color', color);
				$('#boxpopup').css('border-color', color);
            }

            function MetroColor(color) {
                $('.MetroMenuDropDown').toggleClass('_MetroMenuDropDown');
                if (color === null || color === 'null') {
                    var date = new Date();
                    localStorage.removeItem(SessionWootbColorSettingsKey);
                    changeColorTheme(appColors[date.getDay()]);
                } else
                    localStorage.setItem(SessionWootbColorSettingsKey, JSON.stringify({ metroColor: color }));
                AlterTheme()
            };

            function AlterTheme() {
                var metrosettings = GetWootbColorSettings();
                if (metrosettings === null || metrosettings.metroColor === null || metrosettings.metroColor === "null") {
                    var date = new Date();
                    changeColorTheme(appColors.Colors[date.getDay()]);
                }
                else {
                    changeColorTheme(metrosettings.metroColor);
                }
    
            }

            base.clicked = function (e) { MetroColor(e.data.color); changeColorTheme(e.data.color); };
            base.Settings = { Colors: [null] };
            base.init = function () {
                base.Settings = $.extend({}, base.Settings, options);
                $.each(base.Settings.Colors, function (index, value) {
                    $('<li class="squareColor"></li>').appendTo(base.$el).css("background-color", value).click({ color: value }, base.clicked)
                });
                AlterTheme();
            }
            base.init();
        };


    })(jQuery);