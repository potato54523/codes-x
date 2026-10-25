
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
  const btndna = document.getElementById('downloadBtn-dna');
 btndna.onclick = function(){
   // 文件地址
   const url = "https://filemv.com/files/84a31ba3-24bb-4387-b57e-de09474adbf8?disposition=attachment&token=ODRhMzFiYTMtMjRiYi00Mzg3LWI1N2UtZGUwOTQ3NGFkYmY4fDE3OTI5MTMwMjB8OTYyZTM0YTczYjMzYTZlMGZhNWI0YTljZDg2MjU5MDA.vzLx69QWIStTzSSWb0Ja9eu3uNmNdEVyRlrjU6TqRrk";
   // 创建隐藏a标签触发下载
   const a = document.createElement('a');
   a.href = url;
   a.download = "qingyun_shequ_Vs_1.exe";
   document.body.appendChild(a);
   a.click();
   a.remove();
 }
