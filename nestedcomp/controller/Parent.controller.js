sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/core/ComponentContainer'
], (Controller, ComponentContainer) => {
    'use strict';

    const CustomController = Controller.extend('nest.controller.Parent');

    CustomController.prototype.onInit = function () {
        sap.ui.component({
            name: 'nest.comp.child',
            manifestFirst: true,
            async: true
        }).then(oComponent => {
            this.getView().byId('page').addContent(
                new ComponentContainer({
                    height: '100%',
                    component: oComponent
                })
            );
        });
    };

    return CustomController;
});
