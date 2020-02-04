(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/src/layer/uiLayer.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '68c90r5ql1P0ppR4qeTEULM', 'uiLayer', __filename);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=uiLayer.js.map
        