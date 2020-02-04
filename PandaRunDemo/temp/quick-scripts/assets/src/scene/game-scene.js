(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/src/scene/game-scene.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'facf018is5ERKFkFWa/fWq7', 'game-scene', __filename);
// src/scene/game-scene.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...

        platform_generator: null,
        platform_default_0: cc.Node,
        platform_default_1: cc.Node
    },

    // use this for initialization
    onLoad: function onLoad() {
        var platform_generator_node = cc.find("platform-generator");
        this.platform_generator = platform_generator_node.getComponent("platform-generator");
        this.platform_generator.initPlatforms([this.platform_default_0, this.platform_default_1]);
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
        //# sourceMappingURL=game-scene.js.map
        