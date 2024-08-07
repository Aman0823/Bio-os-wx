"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: ""
    };
  },
  onLoad() {
  },
  methods: {
    onLogin() {
      common_vendor.index.switchTab({
        url: "/pages/home/home"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.title),
    b: common_vendor.o((...args) => $options.onLogin && $options.onLogin(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Coding/HbuilderProject/bio-os/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
