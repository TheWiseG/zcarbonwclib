sap.ui.define(["sap/ui/core/Control"], Control => {
    const Button = Control.extend("zcarbonwclib.CarbonButton", {
        metadata: {
            library: "zcarbonwclib",
            properties: {
                text: { type: "string", defaultValue: "Button", bindable: "bindable" },
                disabled: { type: "boolean", defaultValue: false }
            },
            events: {
                press: {}
            }
        },



        /**
         * bridge UI5 control's after rendering to
         * "change" event of UI5 web component
         */
        onAfterRendering() {
            if (!this.bEventListenerAttached) {
                this.bEventListenerAttached = true;
                //this is one option for simple events, but it won't work with something like the disabled property, the button will still click
                //see Button.prototype.ontap below for the way the UI5 library does it
                //document.getElementById(this.getId()).addEventListener("click", this._onPress.bind(this));
            }
        },



        /**
         * callback from "click" event handler
         * that
         * - fires the UI5 control's attached event handler
         *
         * @param {jQuery.event} $event
         */
        _onPress($event) {
            this.firePress({});
        },

        renderer: {
            apiVersion: 2,
            render(oRM, oButton) {
                oRM.openStart("bx-btn", oButton);
                //set the attribute if the button is disabled
                if (oButton.getDisabled()) {
                    oRM.attr("disabled");
                }
                oRM.openEnd();
                oRM.text(oButton.getText());
                oRM.close("bx-btn");
            }
        }
    });

    /*
UI5 library does it more like this instead of in the onAfterRender
*/
    Button.prototype.ontap = function(oEvent, bFromTouchEnd) {


		// fire tap event
		if (!this.getDisabled() && this.getVisible()) {

			this.firePress({ });
		}
    };

    return Button;
});
