sap.ui.define(["sap/ui/core/Control", "./CarbonProgressIndicatorRenderer"], function (Control, CarbonProgressIndicatorRenderer) {
    const ProgressIndicator = Control.extend("zcarbonwclib.CarbonProgressIndicator", {
        metadata: {
            library: "zcarbonwclib",
            properties: {
                currentIndex: { type: "integer", defaultValue: "0", bindable: "bindable" },
                vertical: { type: "boolean", defaultValue: "false" },
                disabled: { type: "boolean", defaultValue: false }
            },
            defaultAggregation: "steps",
            aggregations: {

                /**
                 * Defines the steps contained within this control.
                 */
                steps: { type: "zcarbonwclib.CarbonProgressStep", multiple: true, singularName: "step", bindable: "bindable", selector: "#{id} .zcarbonprogressstep" },
            },
            events: {

            }
        },



        /**
         * bridge UI5 control's after rendering to
         * "change" event of UI5 web component
         */
        onAfterRendering() {
            if (!this.bEventListenerAttached) {
                this.bEventListenerAttached = true;
                //document.getElementById(this.getId()).addEventListener("change", this._onChange.bind(this));
            }
        },




    });

    ProgressIndicator.prototype.getSteps = function () {
        return this.getAggregation("steps", []);
    };
    return ProgressIndicator;
});
