/**
 * Block dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import Controls from "./controls";
import icon from "./icon";
import attributes from "./attributes";
import "./style.scss";

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, URLInput } = wp.editor;
const { createElement } = wp.element;

const {
  IconButton,
  Tooltip,
  TextControl,
} = wp.components;


/**
 * Register inspector control example block
 */
export default registerBlockType("shuttle-block/cta", {
  title: __("Call To Action", "shuttle-block"),
  description: __(
    "Simple Call To Action",
    "shuttle-blocks"
  ),
  category: 'shuttle-blocks', // Block category
  icon: {
    background: "rgba(254, 243, 224, 0.52)",
    src: icon
  },
  keywords: [
    __("CTA", "jsforwpblocks"),
    __("Call to Action", "jsforwpblocks"),
    __("Shuttle", "jsforwpblocks")
  ],
  attributes,
  getEditWrapperProps(attributes) {
    const { blockAlignment } = attributes;
    if (
      "left" === blockAlignment ||
      "right" === blockAlignment ||
      "full" === blockAlignment
    ) {
      return { "data-align": blockAlignment };
    }
  },
  edit: props => {
    const {
      attributes: { textAlignment, blockAlignment, ctaTitle,ctaMessage, backgroundColor, ctaFontColor, buttonText, buttonURL },
      attributes,
      className,
      setAttributes
    } = props;


    return [
      <Inspector {...{ setAttributes, ...props }} />,
      <Controls {...{ setAttributes, ...props }} />,


      <div className={className} style={{ textAlign: textAlignment, backgroundColor: backgroundColor  }}>

        <div className={'shutte-cta-text-wrapper'}
             style={ { color:ctaFontColor } }>

          <RichText
              tagName="h2"
              className="shuttle-cta-title"
              placeholder={ __( 'Title Here', 'shuttle' ) }
              value={ ctaTitle }
              onChange={ ( ctaTitle ) => setAttributes( { ctaTitle } ) }
          />


          <RichText
              tagName="div"
              className="shuttle-cta-message"
              placeholder={ __( 'Add your custom message', 'shuttle' ) }
              onChange={ ctaMessage => { setAttributes( { ctaMessage } ) } }
              value={ ctaMessage }
          />

        </div>

        <div className={'shuttle-cta-button-wrapper'}>
          <button className="btn btn-primary">{attributes[ 'buttonText' ] }</button>
        </div>

      </div>

    ];
  },
  save: props => {
    const {
      attributes: { textAlignment, blockAlignment, ctaTitle, ctaMessage, backgroundColor, ctaFontColor, buttonText, buttonURL },
      attributes
    } = props;


    return (
      <div
        className={`align${blockAlignment}`}
        style={{ textAlign: textAlignment, backgroundColor: backgroundColor }}
      >

        <div className={'shutte-cta-text-wrapper'}
             style={ { color:ctaFontColor } }>

          <h2 className={ 'shuttle-cta-title' }>{ctaTitle}</h2>

          <div className={ 'shuttle-cta-subtitle' }>{ctaMessage}</div>

        </div>

        <div className={'shuttle-cta-button-wrapper'}>
          <a href={buttonURL}
             className={ 'btn btn-primary' }>{ buttonText}</a>
        </div>


      </div>
    );
  }
});
