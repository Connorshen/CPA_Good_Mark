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
        near_bg: [cc.Node],
        far_bg: [cc.Node],

        near_speed: 0,
        far_speed: 0,
    },

    // use this for initialization
    onLoad: function () {

    },


    update: function (dt) {
        //this.bgMove(this.far_bg, this.far_speed);
        //this.bgMove(this.near_bg, this.near_speed);
        cc.log(this.far_bg[0].x);
    },
    bgMove: function (bgList, speed) {
        for (var index = 0; index < bgList.length; index++) {
            var element = bgList[index];
            element.x -= speed;
        }
    },
});
