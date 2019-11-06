/**
 * Block dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import Controls from "./controls";
import icons from "./icon";
import attributes from "./attributes";
import "./style.scss";

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;
const { } = wp.element;


// import ReactDOM from 'react-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
//
// import { faCoffee, faSpinner, faThumbsup } from '@fortawesome/free-solid-svg-icons';


const {
  IconButton,
  Tooltip,
  TextControl,
} = wp.components;


/**
 * Register inspector control example block
 */
export default registerBlockType("shuttle-block/ws-content-block", {
  title: __("Content Block", "shuttle-block"),
  description: __(
    "Content Block",
    "shuttle-blocks"
  ),
  category: 'shuttle-blocks', // Block category
  icon: {
    background: "rgba(254, 243, 224, 0.52)",
    src: icons.upload
  },
  keywords: [
    __("Content Block", "jsforwpblocks"),
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
      attributes: {
        textAlignment,
        blockAlignment,
        ContentBlockTitle,
        ContentBlockMessage,
        ContentBlockFaIcon,
      },
      attributes,
      className,
      setAttributes
    } = props;


    return [
      <Inspector {...{ setAttributes, ...props }} />,
      <Controls {...{ setAttributes, ...props }} />,


      <div className={className}>

        <div className={'col-xs-12 text-center ws-content-block-outer'}>
          <div className={'ws-content-block-inner dropshadow'}>
            <div className={'section-dropshadow-content-area'}>


              <RichText
                  tagName="h2"
                  className="shuttle-content-block-title"
                  placeholder={ __( 'Title Here', 'shuttle' ) }
                  value={ ContentBlockTitle }
                  onChange={ ( ContentBlockTitle ) => setAttributes( { ContentBlockTitle } ) }
              />


              <RichText
                  tagName="div"
                  className="shuttle-content-block-message"
                  placeholder={ __( 'Add your custom message', 'shuttle' ) }
                  onChange={ ContentBlockMessage => { setAttributes( { ContentBlockMessage } ) } }
                  value={ ContentBlockMessage }
              />

{/*
              <RichText
                  tagName="h2"
                  className="shuttle-content-block-icon-name"
                  placeholder={ __( 'faSpinner', 'shuttle' ) }
                  value={ ContentBlockFaIcon }
                  onChange={ ( ContentBlockFaIcon ) => setAttributes( { ContentBlockFaIcon } ) }
              />

*/}



            </div>
          </div>
        </div>

      </div>



    ];
  },
  save: props => {
    const {
      attributes: {
        textAlignment,
        className,
        blockAlignment,
        ContentBlockTitle,
        ContentBlockMessage,
      },
      attributes
    } = props;


    return (


        <div className={className}>


          <div className={'col-xs-12 text-center ws-content-block-outer'}>
            <div className={'ws-content-block-inner dropshadow'}>
              <div className={'section-dropshadow-content-area'}>

                {/*icon is: { ContentBlockFaIcon }*/}
{/*
                <div>
                  <FontAwesomeIcon className={'fa-xs fa-w-1'} size="sm" title="This is a title" fixed-width="true" icon="thumbs-up"/>
                </div>*/}

                <h1 className={ 'shuttle-content-block-title' }>{ContentBlockTitle}</h1>
                <div className={ 'shuttle-content-block-subtitle' }>{ContentBlockMessage}</div>


              </div>
            </div>
          </div>

        </div>

    );
  }
});
