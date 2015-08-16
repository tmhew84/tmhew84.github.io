/*global sap*/

sap.ui.define(
    [
        'sap/ui/core/Control'
    ],

    function (Control) {
        'use strict';

        var CustomControl = Control.extend('com.md.library.paper.Button', {
            metadata: {
                library: 'com.md.library.paper',

                aggregations: {
                    content: { type: 'sap.ui.core.Control', multiple: true, singularName: 'content' }
                },

                defaultAggregation: 'content',

                events: {
                    press: {}
                }
            }
        });

        CustomControl.prototype.ontap = function (oEvent) {
            this.firePress();
        };

        return CustomControl;
    },

    true
);
