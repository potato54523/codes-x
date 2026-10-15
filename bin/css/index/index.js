 const btn2 = document.getElementById('downloadBtn1');
 btn2.onclick = function(){
   // 文件地址
   const url = "user_download_assets/qingyunshequ/qingyun_shequ_Vs_1.apk";
   // 创建隐藏a标签触发下载
   const a = document.createElement('a');
   a.href = url;
   a.download = "qingyun_shequ_Vs_1.apk";
   document.body.appendChild(a);
   a.click();
   a.remove();
 }
 const btn3 = document.getElementById('downloadBtn2');
 btn3.onclick = function(){
   // 文件地址
   const url = "user_download_assets/qingyunshequ/QingYun_Setup.exe";
   // 创建隐藏a标签触发下载
   const a = document.createElement('a');
   a.href = url;
   a.download = "qingyun_shequ_Vs_1.exe";
   document.body.appendChild(a);
   a.click();
   a.remove();
 }
