window.__require=function t(e,o,n){function i(s,r){if(!o[s]){if(!e[s]){var a=s.split("/");if(a=a[a.length-1],!e[a]){var l="function"==typeof __require&&__require;if(!r&&l)return l(a,!0);if(c)return c(a,!0);throw new Error("Cannot find module '"+s+"'")}s=a}var p=o[s]={exports:{}};e[s][0].call(p.exports,function(t){return i(e[s][1][t]||t)},p,p.exports,t,e,o,n)}return o[s].exports}for(var c="function"==typeof __require&&__require,s=0;s<n.length;s++)i(n[s]);return i}({"Slot3x3Gem.Cmd":[function(t,e,o){"use strict";cc._RF.push(e,"0ec7fiXaadHLqjzzb9GTPKl","Slot3x3Gem.Cmd");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(o,"__esModule",{value:!0}),o.cmd=void 0;var c,s=t("../../Lobby/LobbyScript/Script/networks/Network.InPacket"),r=t("../../Lobby/LobbyScript/Script/networks/Network.OutPacket");(function(t){var e=function(){function t(){}return t.SCRIBE=8003,t.UNSCRIBE=8004,t.CHANGE_ROOM=8005,t.SPIN=8001,t.UPDATE_JACKPOT=8002,t}();t.Code=e;var o=function(t){function o(o){var n=t.call(this)||this;return n.initData(100),n.setControllerId(1),n.setCmdId(e.SCRIBE),n.packHeader(),n.putByte(o),n.updateSize(),n}return i(o,t),o}(r.default);t.SendScribe=o;var n=function(t){function o(o){var n=t.call(this)||this;return n.initData(100),n.setControllerId(1),n.setCmdId(e.UNSCRIBE),n.packHeader(),n.putByte(o),n.updateSize(),n}return i(o,t),o}(r.default);t.SendUnScribe=n;var c=function(t){function o(o,n){var i=t.call(this)||this;return i.initData(100),i.setControllerId(1),i.setCmdId(e.CHANGE_ROOM),i.packHeader(),i.putByte(o),i.putByte(n),i.updateSize(),i}return i(o,t),o}(r.default);t.SendChangeRoom=c;var a=function(t){function o(o,n){var i=t.call(this)||this;return i.initData(100),i.setControllerId(1),i.setCmdId(e.SPIN),i.packHeader(),i.putInt(o),i.putString(n),i.updateSize(),i}return i(o,t),o}(r.default);t.SendSpin=a;var l=function(t){function e(e){var o=t.call(this,e)||this;return o.value=0,o.x2=0,o.value=o.getLong(),o.x2=o.getByte(),o}return i(e,t),e}(s.default);t.ReceiveUpdateJackpot=l;var p=function(t){function e(e){var o=t.call(this,e)||this;return o.result=0,o.matrix="",o.linesWin="",o.prize=0,o.currentMoney=0,o.result=o.getByte(),o.matrix=o.getString(),o.linesWin=o.getString(),o.prize=o.getLong(),o.currentMoney=o.getLong(),o}return i(e,t),e}(s.default);t.ReceiveSpin=p})(c=o.cmd||(o.cmd={})),o.default=c,cc._RF.pop()},{"../../Lobby/LobbyScript/Script/networks/Network.InPacket":void 0,"../../Lobby/LobbyScript/Script/networks/Network.OutPacket":void 0}],"Slot3x3Gem.ItemSlot":[function(t,e,o){"use strict";cc._RF.push(e,"4d0aeQnEUhIJ5JtrFeiMHsr","Slot3x3Gem.ItemSlot");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var i,c=arguments.length,s=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(s=(c<3?i(s):c>3?i(e,o,s):i(e,o))||s);return c>3&&s&&Object.defineProperty(e,o,s),s};Object.defineProperty(o,"__esModule",{value:!0});var s=cc._decorator,r=s.ccclass,a=s.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.sprite=null,e.spine=null,e.sprAtlas=null,e.id=0,e.animName="",e}return i(e,t),e.prototype.setId=function(t){switch(t+=1,this.id=t,this.sprite.spriteFrame=this.sprAtlas.getSpriteFrame("icon"+this.id),this.spine.node.active=!0,this.sprite.node.active=!1,this.id){case 1:this.animName="wild";break;case 2:this.animName="do";break;case 3:this.animName="xanh luc";break;case 4:this.animName="la";break;case 5:this.animName="tim";break;case 6:this.animName="xanh duong"}this.spine.setAnimation(0,this.animName,!0)},e.prototype.setBlur=function(){this.sprite.spriteFrame=this.sprAtlas.getSpriteFrame("icon"+(this.id+1)+"_blur"),this.spine.node.active=!1,this.sprite.node.active=!0},c([a(cc.Sprite)],e.prototype,"sprite",void 0),c([a(sp.Skeleton)],e.prototype,"spine",void 0),c([a(cc.SpriteAtlas)],e.prototype,"sprAtlas",void 0),c([r],e)}(cc.Component);o.default=l,cc._RF.pop()},{}],"Slot3x3Gem.PopupHistory":[function(t,e,o){"use strict";cc._RF.push(e,"c4c0eEEc0BI0oCXpLMOF/eJ","Slot3x3Gem.PopupHistory");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var i,c=arguments.length,s=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(s=(c<3?i(s):c>3?i(e,o,s):i(e,o))||s);return c>3&&s&&Object.defineProperty(e,o,s),s};Object.defineProperty(o,"__esModule",{value:!0});var s=t("../../Loading/src/Http"),r=t("../../Loading/src/Configs"),a=t("../../Lobby/LobbyScript/Script/common/App"),l=t("../../Lobby/LobbyScript/Script/common/Dialog"),p=t("../../Lobby/LobbyScript/Script/common/Utils"),u=cc._decorator,h=u.ccclass,d=u.property,f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.lblPage=null,e.itemTemplate=null,e.page=1,e.maxPage=1,e.items=new Array,e}return i(e,t),e.prototype.show=function(){t.prototype.show.call(this),a.default.instance.showBgMiniGame("Slot3x3Gem");for(var e=0;e<this.items.length;e++)this.items[e].active=!1;null!=this.itemTemplate&&(this.itemTemplate.active=!1)},e.prototype.dismiss=function(){t.prototype.dismiss.call(this);for(var e=0;e<this.items.length;e++)this.items[e].active=!1},e.prototype._onShowed=function(){t.prototype._onShowed.call(this),this.page=1,this.maxPage=1,this.lblPage.string=this.page+"/"+this.maxPage,this.loadData()},e.prototype.actNextPage=function(){this.page<this.maxPage&&(this.page++,this.lblPage.string=this.page+"/"+this.maxPage,this.loadData())},e.prototype.actPrevPage=function(){this.page>1&&(this.page--,this.lblPage.string=this.page+"/"+this.maxPage,this.loadData())},e.prototype.loadData=function(){var t=this;a.default.instance.showLoading(!0),s.default.get(r.default.App.API,{c:141,mt:r.default.App.MONEY_TYPE,p:this.page,un:r.default.Login.Nickname},function(e,o){if(a.default.instance.showLoading(!1),null==e&&o.success){if(0==t.items.length){for(var n=0;n<7;n++)(c=cc.instantiate(t.itemTemplate)).parent=t.itemTemplate.parent,t.items.push(c);t.itemTemplate.destroy(),t.itemTemplate=null}t.maxPage=o.totalPages,t.lblPage.string=t.page+"/"+t.maxPage;for(var i=0;i<t.items.length;i++){var c=t.items[i];if(i<o.results.length){var s=o.results[i];c.getChildByName("bg").opacity=i%2==0?10:0,c.getChildByName("Session").getComponent(cc.Label).string=s.rf,c.getChildByName("Time").getComponent(cc.Label).string=s.ts,c.getChildByName("Bet").getComponent(cc.Label).string=p.default.formatNumber(s.bv),c.getChildByName("LineBet").getComponent(cc.Label).string=""==s.lb?0:s.lb.split(",").length,c.getChildByName("LineWin").getComponent(cc.Label).string=""==s.lb?0:s.lw.split(",").length,c.getChildByName("Result").getComponent(cc.Label).string=p.default.formatNumber(s.pz),c.active=!0}else c.active=!1}}})},c([d(cc.Label)],e.prototype,"lblPage",void 0),c([d(cc.Node)],e.prototype,"itemTemplate",void 0),c([h],e)}(l.default);o.default=f,cc._RF.pop()},{"../../Loading/src/Configs":void 0,"../../Loading/src/Http":void 0,"../../Lobby/LobbyScript/Script/common/App":void 0,"../../Lobby/LobbyScript/Script/common/Dialog":void 0,"../../Lobby/LobbyScript/Script/common/Utils":void 0}],"Slot3x3Gem.PopupHonors":[function(t,e,o){"use strict";cc._RF.push(e,"7d7d4yrIftEUrsVvjHCvJF/","Slot3x3Gem.PopupHonors");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var i,c=arguments.length,s=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(s=(c<3?i(s):c>3?i(e,o,s):i(e,o))||s);return c>3&&s&&Object.defineProperty(e,o,s),s};Object.defineProperty(o,"__esModule",{value:!0});var s=t("../../Loading/src/Http"),r=t("../../Loading/src/Configs"),a=t("../../Lobby/LobbyScript/Script/common/App"),l=t("../../Lobby/LobbyScript/Script/common/Dialog"),p=t("../../Lobby/LobbyScript/Script/common/Utils"),u=cc._decorator,h=u.ccclass,d=u.property,f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.lblPage=null,e.itemTemplate=null,e.page=1,e.maxPage=1,e.items=new Array,e}return i(e,t),e.prototype.show=function(){t.prototype.show.call(this),a.default.instance.showBgMiniGame("Slot3x3Gem");for(var e=0;e<this.items.length;e++)this.items[e].active=!1;null!=this.itemTemplate&&(this.itemTemplate.active=!1)},e.prototype.dismiss=function(){t.prototype.dismiss.call(this);for(var e=0;e<this.items.length;e++)this.items[e].active=!1},e.prototype._onShowed=function(){t.prototype._onShowed.call(this),this.page=1,this.maxPage=1,this.lblPage.string=this.page+"/"+this.maxPage,this.loadData()},e.prototype.actNextPage=function(){this.page<this.maxPage&&(this.page++,this.lblPage.string=this.page+"/"+this.maxPage,this.loadData())},e.prototype.actPrevPage=function(){this.page>1&&(this.page--,this.lblPage.string=this.page+"/"+this.maxPage,this.loadData())},e.prototype.loadData=function(){var t=this;a.default.instance.showLoading(!0),s.default.get(r.default.App.API,{c:142,mt:r.default.App.MONEY_TYPE,p:this.page},function(e,o){if(a.default.instance.showLoading(!1),null==e&&o.success){if(0==t.items.length){for(var n=0;n<7;n++)(c=cc.instantiate(t.itemTemplate)).parent=t.itemTemplate.parent,t.items.push(c);t.itemTemplate.destroy(),t.itemTemplate=null}t.maxPage=o.totalPages,t.lblPage.string=t.page+"/"+t.maxPage;for(var i=0;i<t.items.length;i++){var c=t.items[i];if(i<o.results.length){var s=o.results[i];c.getChildByName("bg").opacity=i%2==0?10:0,c.getChildByName("Time").getComponent(cc.Label).string=s.ts,c.getChildByName("Account").getComponent(cc.Label).string=s.un,c.getChildByName("Bet").getComponent(cc.Label).string=p.default.formatNumber(s.bv),c.getChildByName("Win").getComponent(cc.Label).string=p.default.formatNumber(s.pz),c.active=!0}else c.active=!1}}})},c([d(cc.Label)],e.prototype,"lblPage",void 0),c([d(cc.Node)],e.prototype,"itemTemplate",void 0),c([h],e)}(l.default);o.default=f,cc._RF.pop()},{"../../Loading/src/Configs":void 0,"../../Loading/src/Http":void 0,"../../Lobby/LobbyScript/Script/common/App":void 0,"../../Lobby/LobbyScript/Script/common/Dialog":void 0,"../../Lobby/LobbyScript/Script/common/Utils":void 0}],"Slot3x3Gem.PopupSelectLine":[function(t,e,o){"use strict";cc._RF.push(e,"10f18R3QHtMuZlazU+HkOmY","Slot3x3Gem.PopupSelectLine");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var i,c=arguments.length,s=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(s=(c<3?i(s):c>3?i(e,o,s):i(e,o))||s);return c>3&&s&&Object.defineProperty(e,o,s),s};Object.defineProperty(o,"__esModule",{value:!0});var s=t("../../Lobby/LobbyScript/Script/common/App"),r=t("../../Lobby/LobbyScript/Script/common/Dialog"),a=cc._decorator,l=a.ccclass,p=a.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.buttonsLine=null,e.btnClose=null,e.onSelectedChanged=null,e.SELECTED="selected",e}return i(e,t),e.prototype.start=function(){for(var t=this,e=function(e){var n=o.buttonsLine.children[e];n[o.SELECTED]=!0,n.on("click",function(){n[t.SELECTED]=!n[t.SELECTED],n.opacity=n[t.SELECTED]?255:80,null!=t.onSelectedChanged&&t.onSelectedChanged(t.getSelectedLines()),t.btnClose.interactable=t.getSelectedLines().length>0})},o=this,n=0;n<this.buttonsLine.childrenCount;n++)e(n)},e.prototype.show=function(){t.prototype.show.call(this),s.default.instance.showBgMiniGame("Slot3x3Gem")},e.prototype.actSelectAll=function(){for(var t=0;t<this.buttonsLine.childrenCount;t++){var e=this.buttonsLine.children[t];e[this.SELECTED]=!0,e.opacity=e[this.SELECTED]?255:80}null!=this.onSelectedChanged&&this.onSelectedChanged(this.getSelectedLines()),this.btnClose.interactable=!0},e.prototype.actSelectEven=function(){for(var t=0;t<this.buttonsLine.childrenCount;t++){var e=this.buttonsLine.children[t];e[this.SELECTED]=t%2!=0,e.opacity=e[this.SELECTED]?255:80}null!=this.onSelectedChanged&&this.onSelectedChanged(this.getSelectedLines()),this.btnClose.interactable=!0},e.prototype.actSelectOdd=function(){for(var t=0;t<this.buttonsLine.childrenCount;t++){var e=this.buttonsLine.children[t];e[this.SELECTED]=t%2==0,e.opacity=e[this.SELECTED]?255:80}null!=this.onSelectedChanged&&this.onSelectedChanged(this.getSelectedLines()),this.btnClose.interactable=!0},e.prototype.actDeselectAll=function(){for(var t=0;t<this.buttonsLine.childrenCount;t++){var e=this.buttonsLine.children[t];e[this.SELECTED]=!1,e.opacity=e[this.SELECTED]?255:80}null!=this.onSelectedChanged&&this.onSelectedChanged(this.getSelectedLines()),this.btnClose.interactable=!1},e.prototype.getSelectedLines=function(){for(var t=new Array,e=0;e<this.buttonsLine.childrenCount;e++){var o=this.buttonsLine.children[e];(void 0===o[this.SELECTED]||o[this.SELECTED])&&t.push(e+1)}return t},e.prototype.dismiss=function(){this.getSelectedLines().length>0&&t.prototype.dismiss.call(this)},c([p(cc.Node)],e.prototype,"buttonsLine",void 0),c([p(cc.Button)],e.prototype,"btnClose",void 0),c([l],e)}(r.default);o.default=u,cc._RF.pop()},{"../../Lobby/LobbyScript/Script/common/App":void 0,"../../Lobby/LobbyScript/Script/common/Dialog":void 0}],"Slot3x3Gem.Slot3x3Controller":[function(t,e,o){"use strict";cc._RF.push(e,"bf5328IdclAa6Ur1llGhidg","Slot3x3Gem.Slot3x3Controller");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var i,c=arguments.length,s=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(s=(c<3?i(s):c>3?i(e,o,s):i(e,o))||s);return c>3&&s&&Object.defineProperty(e,o,s),s};Object.defineProperty(o,"__esModule",{value:!0}),o.ButtonBet=void 0;var s=t("./Slot3x3Gem.Cmd"),r=t("./Slot3x3Gem.PopupSelectLine"),a=t("../../Loading/src/Configs"),l=t("../../Lobby/LobbyScript/MiniGame"),p=t("../../Lobby/LobbyScript/Script/common/BroadcastReceiver"),u=t("../../Lobby/LobbyScript/Script/common/Tween"),h=t("../../Lobby/LobbyScript/Script/common/Utils"),d=t("../../Lobby/LobbyScript/Script/networks/MiniGameNetworkClient"),f=t("../../Lobby/LobbyScript/Script/networks/Network.InPacket"),m=t("../../Lobby/LobbyScript/Script/common/App"),b=t("./Slot3x3Gem.PopupHistory"),g=t("./Slot3x3Gem.PopupHonors"),y=cc._decorator,S=y.ccclass,v=y.property,L=function(){function t(){this.button=null,this.sfNormal=null,this.sfActive=null,this._isActive=!1}return t.prototype.setActive=function(t){this._isActive=t,this.button.getComponent(cc.Sprite).spriteFrame=t?this.sfActive:this.sfNormal,this.button.interactable=!t},c([v(cc.Button)],t.prototype,"button",void 0),c([v(cc.SpriteFrame)],t.prototype,"sfNormal",void 0),c([v(cc.SpriteFrame)],t.prototype,"sfActive",void 0),c([S("Slot3x3Gem.ButtonBet")],t)}();o.ButtonBet=L;var C=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.itemTemplate=null,e.popupContainer=null,e.buttonBets=[],e.columns=null,e.linesWin=null,e.btnSpin=null,e.btnLine=null,e.btnClose=null,e.btnAuto=null,e.sfAuto0=null,e.sfAuto1=null,e.btnBoost=null,e.sfBoost0=null,e.sfBoost1=null,e.lblJackpot=null,e.lblWinCash=null,e.lblToast=null,e.effectJackpot=null,e.effectBigWin=null,e.lbTotalLine=null,e.popupSelectLine=null,e.popups=[],e.rollStartItemCount=15,e.rollAddItemCount=10,e.spinDuration=1.2,e.addSpinDuration=.3,e.itemHeight=0,e.betIdx=0,e.listBet=[100,1e3,1e4],e.arrLineSelect=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],e.isSpined=!0,e.isBoost=!1,e.isAuto=!1,e.isCanChangeBet=!0,e.lastSpinRes=null,e.popupGuide=null,e.popupHistory=null,e.popupHonor=null,e}return i(e,t),e.prototype.start=function(){var t=this;this.itemHeight=this.itemTemplate.height;for(var e=0;e<this.columns.childrenCount;e++)for(var o=this.columns.children[e],n=this.rollStartItemCount+e*this.rollAddItemCount,i=0;i<n;i++){var c=cc.instantiate(this.itemTemplate);c.parent=o,i>=3?(c.getComponent("Slot3x3Gem.ItemSlot").id=h.default.randomRangeInt(0,6),c.getComponent("Slot3x3Gem.ItemSlot").setBlur()):c.getComponent("Slot3x3Gem.ItemSlot").setId(h.default.randomRangeInt(0,6))}this.itemTemplate.removeFromParent(),this.itemTemplate=null;var r,a=function(e){(r=l.buttonBets[e]).setActive(e==l.betIdx),r.button.node.on("click",function(){if(m.default.instance.showBgMiniGame("Slot3x3Gem"),t.isCanChangeBet){var o=t.betIdx;t.betIdx=e;for(var n=0;n<t.buttonBets.length;n++)t.buttonBets[n].setActive(n==t.betIdx);t.isCanChangeBet=!1,t.scheduleOnce(function(){t.isCanChangeBet=!0},1),d.default.getInstance().send(new s.default.SendChangeRoom(o,t.betIdx))}else t.showToast(m.default.instance.getTextLang("txt_notify_fast_action"))})},l=this;for(e=0;e<this.buttonBets.length;e++)a(e);this.btnAuto.node.on("click",function(){t.isAuto=!t.isAuto,m.default.instance.showBgMiniGame("Slot3x3Gem"),t.isAuto?(t.isSpined&&t.actSpin(),t.btnBoost.interactable=!1,t.btnAuto.getComponent(cc.Sprite).spriteFrame=t.sfAuto1):(t.btnBoost.interactable=!0,t.btnAuto.getComponent(cc.Sprite).spriteFrame=t.sfAuto0,t.isSpined&&t.setEnabledAllButtons(!0))}),this.btnBoost.node.on("click",function(){t.isBoost=!t.isBoost,m.default.instance.showBgMiniGame("Slot3x3Gem"),t.isBoost?(t.isSpined&&t.actSpin(),t.btnAuto.interactable=!1,t.btnBoost.getComponent(cc.Sprite).spriteFrame=t.sfBoost1):(t.btnAuto.interactable=!0,t.btnBoost.getComponent(cc.Sprite).spriteFrame=t.sfBoost0,t.isSpined&&t.setEnabledAllButtons(!0))}),p.default.register(p.default.USER_LOGOUT,function(){t.node.active&&t.dismiss()},this),d.default.getInstance().addOnClose(function(){t.node.active&&t.dismiss()},this),d.default.getInstance().addListener(function(e){if(t.node.active)switch(new f.default(e).getCmdId()){case s.default.Code.UPDATE_JACKPOT:var o=new s.default.ReceiveUpdateJackpot(e);u.default.numberTo(t.lblJackpot,o.value,.3);break;case s.default.Code.SPIN:o=new s.default.ReceiveSpin(e),t.onSpinResult(o)}},this)},e.prototype.show=function(){if(this.node.active)this.reOrder();else{m.default.instance.showBgMiniGame("Slot3x3Gem"),t.prototype.show.call(this),this.lblToast.node.parent.active=!1,this.lblWinCash.parent.active=!1;for(var e=0;e<this.linesWin.childrenCount;e++)this.linesWin.children[e].active=!1;for(this.isSpined=!0,this.isCanChangeBet=!0,this.betIdx=0,e=0;e<this.buttonBets.length;e++)this.buttonBets[e].setActive(e==this.betIdx);d.default.getInstance().send(new s.default.SendScribe(this.betIdx))}},e.prototype.dismiss=function(){t.prototype.dismiss.call(this);for(var e=0;e<this.popups.length;e++)this.popups[e].active=!1;m.default.instance.hideGameMini("Slot3x3Gem"),d.default.getInstance().send(new s.default.SendUnScribe(this.betIdx))},e.prototype.reOrder=function(){t.prototype.reOrder.call(this)},e.prototype.actSpin=function(t){if(void 0===t&&(t=null),this.isSpined){null!=t&&m.default.instance.showBgMiniGame("Slot3x3Gem"),this.isSpined=!1,this.stopAllEffects(),this.stopShowLinesWin(),this.setEnabledAllButtons(!1);for(var e=0;e<this.buttonBets.length;e++)this.buttonBets[e].button.interactable=!1;d.default.getInstance().send(new s.default.SendSpin(this.listBet[this.betIdx],this.arrLineSelect.toString()))}else this.showToast(m.default.instance.getTextLang("txt_notify_fast_action"))},e.prototype.setEnabledAllButtons=function(t){this.btnSpin.interactable=t,this.btnClose.interactable=t,this.btnLine.interactable=t,this.btnSpin.node.getComponentInChildren(sp.Skeleton).node.active=t},e.prototype.showToast=function(t){this.lblToast.string=t;var e=this.lblToast.node.parent;e.stopAllActions(),e.active=!0,e.opacity=0,e.runAction(cc.sequence(cc.fadeIn(.1),cc.delayTime(2),cc.fadeOut(.2),cc.callFunc(function(){e.active=!1})))},e.prototype.onSpinResult=function(t){var e=this;cc.log(t);var o=this;if([0,1,2,3,4,5,6].indexOf(t.result)<0){this.scheduleOnce(function(){this.isSpined=!0},1),this.setEnabledAllButtons(!0);for(var n=0;n<this.buttonBets.length;n++)this.buttonBets[n].button.interactable=!0;switch(this.isAuto=!1,this.btnAuto.interactable=!0,this.btnAuto.getComponent(cc.Sprite).spriteFrame=this.sfAuto0,this.isBoost=!1,this.btnBoost.interactable=!0,this.btnBoost.getComponent(cc.Sprite).spriteFrame=this.sfBoost0,t.result){case 102:this.showToast(m.default.instance.getTextLang("txt_not_enough"));break;default:this.showToast(m.default.instance.getTextLang("txt_unknown_error1"))}}else{a.default.Login.Coin-=this.listBet[this.betIdx]*this.arrLineSelect.length,p.default.send(p.default.USER_UPDATE_COIN),a.default.Login.Coin=t.currentMoney,this.lastSpinRes=t;for(var i=t.matrix.split(","),c=this.isBoost?.5:1,s=function(t){var n=r.columns.children[t],s=.3*r.itemHeight,a=-r.itemHeight*n.childrenCount+3*r.itemHeight-.3*r.itemHeight,l=-r.itemHeight*n.childrenCount+3*r.itemHeight;n.runAction(cc.sequence(cc.delayTime(.2*t*c),cc.moveTo(.2*c,cc.v2(n.getPosition().x,s)).easing(cc.easeQuadraticActionOut()),cc.moveTo((r.spinDuration+r.addSpinDuration*t)*c,cc.v2(n.getPosition().x,a)).easing(cc.easeQuadraticActionInOut()),cc.moveTo(.2*c,cc.v2(n.getPosition().x,l)).easing(cc.easeQuadraticActionIn()),cc.callFunc(function(){n.setPosition(cc.v2(n.getPosition().x,0)),t===e.columns.childrenCount-1&&o.spined()}))),n.runAction(cc.sequence(cc.delayTime((.7+.2*t)*c),cc.callFunc(function(){var e=n.children;e[2].getComponent("Slot3x3Gem.ItemSlot").setId(parseInt(i[t])),e[1].getComponent("Slot3x3Gem.ItemSlot").setId(parseInt(i[3+t])),e[0].getComponent("Slot3x3Gem.ItemSlot").setId(parseInt(i[6+t]));var o=e[e.length-1].getComponent("Slot3x3Gem.ItemSlot"),c=e[e.length-2].getComponent("Slot3x3Gem.ItemSlot"),s=e[e.length-3].getComponent("Slot3x3Gem.ItemSlot");o.setId(parseInt(i[t])),c.setId(parseInt(i[3+t])),s.setId(parseInt(i[6+t]))})))},r=this,l=0;l<this.columns.childrenCount;l++)s(l)}},e.prototype.spined=function(){var t=this;switch(p.default.send(p.default.USER_UPDATE_COIN),this.isSpined=!0,this.isAuto||this.isBoost||this.setEnabledAllButtons(!0),this.lastSpinRes.result){case 0:case 1:this.showLineWins();break;case 2:this.showEffectBigWin(this.lastSpinRes.prize,function(){return t.showLineWins()});break;case 3:case 4:this.showEffectJackpot(this.lastSpinRes.prize,function(){return t.showLineWins()});break;case 6:this.showEffectBigWin(this.lastSpinRes.prize,function(){return t.showLineWins()})}},e.prototype.showEffectBigWin=function(t,e){var o=this;this.effectBigWin.stopAllActions(),this.effectBigWin.active=!0;var n=this.effectBigWin.getComponentInChildren(cc.Label);n.node.active=!1,this.effectBigWin.runAction(cc.sequence(cc.delayTime(1),cc.callFunc(function(){n.string="",n.node.active=!0,u.default.numberTo(n,t,1)}),cc.delayTime(3),cc.callFunc(function(){o.effectBigWin.active=!1,null!=e&&e()})))},e.prototype.showEffectJackpot=function(t,e){var o=this;void 0===e&&(e=null),this.effectJackpot.stopAllActions(),this.effectJackpot.active=!0;var n=this.effectJackpot.getComponentInChildren(cc.Label);n.node.active=!1,this.effectJackpot.runAction(cc.sequence(cc.delayTime(1),cc.callFunc(function(){n.string="",n.node.active=!0,u.default.numberTo(n,t,1)}),cc.delayTime(3),cc.callFunc(function(){o.effectJackpot.active=!1,null!=e&&e()})))},e.prototype.showWinCash=function(t){var e=this.lblWinCash.parent,o=this.lblWinCash.getComponent(cc.Label);e.stopAllActions(),e.active=!0,o.string="0",e.opacity=0,e.runAction(cc.sequence(cc.fadeIn(.3),cc.callFunc(function(){u.default.numberTo(o,t,.5)}),cc.delayTime(1.5),cc.fadeOut(.3),cc.callFunc(function(){e.active=!1})))},e.prototype.stopAllEffects=function(){this.effectJackpot.stopAllActions(),this.effectJackpot.active=!1,this.effectBigWin.stopAllActions(),this.effectBigWin.active=!1},e.prototype.stopShowLinesWin=function(){this.linesWin.stopAllActions();for(var t=0;t<this.linesWin.childrenCount;t++)this.linesWin.children[t].active=!1;this.stopAllItemEffect()},e.prototype.stopAllItemEffect=function(){for(var t=0;t<this.columns.childrenCount;t++){var e=this.columns.children[t].children;e[0].stopAllActions(),e[1].stopAllActions(),e[2].stopAllActions(),e[0].runAction(cc.scaleTo(.1,1)),e[1].runAction(cc.scaleTo(.1,1)),e[2].runAction(cc.scaleTo(.1,1))}},e.prototype.showLineWins=function(){var t=this;this.linesWin.stopAllActions();for(var e=this.lastSpinRes.linesWin.split(","),o=this.linesWin.children,n=0;n<o.length;n++)o[n].active=e.indexOf(""+(n+1))>=0;var i=[];this.lastSpinRes.prize>0&&(this.showWinCash(this.lastSpinRes.prize),i.push(cc.delayTime(1.5)),i.push(cc.callFunc(function(){for(var t=0;t<o.length;t++)o[t].active=!1}))),i.push(cc.delayTime(.5)),i.push(cc.callFunc(function(){if(t.isSpined=!0,t.isBoost||t.isAuto)t.actSpin();else{t.setEnabledAllButtons(!0);for(var e=0;e<t.buttonBets.length;e++)t.buttonBets[e].button.interactable=!0}})),this.linesWin.runAction(cc.sequence.apply(null,i))},e.prototype.actGuide=function(){var t=this;null==this.popupGuide?cc.assetManager.getBundle("Slot3x3Gem").load("Prefabs/PopupGuide",cc.Prefab,function(){},function(e,o){t.popupGuide=cc.instantiate(o).getComponent("Dialog"),t.popupGuide.node.parent=t.popupContainer,t.popupGuide.show(),t.popups.push(t.popupGuide.node),m.default.instance.showLoading(!1)}):this.popupGuide.show()},e.prototype.actHistory=function(){var t=this;null==this.popupHistory?cc.assetManager.getBundle("Slot3x3Gem").load("Prefabs/PopupHistory",cc.Prefab,function(){},function(e,o){t.popupHistory=cc.instantiate(o).getComponent(b.default),t.popupHistory.node.parent=t.popupContainer,t.popupHistory.show(),t.popups.push(t.popupHistory.node),m.default.instance.showLoading(!1)}):this.popupHistory.show()},e.prototype.actHonor=function(){var t=this;null==this.popupHonor?cc.assetManager.getBundle("Slot3x3Gem").load("Prefabs/PopupHonors",cc.Prefab,function(){},function(e,o){t.popupHonor=cc.instantiate(o).getComponent(g.default),t.popupHonor.node.parent=t.popupContainer,t.popupHonor.show(),t.popups.push(t.popupHonor.node),m.default.instance.showLoading(!1)}):this.popupHonor.show()},e.prototype.actSelectLine=function(){var t=this;null==this.popupSelectLine?cc.assetManager.getBundle("Slot3x3Gem").load("Prefabs/PopupSelectLine",cc.Prefab,function(){},function(e,o){t.popupSelectLine=cc.instantiate(o).getComponent(r.default),t.popupSelectLine.node.parent=t.popupContainer,t.popupSelectLine.show(),t.popups.push(t.popupSelectLine.node),m.default.instance.showLoading(!1),t.popupSelectLine.onSelectedChanged=function(e){t.arrLineSelect=e,cc.log("lines=",e),t.lbTotalLine.string=e.length+""}}):this.popupSelectLine.show()},c([v(cc.Node)],e.prototype,"itemTemplate",void 0),c([v(cc.Node)],e.prototype,"popupContainer",void 0),c([v([L])],e.prototype,"buttonBets",void 0),c([v(cc.Node)],e.prototype,"columns",void 0),c([v(cc.Node)],e.prototype,"linesWin",void 0),c([v(cc.Button)],e.prototype,"btnSpin",void 0),c([v(cc.Button)],e.prototype,"btnLine",void 0),c([v(cc.Button)],e.prototype,"btnClose",void 0),c([v(cc.Button)],e.prototype,"btnAuto",void 0),c([v(cc.SpriteFrame)],e.prototype,"sfAuto0",void 0),c([v(cc.SpriteFrame)],e.prototype,"sfAuto1",void 0),c([v(cc.Button)],e.prototype,"btnBoost",void 0),c([v(cc.SpriteFrame)],e.prototype,"sfBoost0",void 0),c([v(cc.SpriteFrame)],e.prototype,"sfBoost1",void 0),c([v(cc.Label)],e.prototype,"lblJackpot",void 0),c([v(cc.Node)],e.prototype,"lblWinCash",void 0),c([v(cc.Label)],e.prototype,"lblToast",void 0),c([v(cc.Node)],e.prototype,"effectJackpot",void 0),c([v(cc.Node)],e.prototype,"effectBigWin",void 0),c([v(cc.Label)],e.prototype,"lbTotalLine",void 0),c([v(r.default)],e.prototype,"popupSelectLine",void 0),c([v([cc.Node])],e.prototype,"popups",void 0),c([S],e)}(l.default);o.default=C,cc._RF.pop()},{"../../Loading/src/Configs":void 0,"../../Lobby/LobbyScript/MiniGame":void 0,"../../Lobby/LobbyScript/Script/common/App":void 0,"../../Lobby/LobbyScript/Script/common/BroadcastReceiver":void 0,"../../Lobby/LobbyScript/Script/common/Tween":void 0,"../../Lobby/LobbyScript/Script/common/Utils":void 0,"../../Lobby/LobbyScript/Script/networks/MiniGameNetworkClient":void 0,"../../Lobby/LobbyScript/Script/networks/Network.InPacket":void 0,"./Slot3x3Gem.Cmd":"Slot3x3Gem.Cmd","./Slot3x3Gem.PopupHistory":"Slot3x3Gem.PopupHistory","./Slot3x3Gem.PopupHonors":"Slot3x3Gem.PopupHonors","./Slot3x3Gem.PopupSelectLine":"Slot3x3Gem.PopupSelectLine"}]},{},["Slot3x3Gem.Cmd","Slot3x3Gem.ItemSlot","Slot3x3Gem.PopupHistory","Slot3x3Gem.PopupHonors","Slot3x3Gem.PopupSelectLine","Slot3x3Gem.Slot3x3Controller"]);