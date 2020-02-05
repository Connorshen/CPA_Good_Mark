cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function () {
        var day1 = new Date();
        this.label.string = this.text+day1.getSeconds();
    },

    // called every frame
    update: function (dt) {
        var day1 = new Date();
        this.label.string = this.text+day1.getSeconds();
    },
});
