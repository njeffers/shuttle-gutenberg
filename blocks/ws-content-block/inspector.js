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
          ContentBlockTitle,
          ContentBlockMessage,
          ContentBlockFaIcon
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
                  label={__("Icon", "jsforwpblocks")}
                  value={ContentBlockFaIcon}
                  onChange={ ( ContentBlockFaIcon ) => setAttributes( { ContentBlockFaIcon } ) }
              />
              <TextControl
                  label={__("Title", "jsforwpblocks")}
                  value={ContentBlockTitle}
                  onChange={ ( ContentBlockTitle ) => setAttributes( { ContentBlockTitle } ) }
              />
                  <TextareaControl
                      label={__("Subtitle", "jsforwpblocks")}
                      value={ContentBlockMessage}
                      onChange={ ( ContentBlockMessage ) => setAttributes( { ContentBlockMessage } ) }
                  />

          </PanelBody>




      </InspectorControls>
    );
  }
}
