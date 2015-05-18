sap.ui.define(
	[
		'sap/ui/core/UIComponent'
	],

	function (UIComponent) {
		'use strict';

		var Component = UIComponent.extend('com.tm.Component', {
			metadata: {
				manifiest: "json"
			}
		});

		return Component;
	}
);