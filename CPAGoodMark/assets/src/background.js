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

    onLoad: function () {
        this.fixBgPos(this.far_bg[0], this.far_bg[1]);
        //this.fixBgPos(this.near_bg[0], this.near_bg[1]);
    },

    fixBgPos: function (bg1, bg2) {
        bg1.x = 0;
        var bg1BoundingBox = bg1.getBoundingBox();
        bg2.setPosition(bg1BoundingBox.xMax, bg1BoundingBox.yMin);
    },
    update: function (dt) {
        this.bgMove(this.far_bg, this.far_speed);
        //this.bgMove(this.near_bg, this.near_speed);
    },
    bgMove: function (bgList, speed) {
        for (var index = 0; index < bgList.length; index++) {
            var element = bgList[index];
            element.x -= speed;
        }
    },
});
