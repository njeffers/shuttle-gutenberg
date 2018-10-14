const attributes = {

    buttonText: {
        type: 'string',
        default: 'Click Here',
    },
    buttonURL: {
        type: 'string',
        default: 'https://google.com',
    },


    ctaBackgroundColor: {
        type: 'string',
        default: '#eee'
    },

    ctaFontColor: {
        type: 'string',
        default: '#000'
    },

    textAlignment: {
        type: 'string',
        default: 'left'
    },
    blockAlignment: {
        type: 'string',
        default: 'center'
    },
    colorPaletteControl: {
        type: 'string',
        default: '#000000'
    },
    checkboxControl: {
        type: 'boolean',
        default: true,
    },
    dateTimeControl: {
        type: 'string',
    },
    radioControl: {
        type: 'string',
        default: 'a',
    },
    rangeControl: {
        type: 'number',
        default: '10',
    },
    textControl: {
        type: 'string',
    },
    textareaControl: {
        type: 'text',
    },
    toggleControl: {
        type: 'boolean',
    },
    selectControl: {
        type: 'string',
    },
};

export default attributes;
