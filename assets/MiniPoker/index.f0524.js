window.__require=function t(e,o,i){function n(a,s){if(!o[a]){if(!e[a]){var c=a.split("/");if(c=c[c.length-1],!e[c]){var p="function"==typeof __require&&__require;if(!s&&p)return p(c,!0);if(r)return r(c,!0);throw new Error("Cannot find module '"+a+"'")}a=c}var l=o[a]={exports:{}};e[a][0].call(l.exports,function(t){return n(e[a][1][t]||t)},l,l.exports,t,e,o,i)}return o[a].exports}for(var r="function"==typeof __require&&__require,a=0;a<i.length;a++)n(i[a]);return n}({"MiniPoker.Cmd":[function(t,e,o){"use strict";cc._RF.push(e,"62c5aekeZlAL4VtbeCtXj2Z","MiniPoker.Cmd");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(o,"__esModule",{value:!0}),o.cmd=void 0;var r,a=t("../../Loading/src/Configs"),s=t("../../Lobby/LobbyScript/Script/networks/Network.InPacket"),c=t("../../Lobby/LobbyScript/Script/networks/Network.OutPacket");(function(t){var e=function(){function t(){}return t.SCRIBE=4003,t.UNSCRIBE=4004,t.CHANGE_ROOM=4005,t.SPIN=4001,t.UPDATE_JACKPOT=4002,t}();t.Code=e;var o=function(t){function o(o){var i=t.call(this)||this;return i.initData(100),i.setControllerId(1),i.setCmdId(e.SCRIBE),i.packHeader(),i.putByte(o),i.updateSize(),i}return n(o,t),o}(c.default);t.SendScribe=o;var i=function(t){function o(o){var i=t.call(this)||this;return i.initData(100),i.setControllerId(1),i.setCmdId(e.UNSCRIBE),i.packHeader(),i.putByte(o),i.updateSize(),i}return n(o,t),o}(c.default);t.SendUnScribe=i;var r=function(t){function o(o,i){var n=t.call(this)||this;return n.initData(100),n.setControllerId(1),n.setCmdId(e.CHANGE_ROOM),n.packHeader(),n.putByte(o),n.putByte(i),n.updateSize(),n}return n(o,t),o}(c.default);t.SendChangeRoom=r;var p=function(t){function o(o){var i=t.call(this)||this;return i.initData(100),i.setControllerId(1),i.setCmdId(e.SPIN),i.packHeader(),i.putLong(o),i.putShort(a.default.App.MONEY_TYPE),i.updateSize(),i}return n(o,t),o}(c.default);t.SendSpin=p;var l=function(t){function e(e){var o=t.call(this,e)||this;return o.value=0,o.x2=0,o.value=o.getLong(),o.x2=o.getByte(),o}return n(e,t),e}(s.default);t.ReceiveUpdateJackpot=l;var u=function(t){function e(e){var o=t.call(this,e)||this;return o.result=0,o.prize=0,o.card1=0,o.card2=0,o.card3=0,o.card4=0,o.card5=0,o.currentMoney=0,o.result=o.getShort(),o.prize=o.getLong(),o.card1=o.getByte(),o.card2=o.getByte(),o.card3=o.getByte(),o.card4=o.getByte(),o.card5=o.getByte(),o.currentMoney=o.getLong(),o}return n(e,t),e}(s.default);t.ReceiveSpin=u})(r=o.cmd||(o.cmd={})),o.default=r,cc._RF.pop()},{"../../Loading/src/Configs":void 0,"../../Lobby/LobbyScript/Script/networks/Network.InPacket":void 0,"../../Lobby/LobbyScript/Script/networks/Network.OutPacket":void 0}],"MiniPoker.MiniPokerController":[function(t,e,o){"use strict";cc._RF.push(e,"93f55F36+ZG/4x1s8HLfpyR","MiniPoker.MiniPokerController");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0}),o.ButtonBet=void 0;var a=t("../../Loading/src/BundleControl"),s=t("../../Loading/src/Configs"),c=t("../../Lobby/LobbyScript/MiniGame"),p=t("../../Lobby/LobbyScript/Script/common/App"),l=t("../../Lobby/LobbyScript/Script/common/BroadcastReceiver"),u=t("../../Lobby/LobbyScript/Script/common/Language.LanguageManager"),d=t("../../Lobby/LobbyScript/Script/common/Tween"),h=t("../../Lobby/LobbyScript/Script/common/Utils"),b=t("../../Lobby/LobbyScript/Script/networks/MiniGameNetworkClient"),f=t("../../Lobby/LobbyScript/Script/networks/Network.InPacket"),g=t("./MiniPoker.Cmd"),m=cc._decorator,y=m.ccclass,v=m.property,S=function(){function t(){this.button=null,this.sfNormal=null,this.sfActive=null,this._isActive=!1}return t.prototype.setActive=function(t){this._isActive=t,this.button.getComponent(cc.Sprite).spriteFrame=t?this.sfActive:this.sfNormal,this.button.interactable=!t},r([v(cc.Button)],t.prototype,"button",void 0),r([v(cc.SpriteFrame)],t.prototype,"sfNormal",void 0),r([v(cc.SpriteFrame)],t.prototype,"sfActive",void 0),r([y("ButtonBet")],t)}();o.ButtonBet=S;var P=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.sprAtlasCards=null,e.columns=null,e.itemTemplate=null,e.lblJackpot=null,e.buttonBets=[],e.lblToast=null,e.btnSpinAnim=null,e.btnSpin=null,e.btnClose=null,e.toggleAuto=null,e.btnBoost=null,e.sprResult=null,e.lblWinCash=null,e.popupContainer=null,e.popups=[],e.rollStartItemCount=15,e.rollAddItemCount=10,e.spinDuration=1.2,e.addSpinDuration=.3,e.listBet=[10,100,1e3],e.defaultCards=[0,1,2,3,4],e.itemHeight=0,e.betIdx=-1,e.isBoost=!1,e.isCanChangeBet=!0,e.isSpined=!0,e.lastSpinRes=null,e.popupGuide=null,e.popupHistory=null,e.popupHonor=null,e}return n(e,t),e.prototype.start=function(){var t=this;this.itemHeight=this.itemTemplate.height;for(var e=0;e<this.columns.childrenCount;e++)for(var o=this.columns.children[e],i=this.rollStartItemCount+e*this.rollAddItemCount,n=0;n<i;n++){var r=cc.instantiate(this.itemTemplate);r.parent=o,r.children[0].getComponent(cc.Sprite).spriteFrame=n>=1?this.sprAtlasCards.getSpriteFrame("cardBlur_"+h.default.randomRangeInt(1,15)):this.sprAtlasCards.getSpriteFrame("card"+this.defaultCards[e])}this.itemTemplate.removeFromParent(),this.itemTemplate=null;var a,s=function(e){(a=c.buttonBets[e]).setActive(e==c.betIdx),a.button.node.on("click",function(){if(p.default.instance.showBgMiniGame("MiniPoker"),t.isCanChangeBet){var o=t.betIdx;t.betIdx=e;for(var i=0;i<t.buttonBets.length;i++)t.buttonBets[i].setActive(i==t.betIdx);t.isCanChangeBet=!1,t.scheduleOnce(function(){t.isCanChangeBet=!0},1),b.default.getInstance().send(new g.default.SendChangeRoom(o,t.betIdx)),cc.log("send change room:",o+"---0-"+t.betIdx)}else t.showToast(" \u101c\u102f\u1015\u103a\u1006\u1031\u102c\u1004\u103a\u1019\u103e\u102f \u1021\u101c\u103d\u1014\u103a\u1019\u103c\u1014\u103a\u101e\u100a\u103a ")})},c=this;for(e=0;e<this.buttonBets.length;e++)s(e);this.toggleAuto.node.on("click",function(){p.default.instance.showBgMiniGame("MiniPoker"),t.toggleAuto.isChecked?(t.isSpined&&t.actSpin(),t.btnBoost.interactable=!1):(t.btnBoost.interactable=!0,t.isSpined&&t.setEnableAllButtons(!0))}),this.btnBoost.node.on("click",function(){p.default.instance.showBgMiniGame("MiniPoker"),t.isBoost=!t.isBoost,t.isBoost?(t.isSpined&&t.actSpin(),t.toggleAuto.interactable=!1,t.btnBoost.isChecked=!0):(t.toggleAuto.interactable=!0,t.btnBoost.isChecked=!1,t.isSpined&&t.setEnableAllButtons(!0))}),l.default.register(l.default.USER_LOGOUT,function(){t.node.active&&t.dismiss()},this),b.default.getInstance().addOnClose(function(){t.node.active&&t.dismiss()},this),b.default.getInstance().addListener(function(e){if(t.node.active)switch(new f.default(e).getCmdId()){case g.default.Code.UPDATE_JACKPOT:var o=new g.default.ReceiveUpdateJackpot(e);d.default.numberTo(t.lblJackpot,o.value,.3);break;case g.default.Code.SPIN:o=new g.default.ReceiveSpin(e),t.onSpinResult(o)}},this)},e.prototype.show=function(){if(this.node.active)this.reOrder();else{p.default.instance.showBgMiniGame("MiniPoker"),t.prototype.show.call(this),this.lblToast.node.parent.active=!1,this.sprResult.node.active=!1,this.lblWinCash.active=!1,this.isSpined=!0,this.isCanChangeBet=!0,this.betIdx=0;for(var e=0;e<this.buttonBets.length;e++)this.buttonBets[e].setActive(e==this.betIdx);b.default.getInstance().send(new g.default.SendScribe(this.betIdx))}},e.prototype.actSpin=function(){if(p.default.instance.showBgMiniGame("MiniPoker"),this.isSpined){this.btnSpinAnim.play("spin",0),this.isSpined=!1,this.setEnableAllButtons(!1);for(var t=0;t<this.buttonBets.length;t++)this.buttonBets[t].button.interactable=!1;cc.log("Send bet:",new g.default.SendSpin(this.listBet[this.betIdx])),b.default.getInstance().send(new g.default.SendSpin(this.listBet[this.betIdx])),cc.log("actSpin:"+this.listBet[this.betIdx])}else this.showToast(" \u101c\u102f\u1015\u103a\u1006\u1031\u102c\u1004\u103a\u1019\u103e\u102f \u1021\u101c\u103d\u1014\u103a\u1019\u103c\u1014\u103a\u101e\u100a\u103a ")},e.prototype.showToast=function(t){this.lblToast.string=t;var e=this.lblToast.node.parent;e.stopAllActions(),e.active=!0,e.opacity=0,e.runAction(cc.sequence(cc.fadeIn(.1),cc.delayTime(2),cc.fadeOut(.2),cc.callFunc(function(){e.active=!1})))},e.prototype.setEnableAllButtons=function(t){this.btnSpin.interactable=t,this.btnClose.interactable=t},e.prototype.onSpinResult=function(t){var e=this;if(this.lastSpinRes=t,[1,2,3,4,5,6,7,8,9,10,11].indexOf(t.result)<0){this.scheduleOnce(function(){this.isSpined=!0},1),this.setEnableAllButtons(!0);for(var o=0;o<this.buttonBets.length;o++)this.buttonBets[o].button.interactable=!0;switch(this.toggleAuto.isChecked=!1,this.toggleAuto.interactable=!0,this.isBoost=!1,this.btnBoost.interactable=!0,this.btnBoost.isChecked=!1,t.result){case 102:this.showToast(" \u101c\u1000\u103a\u1000\u103b\u1014\u103a\u1004\u103d\u1031\u1019\u101c\u102f\u1036\u101c\u1031\u102c\u1000\u103a\u1015\u102b ");break;default:this.showToast("\u1019\u103e\u102c\u1038\u101a\u103d\u1004\u103a\u1038\u1014\u1031\u101e\u100a\u103a \n\u1014\u1031\u102c\u1000\u103a\u1010\u1005\u103a\u1000\u103c\u102d\u1019\u103a\u1011\u1015\u103a\u1000\u103c\u102d\u102f\u1038\u1005\u102c\u1038\u1015\u102b")}}else{s.default.Login.Coin-=this.listBet[this.betIdx],l.default.send(l.default.USER_UPDATE_COIN),s.default.Login.Coin=t.currentMoney;for(var i=[t.card1,t.card2,t.card3,t.card4,t.card5],n=this.isBoost?.5:1,r=function(t){var o=a.columns.children[t],r=.2*a.itemHeight,s=-a.itemHeight*o.childrenCount+a.itemHeight-.2*a.itemHeight,c=-a.itemHeight*o.childrenCount+a.itemHeight;o.runAction(cc.sequence(cc.delayTime(.2*t*n),cc.moveTo(.2*n,cc.v2(o.getPosition().x,r)).easing(cc.easeQuadraticActionOut()),cc.moveTo((a.spinDuration+a.addSpinDuration*t)*n,cc.v2(o.getPosition().x,s)).easing(cc.easeQuadraticActionInOut()),cc.moveTo(.2*n,cc.v2(o.getPosition().x,c)).easing(cc.easeQuadraticActionIn()),cc.callFunc(function(){o.setPosition(cc.v2(o.getPosition().x,0)),t===e.columns.childrenCount-1&&e.spined()}))),o.runAction(cc.sequence(cc.delayTime((.45+.2*t)*n),cc.callFunc(function(){var n=o.children,r=n[0].children[0].getComponent(cc.Sprite),a=n[n.length-1].children[0].getComponent(cc.Sprite);r.spriteFrame=a.spriteFrame=e.sprAtlasCards.getSpriteFrame("card"+i[t])})))},a=this,c=0;c<this.columns.childrenCount;c++)r(c)}},e.prototype.spined=function(){var t=this;if(l.default.send(l.default.USER_UPDATE_COIN),this.setEnableAllButtons(!0),u.default.instance.languageCode,this.lastSpinRes.prize>0){switch(this.lastSpinRes.result){case 1:this.sprResult.animation="jackport",this.sprResult.loop=!1;break;case 2:this.sprResult.animation="lobby break box2";break;case 3:this.sprResult.animation="\u1005\u100a\u103a\u1038\u1000\u1019\u103a\u1038\u1019\u103b\u102c\u1038\u1000\u102d\u102f\u1000\u103c\u100a\u103a\u1037\u1015\u102b";break;case 4:this.sprResult.animation="\u1010\u1030\u100a\u102e\u1010\u1032\u1037\u101c\u1030\u1021\u102f\u1015\u103a\u1000\u103c\u102e\u1038";break;case 5:this.sprResult.animation="Bin";break;case 6:this.sprResult.animation="born";break;case 7:this.sprResult.animation="\u1010\u1031\u102c\u1004\u103a\u1038\u1015\u1014\u103a\u1015\u102b\u1010\u101a\u103a\u104b";break;case 8:this.sprResult.animation="\u1014\u103e\u1005\u103a\u1006";break;case 9:this.sprResult.animation="J+ pair"}this.sprResult.node.active=!0,this.sprResult.node.setScale(1),this.lblWinCash.active=!0,this.lblWinCash.getComponent(cc.Label).string="+"+this.lastSpinRes.prize,this.lblWinCash.setPosition(0,42),this.lblWinCash.runAction(cc.sequence(cc.delayTime(.5),cc.moveBy(1,cc.v2(0,140)),cc.delayTime(1),cc.callFunc(function(){t.sprResult.node.active=!1,t.lblWinCash.active=!1,t.scheduleOnce(function(){if(t.isSpined=!0,t.toggleAuto.isChecked||t.isBoost)t.actSpin();else for(var e=0;e<t.buttonBets.length;e++)t.buttonBets[e].button.interactable=!0},.2)})))}else this.scheduleOnce(function(){if(t.isSpined=!0,t.toggleAuto.isChecked||t.isBoost)t.actSpin();else for(var e=0;e<t.buttonBets.length;e++)t.buttonBets[e].button.interactable=!0},.4)},e.prototype.dismiss=function(){t.prototype.dismiss.call(this);for(var e=0;e<this.popups.length;e++)this.popups[e].active=!1;p.default.instance.hideGameMini("MiniPoker"),b.default.getInstance().send(new g.default.SendUnScribe(this.betIdx))},e.prototype.actPopupGuide=function(){var t=this;null==this.popupGuide?a.default.loadPrefabGame("MiniPoker","res/prefabs/PopupGuide",function(){},function(e){p.default.instance.showLoading(!1),t.popupGuide=cc.instantiate(e).getComponent("Dialog"),t.popupGuide.node.parent=t.popupContainer,t.popupGuide.show(),t.popups.push(t.popupGuide.node)}):this.popupGuide.show()},e.prototype.actPopupHistory=function(){var t=this;null==this.popupHistory?a.default.loadPrefabGame("MiniPoker","res/prefabs/PopupHistory",function(){},function(e){p.default.instance.showLoading(!1),t.popupHistory=cc.instantiate(e).getComponent("MiniPoker.PopupHistory"),t.popupHistory.node.parent=t.popupContainer,t.popupHistory.show(),t.popups.push(t.popupHistory.node)}):this.popupHistory.show()},e.prototype.actPopupHonor=function(){var t=this;null==this.popupHonor?a.default.loadPrefabGame("MiniPoker","res/prefabs/PopupHonors",function(){},function(e){p.default.instance.showLoading(!1),t.popupHonor=cc.instantiate(e).getComponent("MiniPoker.PopupHonors"),t.popupHonor.node.parent=t.popupContainer,t.popupHonor.show(),t.popups.push(t.popupHonor.node)}):this.popupHonor.show()},e.prototype.reOrder=function(){t.prototype.reOrder.call(this)},r([v(cc.SpriteAtlas)],e.prototype,"sprAtlasCards",void 0),r([v(cc.Node)],e.prototype,"columns",void 0),r([v(cc.Node)],e.prototype,"itemTemplate",void 0),r([v(cc.Label)],e.prototype,"lblJackpot",void 0),r([v([S])],e.prototype,"buttonBets",void 0),r([v(cc.Label)],e.prototype,"lblToast",void 0),r([v(cc.Animation)],e.prototype,"btnSpinAnim",void 0),r([v(cc.Button)],e.prototype,"btnSpin",void 0),r([v(cc.Button)],e.prototype,"btnClose",void 0),r([v(cc.Toggle)],e.prototype,"toggleAuto",void 0),r([v(cc.Toggle)],e.prototype,"btnBoost",void 0),r([v(sp.Skeleton)],e.prototype,"sprResult",void 0),r([v(cc.Node)],e.prototype,"lblWinCash",void 0),r([v(cc.Node)],e.prototype,"popupContainer",void 0),r([v([cc.Node])],e.prototype,"popups",void 0),r([y],e)}(c.default);o.default=P,cc._RF.pop()},{"../../Loading/src/BundleControl":void 0,"../../Loading/src/Configs":void 0,"../../Lobby/LobbyScript/MiniGame":void 0,"../../Lobby/LobbyScript/Script/common/App":void 0,"../../Lobby/LobbyScript/Script/common/BroadcastReceiver":void 0,"../../Lobby/LobbyScript/Script/common/Language.LanguageManager":void 0,"../../Lobby/LobbyScript/Script/common/Tween":void 0,"../../Lobby/LobbyScript/Script/common/Utils":void 0,"../../Lobby/LobbyScript/Script/networks/MiniGameNetworkClient":void 0,"../../Lobby/LobbyScript/Script/networks/Network.InPacket":void 0,"./MiniPoker.Cmd":"MiniPoker.Cmd"}],"MiniPoker.PopupHistory":[function(t,e,o){"use strict";cc._RF.push(e,"cc481gP9AlCILXU1JsBrs7F","MiniPoker.PopupHistory");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var a=t("../../Loading/src/Configs"),s=t("../../Loading/src/Http"),c=t("../../Lobby/LobbyScript/Script/common/App"),p=t("../../Lobby/LobbyScript/Script/common/Dialog"),l=t("../../Lobby/LobbyScript/Script/common/Utils"),u=cc._decorator,d=u.ccclass,h=u.property,b=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.lblPage=null,e.itemTemplate=null,e.page=1,e.maxPage=1,e.items=new Array,e}return n(e,t),e.prototype.show=function(){t.prototype.show.call(this),c.default.instance.showBgMiniGame("MiniPoker");for(var e=0;e<this.items.length;e++)this.items[e].active=!1;null!=this.itemTemplate&&(this.itemTemplate.active=!1)},e.prototype.dismiss=function(){t.prototype.dismiss.call(this);for(var e=0;e<this.items.length;e++)this.items[e].active=!1},e.prototype._onShowed=function(){t.prototype._onShowed.call(this),this.page=1,this.maxPage=1,this.lblPage.string=this.page+"/"+this.maxPage,this.loadData()},e.prototype.actNextPage=function(){this.page<this.maxPage&&(this.page++,this.lblPage.string=this.page+"/"+this.maxPage,this.loadData())},e.prototype.actPrevPage=function(){this.page>1&&(this.page--,this.lblPage.string=this.page+"/"+this.maxPage,this.loadData())},e.prototype.loadData=function(){var t=this;c.default.instance.showLoading(!0),s.default.get(a.default.App.API,{c:105,mt:a.default.App.MONEY_TYPE,p:this.page,un:a.default.Login.Nickname},function(e,o){if(c.default.instance.showLoading(!1),null==e&&o.success){if(0==t.items.length){for(var i=0;i<7;i++)(r=cc.instantiate(t.itemTemplate)).parent=t.itemTemplate.parent,t.items.push(r);t.itemTemplate.destroy(),t.itemTemplate=null}t.maxPage=o.totalPages,t.lblPage.string=t.page+"/"+t.maxPage;for(var n=0;n<t.items.length;n++){var r=t.items[n];if(n<o.results.length){var a=o.results[n];r.getChildByName("Time").getComponent(cc.Label).string=a.timestamp,r.getChildByName("Bet").getComponent(cc.Label).string=l.default.formatNumber(a.betValue),r.getChildByName("Result").getComponent(cc.Label).string=a.cards.replace(/,/g,"  "),r.getChildByName("Win").getComponent(cc.Label).string=l.default.formatNumber(a.prize),r.active=!0}else r.active=!1}}})},r([h(cc.Label)],e.prototype,"lblPage",void 0),r([h(cc.Node)],e.prototype,"itemTemplate",void 0),r([d],e)}(p.default);o.default=b,cc._RF.pop()},{"../../Loading/src/Configs":void 0,"../../Loading/src/Http":void 0,"../../Lobby/LobbyScript/Script/common/App":void 0,"../../Lobby/LobbyScript/Script/common/Dialog":void 0,"../../Lobby/LobbyScript/Script/common/Utils":void 0}],"MiniPoker.PopupHonors":[function(t,e,o){"use strict";cc._RF.push(e,"5c964IwGZFIxJXkH/FCDSI0","MiniPoker.PopupHonors");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var a=t("../../Loading/src/Configs"),s=t("../../Loading/src/Http"),c=t("../../Lobby/LobbyScript/Script/common/App"),p=t("../../Lobby/LobbyScript/Script/common/Dialog"),l=t("../../Lobby/LobbyScript/Script/common/Utils"),u=cc._decorator,d=u.ccclass,h=u.property,b=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.lblPage=null,e.itemTemplate=null,e.page=1,e.maxPage=1,e.items=new Array,e}return n(e,t),e.prototype.show=function(){t.prototype.show.call(this),c.default.instance.showBgMiniGame("MiniPoker");for(var e=0;e<this.items.length;e++)this.items[e].active=!1;null!=this.itemTemplate&&(this.itemTemplate.active=!1)},e.prototype.dismiss=function(){t.prototype.dismiss.call(this);for(var e=0;e<this.items.length;e++)this.items[e].active=!1},e.prototype._onShowed=function(){t.prototype._onShowed.call(this),this.page=1,this.maxPage=1,this.lblPage.string=this.page+"/"+this.maxPage,this.loadData()},e.prototype.actNextPage=function(){this.page<this.maxPage&&(this.page++,this.lblPage.string=this.page+"/"+this.maxPage,this.loadData())},e.prototype.actPrevPage=function(){this.page>1&&(this.page--,this.lblPage.string=this.page+"/"+this.maxPage,this.loadData())},e.prototype.loadData=function(){var t=this;c.default.instance.showLoading(!0),s.default.get(a.default.App.API,{c:106,mt:a.default.App.MONEY_TYPE,p:this.page},function(e,o){if(c.default.instance.showLoading(!1),null==e&&(cc.log("res==",JSON.stringify(o)),o.success)){if(0==t.items.length){for(var i=0;i<7;i++)(r=cc.instantiate(t.itemTemplate)).parent=t.itemTemplate.parent,t.items.push(r);t.itemTemplate.destroy(),t.itemTemplate=null}t.maxPage=o.totalPages,t.lblPage.string=t.page+"/"+t.maxPage;for(var n=0;n<t.items.length;n++){var r=t.items[n];if(n<o.results.length){var a=o.results[n];r.getChildByName("Time").getComponent(cc.Label).string=a.ts,r.getChildByName("Account").getComponent(cc.Label).string=a.un,r.getChildByName("Bet").getComponent(cc.Label).string=l.default.formatNumber(a.bv),r.getChildByName("Win").getComponent(cc.Label).string=l.default.formatNumber(a.pz),r.getChildByName("Result").getComponent(cc.Label).string=c.default.instance.getTextLang("txt_jackpot_win"),r.active=!0}else r.active=!1}}})},r([h(cc.Label)],e.prototype,"lblPage",void 0),r([h(cc.Node)],e.prototype,"itemTemplate",void 0),r([d],e)}(p.default);o.default=b,cc._RF.pop()},{"../../Loading/src/Configs":void 0,"../../Loading/src/Http":void 0,"../../Lobby/LobbyScript/Script/common/App":void 0,"../../Lobby/LobbyScript/Script/common/Dialog":void 0,"../../Lobby/LobbyScript/Script/common/Utils":void 0}]},{},["MiniPoker.Cmd","MiniPoker.MiniPokerController","MiniPoker.PopupHistory","MiniPoker.PopupHonors"]);