sap.ui.define(
	[
		'sap/ui/core/UIComponent'
	],

	function (UIComponent) {
		'use strict';

		var Component = UIComponent.extend('io.github.tmhew84.Component', {
			metadata: {
				manifiest: "json"
			}
		});

		return Component;
	}
);