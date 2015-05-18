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

		Component.prototype.init = function () {
			UIComponent.prototype.init.apply(this, arguments);

			this._startMockServers();
		};

		Component.prototype.destroy = function () {
			this._stopMockServers();

			UIComponent.prototype.destroy.apply(this, arguments);
		};

		Component.prototype._startMockServers = function () {
			
		};

		Component.prototype._stopMockServers = function () {
			
		};

		return Component;
	}
);