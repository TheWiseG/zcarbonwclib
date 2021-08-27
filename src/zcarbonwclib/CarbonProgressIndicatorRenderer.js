/*!
 * ${copyright}
 */
sap.ui.define(["sap/m/library", "sap/ui/Device", "sap/ui/core/InvisibleText", "./CarbonProgressStepRenderer"],
    function (library, Device, CarbonProgressStepRenderer) {
        "use strict";




        /**
         * CarbonProgressIndicator renderer.
         * @namespace
         */
        var CarbonProgressIndicatorRenderer = {
            apiVersion: 2
        };


        /**
         * Renders the HTML for the given control, using the provided
         * {@link sap.ui.core.RenderManager}.
         *
         * @param {sap.ui.core.RenderManager}
         *          oRenderManager the RenderManager that can be used for writing to the
         *          Render-Output-Buffer
         * @param {sap.ui.core.Control}
         *          oControl an object representation of the control that should be
         *          rendered
         */
        CarbonProgressIndicatorRenderer.render = function (oRM, oControl) {
            // container
            oRM.openStart("bx-progress-indicator", oControl);

            //set the attribute if the button is disabled
            if (oControl.getDisabled()) {
                oRM.attr("disabled");
            }
            if (oControl.getVertical()) {
                oRM.attr("vertical");
            }

            // container
            oRM.openEnd();


            // determine items rendering
            var aSteps = oControl.getSteps();

            // render child controls

            for (var i = 0; i < aSteps.length; i++) {
                oRM.renderControl(aSteps[i]);
            }

            // container
            oRM.close("bx-progress-indicator");
        };


        return CarbonProgressIndicatorRenderer;

    }, /* bExport= */ true);
