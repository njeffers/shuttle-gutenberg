const attributes = {

  buttonText: {
    type: 'string',
    default: 'Click Here',
  },
  buttonURL: {
    type: 'string',
    default: 'https://google.com',
  },

  ctaTitle: {
    type: "string",
    placeholder: "Title here bro"
  },

  ctaMessage: {
    type: "string",
    placeholder: "Add your custom message"
  },


  backgroundColor: {
    type: "string",
    default: "#fff"
  },

  ctaFontColor: {
    type: "string",
    default: "#000"
  },

  backgroundImage: {
    type: 'string',
    default: null, // no image by default!
  },

  titleTagClass: {
    type: "string",
    default: "h1"
  },
  blockAlignment: {
    type: "string",
    default: "left"
  },

  textAlignment: {
    type: "string",
    default: "left"
  },





};

export default attributes;
