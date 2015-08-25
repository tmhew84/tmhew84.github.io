/*global sap*/

sap.ui.define(
    [
        'sap/ui/core/mvc/Controller'
    ],

    function (Controller) {
        'use strict';

        var CustomController = Controller.extend('com.ui5.md.controller.App');

        CustomController.prototype.onInit = function () {
            console.log(this.getOwnerComponent().getModel('comp.northwind'));
        };

        return CustomController;
    }
);
