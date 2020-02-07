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
        platform_list: [],
        move_speed: 0.1,
        platform_prafab: [cc.Prefab],
        platform_layer: cc.Node,
        gold_group_list: [cc.Prefab],
        maxMoveSpeed: 8, //平台最大移动速度
    },

    initPlatforms: function (list) {
        this.platform_list = list;

        list.forEach(function (element) {
            element.setAnchorPoint(0, 0);
        }, this);
    },

    generate: function (last_platform) {
        //随机N种平台
        var random_num = Math.random() * 4;
        random_num = Math.floor(random_num);

        var platform_temp = cc.instantiate(this.platform_prafab[random_num]);
        platform_temp.setAnchorPoint(0, 0);

        /**
         *设置坐标 
         */

        //x
        var layer_size = this.platform_layer.getContentSize();
        platform_temp.x = layer_size.width;

        //随机Y值(不能太高，所以-100)
        platform_temp.y = Math.random() * (layer_size.height - 100);
        cc.log(platform_temp.y);

        //防止Y对于前面的平台过高，跳不上去
        var max_offy = 100;
        if (platform_temp.y > last_platform.y + max_offy) {
            platform_temp.y = last_platform.y + max_offy;
        }


        //添加到节点
        this.platform_list.push(platform_temp);
        this.platform_layer.addChild(platform_temp);

        //一定的几率平台添加金币
        // if (Math.random() >= 0.5) {
        var index = Math.random() * 3;
        index = Math.floor(index);
        var gold_group = cc.instantiate(this.gold_group_list[index]);
        var platform_size = platform_temp.getContentSize();
        gold_group.setPosition(platform_size.width / 2, platform_size.height);
        platform_temp.addChild(gold_group);
        // }

        cc.log("产出一个平台,平台数=", this.platform_list.length);
    },
    update: function (dt) {
        var platform;
        var remove_count = 0;
        var list_new = [];
        for (var index = 0; index < this.platform_list.length; index++) {
            platform = this.platform_list[index];
            platform.x -= this.move_speed;

            if (platform.getBoundingBox().xMax > 0) {
                list_new.push(platform);
            }
            else {
                platform.removeFromParent();
            }
        }

        this.platform_list = list_new;

        if (!platform) {
            return;
        }

        var winSize = cc.winSize;
        var last_platform_bounding_box = platform.getBoundingBox();
        var right_x = last_platform_bounding_box.x + last_platform_bounding_box.width;

        if (right_x < winSize.width * 0.8) {
            this.generate(platform)
        }

        //平台移动速度变更
        if (this.move_speed < this.maxMoveSpeed) {
            this.move_speed += 0.001;
        }
    },
});

