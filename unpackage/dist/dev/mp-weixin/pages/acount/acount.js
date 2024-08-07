"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      accountID: "123",
      menuItems: [
        { text: "账号管理", bindTap: "acountManage" },
        { text: "安全设置", bindTap: "security" },
        { text: "API访问密钥", bindTap: "APIVisit" },
        { text: "访问控制", bindTap: "visitControl" },
        { text: "云审计", bindTap: "cloud" },
        { text: "配额中心", bindTap: "center" },
        { text: "资源管理", bindTap: "resources" },
        { text: "退出登录", bindTap: "exitLogin" }
      ]
    };
  },
  methods: {
    // aountManage(){
    // },
    // security(){
    // },
    // APIVisit(){},
    // visitControl(){},
    // cloud(){},
    // center(){},
    // resources(){},
    // exitLogin(){}
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.menuItems, (item, index, i0) => {
      return {
        a: common_vendor.t(item.text),
        b: index,
        c: common_vendor.o(($event) => _ctx.handleTap(item.bindTap), index)
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Coding/HbuilderProject/bio-os/pages/acount/acount.vue"]]);
wx.createPage(MiniProgramPage);
