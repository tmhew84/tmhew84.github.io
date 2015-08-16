/*global sap*/

sap.ui.define(
    [
        'sap/ui/core/Control'
    ],

    function (Control) {
        'use strict';

        var CustomControl = Control.extend('com.md.library.paper.Button', {
            metadata: {
                library: 'com.md.library.paper'
            }
        });

        return CustomControl;
    }
);
