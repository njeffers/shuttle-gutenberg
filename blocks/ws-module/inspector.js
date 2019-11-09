/**
 * Internal block libraries
 */

import icons from "./icon";

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const {
    InspectorControls,
    PanelColorSettings,
    ContrastChecker,
    URLInput,
    MediaUpload,
} = wp.editor;

const {
    Button,
    PanelBody,
    TextControl,
    TextareaControl,
    selectControl,
} = wp.components;





/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
    constructor() {
        super(...arguments);
    }


    render() {
        const {
            attributes: {
                backgroundColor,
                ctaTitle,
                ctaMessage,
                ctaFontColor,
                buttonText,
                buttonURL,
                imgUrl,
            },
            setAttributes
        } = this.props;

        function selectImage(value) {
            console.log(value);
            setAttributes({
                imgUrl: value.sizes.full.url,
            });
        }


        function onRemoveImage(){
            setAttributes({
                imgUrl: "",
            });
        }

        return (
            <InspectorControls>


                <PanelBody
                    title={__("Panel Body Title", "jsforwpblocks")}
                    initialOpen={false}
                >

                    <RichText
                        className="copy-hd"
                        tagName="h2"
                        placeholder="Enter your heading"
                        value={attributes.heading}
                        onChange={changeHeading}
                    />


                    <SelectControl
                        label={__("Select Control", "jsforwpblocks")}
                        value={selectControl}
                        options={[
                            { value: "a", label: __("Option A", "jsforwpblocks") },
                            { value: "b", label: __("Option B", "jsforwpblocks") },
                            { value: "c", label: __("Option C", "jsforwpblocks") }
                        ]}
                        onChange={selectControl => setAttributes({ selectControl })}
                    />
                </PanelBody>
            </InspectorControls>
        );
    }
}



