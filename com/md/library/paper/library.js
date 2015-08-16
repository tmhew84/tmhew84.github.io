/*global sap*/

sap.ui.define(
    [],

    function () {
        'use strict';

        var oLibrary = {
            name: 'com.md.library.paper'
        };

        oLibrary.interfaces = [];
        oLibrary.elements = [];

        oLibrary.controls = [];

        oLibrary.types = [];


        sap.ui.getCore().initLibrary(oLibrary);

        return com.md.library.paper;
    },

    true
);
