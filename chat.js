(function(){
const C=window.SITE_CFG||{},EN=C.lang==='en',R=C.root||'';
const L=EN?{
 title:'SANYO CO., LTD. Chat',hello:'Hello! Choose a topic below, or leave us a message.',
 faq:[
  ['What do you buy?','We buy metal scrap (transformers, gold-plated copper, bright copper, brass, copper nuggets, motors, motor copper, scrap wire & cable, all kinds of scrap metal), circuit boards, used computers and mobile phones, and precious metals (gold, silver, platinum, palladium, etc.). Prices vary with the market — contact us for a quote. <a href="'+R+'en/metal.html">Details</a>'],
  ['Used cars / machinery','We purchase used machinery and heavy equipment such as excavators, and used cars — mainly kei cars and trucks. Partnership inquiries welcome. <a href="'+R+'en/machinery.html">Details</a>'],
  ['Auction bidding agent','We bid at used car auctions on your behalf, mainly for kei cars and trucks. Please feel free to consult us.'],
  ['Plastic granules','We recycle plastics and manufacture and sell resin pellets/granules. <a href="'+R+'en/plastic.html">Details</a>'],
  ['Address / map','16-19-2 Yunoo, Minamiechizen-cho, Nanjo-gun, Fukui-ken 919-0101, Japan (3 min walk from Yunoo Station). <a target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=%E7%A6%8F%E4%BA%95%E7%9C%8C%E5%8D%97%E6%9D%A1%E9%83%A1%E5%8D%97%E8%B6%8A%E5%89%8D%E7%94%BA%E6%B9%AF%E5%B0%BE16-19-2">Open in Google Maps</a>'],
  ['Phone / hours','TEL/FAX +81-778-67-8523. For business hours, please call us.'],
  ['Licenses','Antique Dealer License (Fine Arts), Fukui Prefectural Public Safety Commission No. 521110010551; Metal Scrap Dealer License, Fukui Prefectural Public Safety Commission, Etsu No. 419.'],
  ['Jobs','Hiring yard workers (metal sorting, processing and management), regular/contract. JPY 250,000–300,000/month, 9:30–17:30, Sat & Sun off, 115 days off/year. Long-term applicants very welcome. <a href="'+R+'en/recruit.html">Details</a>']],
 leave:'Leave a message',steps:['Your name?','Phone or email?','Topic? (metal, precious metals, plastics, cars/machinery, auction, job, other)','Your message?'],
 keys:['Name','Contact','Topic','Message'],sending:'Sending…',
 done:'Thank you! We will reply soon. For urgent matters please call +81-778-67-8523.',fail:'Sending failed. Please call +81-778-67-8523.',ph:'Type here…',send:'Send',subj:'Chat message'
}:{
 title:'三陽株式会社 チャット',hello:'こんにちは！下のボタンからご質問を選ぶか、メッセージを残してください。',
 faq:[
  ['買取品目は？','金属スクラップ（変圧器・金メッキ銅・光亮銅・真鍮・銅米・モーター・モーター銅・廃電線・各種金属スクラップ）、各種基板・中古パソコン・携帯電話、各種貴金属（金・銀・プラチナ・パラジウム等）を買い取ります。買取価格は相場により変動しますので、お気軽にお見積りください。<a href="'+R+'metal.html">詳しく</a>'],
  ['中古車・重機','中古機械・ショベルカー等の重機の買取、軽自動車・トラックを中心に中古車買取を行っています。協業のご相談も歓迎します。<a href="'+R+'machinery.html">詳しく</a>'],
  ['オークション代行','お客様に代わって中古車オークションで入札します（軽自動車・トラック中心）。お気軽にご相談ください。'],
  ['樹脂ペレット','プラスチックを再生し、樹脂ペレット・顆粒を製造・販売しています。<a href="'+R+'plastic.html">詳しく</a>'],
  ['所在地・地図','〒919-0101 福井県南条郡南越前町湯尾16-19-2（ハピラインふくい 湯尾駅から徒歩3分）。<a target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=%E7%A6%8F%E4%BA%95%E7%9C%8C%E5%8D%97%E6%9D%A1%E9%83%A1%E5%8D%97%E8%B6%8A%E5%89%8D%E7%94%BA%E6%B9%AF%E5%B0%BE16-19-2">Googleマップで開く</a>'],
  ['電話・営業時間','TEL/FAX 0778-67-8523。営業時間はお電話でお問い合わせください。'],
  ['許認可','古物商許可（美術品商）福井県公安委員会許可 第521110010551号／金属くず商 福井県公安委員会許可 越第419号'],
  ['採用情報','構内作業スタッフ【金属の選別・加工・管理】（正社員・契約社員）を募集中。月給25万円〜30万円、9時30分〜17時30分、週休二日制（土日休）、年間休日115日。長期勤務できる方大歓迎！<a href="'+R+'recruit.html">募集要項</a>']],
 leave:'メッセージを残す',steps:['お名前を教えてください。','電話番号またはメールアドレスを教えてください。','ご用件は？（金属買取／貴金属／プラスチック／中古車・重機／オークション代行／採用応募／その他）','メッセージをどうぞ。'],
 keys:['お名前','連絡先','ご用件','メッセージ'],sending:'送信中…',
 done:'ありがとうございました。担当者より順次ご返信いたします。お急ぎの方はお電話（0778-67-8523）でご連絡ください。',fail:'送信に失敗しました。お電話（0778-67-8523）でご連絡ください。',ph:'ここに入力…',send:'送信',subj:'チャットメッセージ'};
const st=document.createElement('style');st.textContent=`
#chb{position:fixed;right:20px;bottom:20px;width:60px;height:60px;border-radius:50%;background:#b8652a;color:#fff;border:0;font-size:28px;cursor:pointer;box-shadow:0 6px 20px rgba(0,0,0,.25);z-index:999}
#chw{position:fixed;right:20px;bottom:90px;width:360px;max-width:calc(100vw - 24px);height:520px;max-height:calc(100vh - 110px);background:#fff;border-radius:12px;box-shadow:0 10px 40px rgba(0,0,0,.3);display:none;flex-direction:column;overflow:hidden;z-index:999;font-size:.9rem}
#chw.open{display:flex}#chw header{background:#0f2a44;color:#fff;padding:12px 16px;font-weight:700;display:flex;justify-content:space-between;position:static;border:0}
#chw header button{background:none;border:0;color:#fff;font-size:20px;cursor:pointer}
#chm{flex:1;overflow:auto;padding:12px;background:#f2f4f7}.cm{max-width:85%;padding:9px 12px;border-radius:10px;margin:6px 0;line-height:1.6}.cm.b{background:#fff}.cm.u{background:#b8652a;color:#fff;margin-left:auto}.cm a{color:#b8652a}
#chq{display:flex;flex-wrap:wrap;gap:6px;padding:8px;border-top:1px solid #e5e7eb}#chq button{border:1px solid #b8652a;background:#fff;color:#b8652a;border-radius:14px;padding:4px 10px;cursor:pointer;font-size:.8rem}
#chi{display:flex;border-top:1px solid #e5e7eb}#chi input{flex:1;border:0;padding:12px;font:inherit}#chi button{border:0;background:#0f2a44;color:#fff;padding:0 16px;cursor:pointer}`;
document.head.appendChild(st);
const b=document.createElement('button');b.id='chb';b.setAttribute('aria-label',L.title);b.textContent='💬';
const w=document.createElement('div');w.id='chw';w.innerHTML=`<header><span>${L.title}</span><button aria-label="close">×</button></header><div id="chm"></div><div id="chq"></div><form id="chi"><input placeholder="${L.ph}"><button>${L.send}</button></form>`;
document.body.append(b,w);
const m=w.querySelector('#chm'),q=w.querySelector('#chq'),inp=w.querySelector('#chi input');
const say=(t,u)=>{const d=document.createElement('div');d.className='cm '+(u?'u':'b');if(u)d.textContent=t;else d.innerHTML=t;m.appendChild(d);m.scrollTop=m.scrollHeight;};
let flow=null;
const quick=()=>{q.innerHTML='';L.faq.forEach(([k,a])=>{const x=document.createElement('button');x.type='button';x.textContent=k;x.onclick=()=>{say(k,1);say(a)};q.appendChild(x)});const l=document.createElement('button');l.type='button';l.textContent='✉ '+L.leave;l.style.background='#b8652a';l.style.color='#fff';l.onclick=start;q.appendChild(l)};
function start(){say(L.leave,1);flow={i:0,v:{}};say(L.steps[0]);inp.focus()}
w.querySelector('#chi').onsubmit=e=>{e.preventDefault();const t=inp.value.trim();if(!t)return;inp.value='';say(t,1);
 if(!flow){const hit=L.faq.find(([k])=>t.includes(k.slice(0,2)));say(hit?hit[1]:(EN?'Please choose a topic below, or leave a message.':'下のボタンからお選びいただくか、メッセージを残してください。'));return}
 flow.v[L.keys[flow.i]]=t;flow.i++;
 if(flow.i<L.steps.length){say(L.steps[flow.i]);return}
 say(L.sending);const v=flow.v;flow=null;
 (window.sendSubmission?window.sendSubmission(v,L.subj+' - '+v[L.keys[0]]):Promise.resolve(false)).then(ok=>say(ok?L.done:L.fail)).catch(()=>say(L.fail));};
let init=false;const open=()=>{w.classList.toggle('open');if(!init){init=true;say(L.hello);quick()}};
b.onclick=open;w.querySelector('header button').onclick=()=>w.classList.remove('open');
window.openChat=()=>{if(!w.classList.contains('open'))open()};
})();
