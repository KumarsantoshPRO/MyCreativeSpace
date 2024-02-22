/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"zsk_template/sap-fiori-basic-app-template/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
