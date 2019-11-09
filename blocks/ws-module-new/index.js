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
const { InnerBlocks, RichText } = wp.editor;
const { } = wp.element;

const {
  IconButton,
  Tooltip,
  TextControl,
} = wp.components;



function getSettings(atts) {
  let settings = [];
  // The following code sorts the list alphabetically
  let attributes = {};
  Object.keys(atts)
      .sort()
      .forEach(function(key) {
        attributes[key] = atts[key];
      });
  // End updated code
  for (let attribute in attributes) {
    let value = attributes[attribute];
    if ("boolean" === typeof attributes[attribute]) {
      value = value.toString();
    }
    settings.push(
        <li>
          {attribute}: {value}
        </li>
    );
  }
  return settings;
}


/**
 * Register inspector control example block
 */
export default registerBlockType("shuttle-block/module-new", {
  title: __("Module New", "shuttle-block"),
  description: __(
    "Simple Call To Action",
    "shuttle-blocks"
  ),
  category: 'shuttle-blocks', // Block category
  icon: {
    background: "rgba(254, 243, 224, 0.52)",
    src: icons.upload
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
      attributes: { contentWidth },
      attributes,
      className,
      setAttributes
    } = props;


    let settings = getSettings(attributes);

    return [
      <Inspector {...{ setAttributes, ...props }} />,
      <Controls {...{ setAttributes, ...props }} />,

      <div className={className}>
       <InnerBlocks />
        <ul>{settings}</ul>
      </div>

    ];

  },
  save: props => {
    const {
      attributes: { contentWidth },
      attributes
    } = props;

    let settings = getSettings(attributes);

    return [

      <div className={className}>
        <InnerBlocks.Content />
      </div>

    ];
  }
});
