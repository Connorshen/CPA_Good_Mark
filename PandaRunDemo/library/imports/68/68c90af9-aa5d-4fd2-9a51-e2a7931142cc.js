"use strict";
cc._RF.push(module, '68c90r5ql1P0ppR4qeTEULM', 'uiLayer');
// src/layer/uiLayer.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        gold_label: cc.Label,
        goldNum: 0
    },

    // use this for initialization
    onLoad: function onLoad() {},

    addGold: function addGold() {
        this.goldNum++;
        this.gold_label.string = this.goldNum + "";
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RF.pop();