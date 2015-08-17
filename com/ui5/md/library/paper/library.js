/*global sap*/

sap.ui.define(
    [],

    function () {
        'use strict';

        var oLibrary = {
            name: 'com.ui5.md.library.paper'
        };

        oLibrary.interfaces = [];
        oLibrary.elements = [];

        oLibrary.controls = [
            'com.ui5.md.library.paper.Button'
        ];

        oLibrary.types = [];


        sap.ui.getCore().initLibrary(oLibrary);

        return com.ui5.md.library.paper;
    }
);
