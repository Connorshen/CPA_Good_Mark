cc.Class({
    extends: cc.Component,

    properties: {
        gold_label: cc.Label,
        goldNum: 0,
        backBtn: cc.Node,
    },

    // use this for initialization
    onLoad: function () {
        this.registerEvent();
    },

    addGold: function () {
        this.goldNum++;
        this.gold_label.string = this.goldNum + "万";
    },

    registerEvent() {
        this.backBtn.on(cc.Node.EventType.TOUCH_END, this.onEventStart, this);
    },

    onEventStart() {
        cc.director.loadScene("ready-scene");
    },
});
