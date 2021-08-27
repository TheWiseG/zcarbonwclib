sap.ui.define(["sap/ui/core/Control", "./CarbonProgressStepRenderer"], function (Control, CarbonProgressStepRenderer) {
    const ProgressStep = Control.extend("zcarbonwclib.CarbonProgressStep", {
        metadata: {
            library: "zcarbonwclib",
            properties: {
                vertical: { type: "boolean", defaultValue: "false" },
                disabled: { type: "boolean", defaultValue: false },
                state: { type: "string", defaultValue: "queued" },
                labelText: {type: "string", defaultValue: ""},
                secondaryLabelText: {type: "string", defaultValue: ""},
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

    return ProgressStep;
});
