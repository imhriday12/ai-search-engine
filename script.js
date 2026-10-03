const jobs=[
{title:"Junior Engineer — Electrical",company:"Assam Power Distribution Company",sector:"Government",location:"Assam",qualification:"Diploma",type:"Full-time",salary:32,days:2,score:94,reason:"Diploma qualification and Assam location closely match your profile."},
{title:"Graduate Engineer Trainee",company:"Tata Technologies",sector:"Private",location:"Maharashtra",qualification:"B.Tech",type:"Full-time",salary:42,days:1,score:91,reason:"B.Tech requirement matches and the role is recently posted."},
{title:"IT Support Technician",company:"National Informatics Centre",sector:"Government",location:"Delhi",qualification:"Diploma",type:"Contract",salary:28,days:4,score:89,reason:"Diploma accepted and technical support experience is relevant."},
{title:"Diploma Trainee — Production",company:"TVS Motor Company",sector:"Private",location:"Karnataka",qualification:"Diploma",type:"Apprenticeship",salary:24,days:3,score:87,reason:"Strong diploma match with an entry-level production pathway."},
{title:"Data Entry Operator",company:"District Administration",sector:"Government",location:"Assam",qualification:"12th",type:"Contract",salary:20,days:6,score:83,reason:"12th qualification and Assam location match."},
{title:"Network Technician",company:"Tech Mahindra",sector:"Private",location:"West Bengal",qualification:"Diploma",type:"Full-time",salary:31,days:1,score:86,reason:"Diploma and networking-oriented role; very recent posting."},
{title:"Apprentice Technician",company:"Indian Railways",sector:"Government",location:"All India",qualification:"ITI",type:"Apprenticeship",salary:22,days:5,score:90,reason:"ITI qualification is directly aligned with the apprenticeship."},
{title:"Frontend Developer",company:"Product Startup",sector:"Private",location:"Remote",qualification:"Graduate",type:"Full-time",salary:55,days:2,score:78,reason:"Graduate-level remote role; skills determine final fit."}
];
let sector="",recent="";
const $=id=>document.getElementById(id);
function render(){
 const q=$("qualification").value.toLowerCase(),loc=$("location").value.toLowerCase(),kw=($("keyword").value+" "+$("titleSearch").value).trim().toLowerCase(),type=$("jobType").value,min=Number($("salary").value||0);
 const filtered=jobs.filter(j=>(!q||j.qualification.toLowerCase()===q)&&(!loc||j.location.toLowerCase()===loc||j.location==="All India")&&(!sector||j.sector===sector)&&(!recent||j.days<=Number(recent))&&(!type||j.type===type)&&(!min||j.salary>=min)&&(!kw||(j.title+" "+j.company+" "+j.location).toLowerCase().includes(kw)));
 $("count").textContent=filtered.length+" matching jobs";
 $("jobList").innerHTML=filtered.map(j=>`<article class="job"><div><span class="tag">${j.sector}</span><h3>${j.title}</h3><div class="company">${j.company}</div><div class="meta"><span>📍 ${j.location}</span><span>🎓 ${j.qualification}</span><span>💼 ${j.type}</span><span>₹${j.salary}k+</span><span>${j.days}d ago</span></div><div class="reason">AI match reason: ${j.reason}</div><a class="view" href="#" onclick="return false">View original vacancy →</a></div><div class="score"><strong>${j.score}%</strong><small>AI match</small></div></article>`).join("");
 $("empty").hidden=filtered.length>0;
}
document.querySelectorAll(".filters button").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".filters button").forEach(b=>b.classList.remove("active"));btn.classList.add("active");sector=btn.dataset.sector||"";recent=btn.dataset.recent||"";render()}));
["qualification","location","keyword","titleSearch","jobType","salary"].forEach(id=>$(id).addEventListener("input",render));
$("searchBtn").addEventListener("click",render);render();