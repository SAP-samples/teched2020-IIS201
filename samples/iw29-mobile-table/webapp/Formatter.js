sap.ui.define(function() {
	"use strict";
	var Formatter = {
		priority :  function (sPriority) {
			switch(sPriority){
				case "3":
					return "Warning";
				case "2":
				case "1":
					return "Error";
				default:
					return "None";
			}
		}
	};
	return Formatter;
}, true);