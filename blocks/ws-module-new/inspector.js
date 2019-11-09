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
  SelectControl,

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
          contentWidth,
      },
      setAttributes
    } = this.props;


      return (
      <InspectorControls>



          <PanelBody
              title={__("Content", "jsforwpblocks")}
              initialOpen={true}
          >

              <SelectControl
                  label={__("Select Control", "jsforwpblocks")}
                  value={contentWidth}
                  options={[
                      { value: "default", label: __("Default", "jsforwpblocks") },
                      { value: "boxed", label: __("Boxed", "jsforwpblocks") },
                      { value: "fluid", label: __("Fluid", "jsforwpblocks") }
                  ]}
                  onChange={contentWidth => setAttributes({ contentWidth })}
              />

          </PanelBody>




      </InspectorControls>
    );
  }
}
