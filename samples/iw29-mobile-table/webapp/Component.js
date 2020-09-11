sap.ui.define([
	"sap/ui/core/UIComponent",
	"iw29mobiletable/SelectionService"
], function (UIComponent, SelectionService) {
	"use strict";

	return UIComponent.extend("iw29mobiletable.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
		},
		/*
		* @override
		* Returns new Service instance that  implements external API interface
		*/
		getService : function(sServiceName) {
			if(sServiceName === "SelectionService"){
				return new SelectionService({
					scopeObject: this,
					scopeType: "component"
				});
			}
			return null;
		}
	});
});   