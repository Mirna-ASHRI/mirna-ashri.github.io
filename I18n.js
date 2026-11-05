(function(){
const KEYS=["About","Education","Research","Research interests","Projects","Publications","Work experience","Volunteering","Podcasts","Languages","Software","Conferences","Scholarships","Awards","Trainings & Workshops","Favorite quotes","Blog","Contact","Laboratory training","Academic Summary","At a Glance","Education & Fellowships","Research Experience","Research Interests","Professional and Teaching Experience","Volunteering, Youth Associations & Leadership","Software Proficiency","Conferences & Seminars","Awards & Recognitions","Favorite Quotes","Personal Blog","Laboratory Training","Erasmus Mundus M.Sc. student in Chemoinformatics+","NOVA University Lisbon & University of Strasbourg","CV (PDF)","Click a project to see the details.","Planned","In progress","Hackathon","Elsewhere","Phone","Download CV (PDF)","Native","Advanced - C1","Intermediate - B2","Basic - A2","Basic - HSK1","Arabic","English","French","German","Spanish","Italian","Turkish","Portuguese","Chinese (Mandarin)","Poster ↗","Certificate ↗","Photos ↗","Relevant coursework"];
const LANGS=[["en","English"],["fr","Français"],["de","Deutsch"],["es","Español"],["pt","Português (PT)"],["it","Italiano"]];
const T={},orig=new WeakMap();let cur="en";
const norm=s=>s.replace(/\s+/g," ").trim();
window.I18N_LOAD=(l,arr)=>{T[l]=Object.assign(Object.fromEntries(KEYS.map((k,i)=>[k,arr[i]])),T[l]);if(cur===l)apply(l)};
window.I18N_ADD=(l,obj)=>{T[l]=Object.assign(T[l]||{},obj);if(cur===l)apply(l)};

function apply(l){
  document.documentElement.lang=l==="pt"?"pt-PT":l;
  const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let n;
  while(n=w.nextNode()){
    const p=n.parentNode;
    if(/^(SCRIPT|STYLE)$/.test(p.nodeName)||p.closest(".ctrl"))continue;
    if(!orig.has(n))orig.set(n,n.nodeValue);
    const o=orig.get(n),d=l!=="en"&&T[l]&&T[l][norm(o)];
    n.nodeValue=d?o.match(/^\s*/)[0]+d+o.match(/\s*$/)[0]:o;
  }
  dispatchEvent(new Event("resize"));
}
function setLang(l){
  cur=l;try{localStorage.setItem("lang",l)}catch(e){}
  if(l==="en"||T[l])return apply(l);
  const s=document.createElement("script");s.src="lang/"+l+".js";document.head.appendChild(s);
}

/* controls */
const bar=document.createElement("div");bar.className="ctrl";
bar.innerHTML='<select aria-label="Language">'+LANGS.map(x=>`<option value="${x[0]}">${x[1]}</option>`).join("")+'</select><button type="button" aria-label="Toggle dark mode"></button>';
document.querySelector(".shell").prepend(bar);
const sel=bar.querySelector("select"),btn=bar.querySelector("button"),root=document.documentElement;
function theme(t){root.dataset.theme=t;btn.textContent=t==="dark"?"☀":"☾";try{localStorage.setItem("theme",t)}catch(e){}}
let st,sl;try{st=localStorage.getItem("theme");sl=localStorage.getItem("lang")}catch(e){}
theme(st||(matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light"));
btn.onclick=()=>theme(root.dataset.theme==="dark"?"light":"dark");
sel.onchange=()=>setLang(sel.value);
const q=new URLSearchParams(location.search).get("lang"),start=[q,sl].find(x=>LANGS.some(y=>y[0]===x))||"en";
sel.value=start;if(start!=="en")setLang(start);
})();
