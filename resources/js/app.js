
import Vue from "vue";
import TweenMax from "./TweenMax.min.js";
//グローバル関数へ変更
window.fadeOut =  require('./explore');

import Vuetify from 'vuetify';
// import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);





var arr = new Array();
if(document.cookie != ''){
  var tmp = document.cookie.split('; ');
  for(var i=0;i<tmp.length;i++){
    var data = tmp[i].split('=');
    arr[data[0]] = decodeURIComponent(data[1]);
  }
}
if (arr.set){
  //再訪問時、オーバーレイを隠し、カードとメインロゴを表示する。
  document.getElementById('start_up').style.display = "none";
  document.getElementById('cards').style.display = "block";
  document.getElementById('mainLogo').style.opacity=1;

} else {
  const time_expire = 60*60;
  document.cookie="set=1;max-age=3600";
  document.getElementById('overlay_wrap').style.display="block";
}


new Vue({
    el: '#app',

    
  })