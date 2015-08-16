/*global sap*/

sap.ui.define(
    [
        'sap/ui/core/mvc/Controller'
    ],

    function (Controller) {
        'use strict';

        var CustomController = Controller.extend('com.md.controller.App');

        CustomController.prototype.onButtonPressed = function (oEvent) {
            alert('button pressed');
        };

        return CustomController;
    }
);
