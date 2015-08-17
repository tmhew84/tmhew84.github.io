/*global sap*/

sap.ui.define(
    [],

    function () {
        'use strict';

        var CustomRenderer = {};

        CustomRenderer.render = function (oRm, oCustomControl) {
            oRm.write('<span');
            oRm.writeControlData(oCustomControl);
            oRm.addClass('mdPaperButton');
            oRm.writeClasses();
            oRm.write('>');

            this._renderContent(oRm, oCustomControl);

            oRm.write('</span>');
        };

        CustomRenderer._renderContent = function (oRm, oCustomControl) {
            oRm.write('<content');
            oRm.addClass('mdPaperButton-content');
            oRm.writeClasses();
            oRm.write('>');

            oCustomControl.getContent().forEach(function (oContent) {
                oRm.renderControl(oContent);
            }, this);

            oRm.write('</content>');
        };

        return CustomRenderer;
    },

    true
);
