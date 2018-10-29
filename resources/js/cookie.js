


 function getCookieArray(){
    var arr = new Array();
    if(document.cookie != ''){
      var tmp = document.cookie.split('; ');
      for(var i=0;i<tmp.length;i++){
        var data = tmp[i].split('=');
        arr[data[0]] = decodeURIComponent(data[1]);
      }
    }
    return arr;
  }

module.exports  {
    let c = getCookieArray();
    if (c['set'] == "") {
      alert("セットされてない");
    } else {
      alert();
    }


}

