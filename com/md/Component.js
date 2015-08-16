/*global sap*/

sap.ui.define(
    [
        'sap/ui/core/UIComponent'
    ],

    function (UIComponent) {
        'use strict';

        var CustomComponent = UIComponent.extend('com.md.Component', {
            metadata: {
                manifest: 'json'
            }
        });

        CustomComponent.prototype.init = function () {
            UIComponent.prototype.init.apply(this);
        };

        CustomComponent.prototype.destroy = function () {

            UIComponent.prototype.destroy.apply(this);
        };

        return CustomComponent;
    }
);
