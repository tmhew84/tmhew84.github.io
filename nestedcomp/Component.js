sap.ui.define([
    'sap/ui/core/UIComponent'
], (UIComponent) => {
   'use strict';

    const CustomComponent = UIComponent.extend('nest.Component');

    CustomComponent.prototype.init = function () {
        UIComponent.prototype.init.apply(this);
        this.getRouter().initialize();
    };

    return CustomComponent;
});