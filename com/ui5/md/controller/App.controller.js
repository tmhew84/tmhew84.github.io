/*global sap*/

sap.ui.define(
    [
        'sap/ui/core/mvc/Controller'
    ],

    function (Controller) {
        'use strict';

        var CustomController = Controller.extend('com.ui5.md.controller.App');

        CustomController.prototype.onInit = function () {
            this.getOwnerComponent().getModel('comp.northwind').setUseBatch(false);
        };

        return CustomController;
    }
);
