/*!
 * ${copyright}
 */
sap.ui.define(["sap/m/library", "sap/ui/Device", "sap/ui/core/InvisibleText"],
    function (library, Device) {
        "use strict";

        /**
         * CarbonProgressStep renderer.
         * @namespace
         */
        var CarbonProgressStepRenderer = {
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
        CarbonProgressStepRenderer.render = function (oRM, oControl) {
            // container
            oRM.openStart("bx-progress-step", oControl);

            //set the attribute if the button is disabled
            if (oControl.getDisabled()) {
                oRM.attr("disabled");
            }

            //if(oControl.getLabelText() !=)
            oRM.attr("state", oControl.getState());
            oRM.attr("label-text", oControl.getLabelText());
            oRM.attr("secondary-label-text", oControl.getSecondaryLabelText());


            // container
            oRM.openEnd();

            // container
            oRM.close("bx-progress-step");
        };


        return CarbonProgressStepRenderer;

    }, /* bExport= */ true);
