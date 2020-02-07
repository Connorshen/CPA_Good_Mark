// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        platform_generator_node: cc.Node,
        platform_default_0: cc.Node,
        platform_default_1: cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {
        this.platform_generator = this.platform_generator_node.getComponent("platform_generator");
        this.platform_generator.initPlatforms([this.platform_default_0, this.platform_default_1]);
    },


    // update (dt) {},
});
