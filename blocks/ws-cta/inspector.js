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
              title={__("Content", "jsforwpblocks")}
              initialOpen={true}
          >

              <div className="media">
                  <MediaUpload
                      onSelect={selectImage}
                      render={ ({open}) => {
                          return <img
                              src={imgUrl}
                              onClick={open}
                          />;
                      }}
                  />

                  <MediaUpload
                      onSelect={selectImage}
                      type="image"
                      value={imgUrl}
                      render={({ open }) => (
                          <button
                              className="btn btn-primary"
                              onClick={open}>
                              Upload Image!
                          </button>
                      )}
                  />

                  <Button
                      className="remove-image"
                      onClick={ onRemoveImage }
                  >
                      { icons.remove }
                  </Button>

              </div>

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
