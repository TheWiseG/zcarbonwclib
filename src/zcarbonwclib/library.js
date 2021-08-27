/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library zcarbonwclib.
 */
sap.ui.define([
    "sap/ui/core/library", "./bundle"
], function () {
    "use strict";

    // delegate further initialization of this library to the Core
    // Hint: sap.ui.getCore() must still be used to support preload with sync bootstrap!
    sap.ui.getCore().initLibrary({
        name: "zcarbonwclib",
        version: "${version}",
        dependencies: [ // keep in sync with the ui5.yaml and .library files
            "sap.ui.core"
        ],
        types: [
            "zcarbonwclib.ExampleColor"
        ],
        interfaces: [],
        controls: [
            "zcarbonwclib.Example",
            "zcarbonwclib.CarbonButton",
            "zcarbonwclib.CarbonProgressIndicator",
            "zcarbonwclib.CarbonProgressStep"
        ],
        elements: [],
        noLibraryCSS: false // if no CSS is provided, you can disable the library.css load here
    });

	/**
	 * Some description about <code>zggacontrollib</code>
	 *
	 * @namespace
	 * @name zcarbonwclib
	 * @author Greg Austin
	 * @version ${version}
	 * @public
	 */
    var thisLib = zcarbonwclib;

	/**
	 * Semantic Colors of the <code>zcarbonwclib.Example</code>.
	 *
	 * @enum {string}
	 * @public
	 */
    thisLib.ExampleColor = {

		/**
		 * Default color (brand color)
		 * @public
		 */
        Default: "Default",

		/**
		 * Highlight color
		 * @public
		 */
        Highlight: "Highlight"

    };

    return thisLib;

});
