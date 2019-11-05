/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { createElement, Component } = wp.element;
const {
  InspectorControls,
  ColorPalette,
  PanelColorSettings,
  ContrastChecker,
  URLInput,
} = wp.editor;

const {
  CheckboxControl,
    IconButton,
  PanelBody,
  PanelRow,
  RadioControl,
  RangeControl,
  TextControl,
  TextareaControl,
  ToggleControl,
  SelectControl
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
          titleTag,
          ctaTitle,
          ctaMessage,
          ctaFontColor,
          buttonText,
          buttonURL,

        checkboxControl,
        colorPaletteControl,
        colorPaletteControl2,
        radioControl,
        rangeControl,
        textareaControl,
        toggleControl,
        selectControl
      },
      setAttributes
    } = this.props;

    return (
      <InspectorControls>



          <PanelBody
              title={__("Content", "jsforwpblocks")}
              initialOpen={true}
          >
                  <TextControl
                      label={__("Title", "jsforwpblocks")}
                      value={ctaTitle}
                      onChange={ ( ctaTitle ) => setAttributes( { ctaTitle } ) }
                  />

                  <TextareaControl
                      label={__("Subtitle", "jsforwpblocks")}
                      value={ctaMessage}
                      onChange={ ( ctaMessage ) => setAttributes( { ctaMessage } ) }
                  />

          </PanelBody>


          <PanelBody
              title={__("Button", "jsforwpblocks")}
              initialOpen={true}
          >


              <TextControl
                  label={ __( 'Button Text', 'shuttle' ) }
                  value={ buttonText }
                  onChange={ buttonText => setAttributes( { buttonText } ) }
              />

              <p>{ __( 'Button URL', 'shuttle' ) }</p>
                  <URLInput
                      label={ __( 'Button URL', 'shuttle' ) }
                      className="url"
                      value={ buttonURL }
                      onChange={ buttonURL => setAttributes( { buttonURL } ) }
                  />


          </PanelBody>

          <PanelBody
              title={__("Colors", "jsforwpblocks")}
              initialOpen={false}
          >


                  <PanelColorSettings
                      title={__("Background Color", "jsforwpblocks")}
                      colorSettings={[
                          {
                              value: backgroundColor,
                              onChange: backgroundColor => {
                                  setAttributes({ backgroundColor });
                              },
                              label: __("Background Color")
                          }
                      ]}
                  />
                  <PanelColorSettings
                      title={__("Font Color", "jsforwpblocks")}
                      colorSettings={[
                          {
                              value: ctaFontColor,
                              onChange: ctaFontColor => {
                                  setAttributes({ ctaFontColor });
                              },
                              label: __("Font Color")
                          }
                      ]}
                  />

          </PanelBody>




      </InspectorControls>
    );
  }
}
