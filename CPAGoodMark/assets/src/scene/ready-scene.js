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
        courseLayer: {
            default: null,
            type: cc.Prefab,
        },
        infoLayer: {
            default: null,
            type: cc.Prefab,
        },
        bgmLayer: {
            default: null,
            type: cc.Prefab,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },

    // update (dt) {},
    startBtnClicked() {
        cc.director.loadScene("game-scene");
    },
    courseBtnClicked() {
        var scene = cc.director.getScene();
        var node = cc.instantiate(this.courseLayer);
        node.parent = this.node;
    },
    infoBtnClicked() {
        var scene = cc.director.getScene();
        var node = cc.instantiate(this.infoLayer);
        node.parent = this.node;
    },
    bgmBtnClicked() {
        var scene = cc.director.getScene();
        var node = cc.instantiate(this.bgmLayer);
        node.parent = this.node;
    },
});
