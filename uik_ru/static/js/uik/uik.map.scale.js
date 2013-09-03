(function ($, UIK) {
    $.extend(UIK.viewmodel, {
        version: null
    });
    $.extend(UIK.view, {
        $scaleVillage: null,
        $scaleHamlet: null,
        $scaleBuilding: null
    });

    UIK.versions = {};
    $.extend(UIK.versions, {
        init: function () {
            this.setDomOptions();
            this.bindEvents();
        },


        setDomOptions: function () {
		        var view = UIK.view;
            var scalePanel = $('#scale-panel');
            view.$scaleVillage = scalePanel.find("a.village");
            view.$scaleHamlet = scalePanel.find("a.hamlet");
            view.$scaleBuilding = scalePanel.find("a.building");
            
        },


        bindEvents: function () {
            var view = UIK.view;
            
            view.$scaleVillage.off('click').on('click', function () {
                UIK.viewmodel.map.setView(UIK.viewmodel.map.getCenter(), 13);
            });
            view.$scaleHamlet.off('click').on('click', function () {
                UIK.viewmodel.map.setView(UIK.viewmodel.map.getCenter(), 15);
            });
            view.$scaleBuilding.off('click').on('click', function () {
                UIK.viewmodel.map.setView(UIK.viewmodel.map.getCenter(), 17);
            });

        }
    });
})(jQuery, UIK);