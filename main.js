document.querySelector('.menu-btn')?.addEventListener('click',()=>document.querySelector('nav').classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('nav').classList.remove('open')));
window.sendSubmission=function(fields,subject){
  const C=window.SITE_CFG||{};
  if(C.endpoint){
    const fd=new FormData();Object.entries(fields).forEach(([k,v])=>fd.append(k,v));fd.append('subject',subject);fd.append('_subject',subject);fd.append('ccemail',C.cc);fd.append('_cc',C.cc);
    return fetch(C.endpoint,{method:'POST',body:fd,headers:{Accept:'application/json'}}).then(r=>r.ok);
  }
  const body=Object.entries(fields).map(([k,v])=>k+': '+v).join('\n');
  location.href='mailto:'+C.to+'?cc='+encodeURIComponent(C.cc)+'&subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
  return Promise.resolve(true);
};
document.querySelectorAll('form.cf').forEach(f=>f.addEventListener('submit',e=>{
  e.preventDefault();const d=new FormData(f);const o={};
  for(const [k,v] of d.entries()){if(!['consent','ccemail','_cc'].includes(k))o[k]=v;}
  sendSubmission(o,f.dataset.subject+' - '+(d.get(f.dataset.namekey)||'')).then(ok=>{
    const n=f.querySelector('.fnote');if(n){n.style.fontWeight='700';n.textContent=ok?n.textContent:(document.documentElement.lang==='en'?'Sending failed. Please call +81-778-67-8523.':'送信に失敗しました。お電話（0778-67-8523）でご連絡ください。');}
    if(ok&&(window.SITE_CFG||{}).endpoint)f.reset();});
}));
