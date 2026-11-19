const sets={
tech:[
["Which language structures a web page?",["CSS","HTML","Python","SQL"],1,"HTML defines the structure of web content."],
["What does CPU stand for?",["Central Processing Unit","Computer Power Utility","Core Program Unit","Central Program Upload"],0,"The CPU executes program instructions."],
["Which data structure follows LIFO?",["Queue","Tree","Stack","Graph"],2,"A stack uses Last In, First Out ordering."],
["Which CSS property changes text color?",["font-style","background","text-size","color"],3,"The color property sets text color."],
["What is 5 % 2?",["0","1","2","2.5"],1,"Modulo returns the remainder: 1."],
["Which is a JavaScript data type?",["Boolean","Markup","Stylesheet","Pixel"],0,"Boolean values are true or false."],
["What does URL stand for?",["Universal Record Link","Uniform Resource Locator","User Route List","Unified Reference Line"],1,"A URL is the address of a web resource."],
["Which loop suits a known number of repetitions?",["for loop","switch","if statement","try-catch"],0,"A for loop is useful for a known iteration range."],
["Which Git command saves staged changes to history?",["git push","git pull","git commit","git status"],2,"git commit creates a commit from staged changes."],
["What is responsive web design?",["Phone-only pages","Layouts adapting to screen sizes","Removing images","One font only"],1,"Responsive design adapts to phones, tablets and desktops."]
],
science:[
["Which planet is called the Red Planet?",["Venus","Mars","Jupiter","Mercury"],1,"Iron-rich dust gives Mars its reddish appearance."],
["What is the SI unit of force?",["Joule","Watt","Newton","Pascal"],2,"Force is measured in newtons."],
["Which cell part contains most genetic material?",["Nucleus","Ribosome","Cell wall","Cytoplasm"],0,"Most eukaryotic DNA is stored in the nucleus."],
["What is the chemical formula for water?",["CO₂","O₂","H₂O","NaCl"],2,"A water molecule has two hydrogen atoms and one oxygen atom."],
["What is the closest star to Earth?",["Sirius","Proxima Centauri","The Sun","Polaris"],2,"The Sun is Earth's nearest star."],
["What splits white light into component colors?",["Reflection","Dispersion","Conduction","Magnetism"],1,"Dispersion separates light by wavelength."],
["Which gas do plants absorb in photosynthesis?",["Oxygen","Nitrogen","Carbon dioxide","Hydrogen"],2,"Plants use carbon dioxide to make sugars."],
["Approximate speed of light in vacuum?",["3 × 10⁸ m/s","3 × 10⁶ m/s","300 m/s","1500 m/s"],0,"Light travels about 300 million metres per second."],
["Which organ pumps blood around the body?",["Lungs","Brain","Liver","Heart"],3,"The heart pumps blood through the circulatory system."],
["What attracts objects toward Earth?",["Friction","Gravity","Tension","Buoyancy"],1,"Gravity is the attraction between masses."]
]};
let topic='tech',qs=[],index=0,score=0,chosen=null,name='';
const $=id=>document.getElementById(id);
document.querySelectorAll('.topic').forEach(btn=>btn.onclick=()=>{document.querySelectorAll('.topic').forEach(b=>b.classList.remove('active'));btn.classList.add('active');topic=btn.dataset.topic});
$('theme').onclick=()=>{document.body.classList.toggle('light');$('theme').textContent=document.body.classList.contains('light')?'☾':'☼'};
function start(){name=$('name').value.trim();qs=sets[topic];index=0;score=0;$('home').classList.add('hidden');$('result').classList.add('hidden');$('quiz').classList.remove('hidden');render();window.scrollTo(0,0)}
function render(){chosen=null;let q=qs[index];$('counter').textContent=`QUESTION ${String(index+1).padStart(2,'0')} / ${qs.length}`;$('number').textContent=String(index+1).padStart(2,'0');$('prompt').textContent=q[0];$('progress').style.width=`${index/qs.length*100}%`;$('feedback').textContent='Select one option to continue.';$('next').disabled=true;$('next').textContent=index===qs.length-1?'See my result ↗':'Next question →';$('answers').innerHTML='';q[1].forEach((answer,i)=>{let b=document.createElement('button');b.className='answer';let l=document.createElement('span');l.className='letter';l.textContent=String.fromCharCode(65+i);let t=document.createElement('span');t.textContent=answer;b.append(l,t);b.onclick=()=>choose(i);$('answers').append(b)})}
function choose(i){if(chosen!==null)return;chosen=i;let q=qs[index];[...$('answers').children].forEach((b,n)=>{b.disabled=true;if(n===q[2])b.classList.add('correct');if(n===i&&i!==q[2])b.classList.add('wrong')});if(i===q[2]){score++;$('feedback').textContent='Correct! '+q[3]}else $('feedback').textContent='Not quite. '+q[3];$('next').disabled=false}
function finish(){$('quiz').classList.add('hidden');$('result').classList.remove('hidden');let pct=Math.round(score/qs.length*100);$('score').textContent=score;$('correct').textContent=score+' correct';$('percent').textContent=pct+'% accuracy';$('scorebar').style.width=pct+'%';$('resultTitle').textContent=(name?name+', ':'')+(pct>=80?'brilliant work!':pct>=50?'good effort!':'keep exploring!');$('resultText').textContent=pct>=80?'You have a strong grasp of this topic. Keep that momentum going.':pct>=50?'You are building your knowledge. A little more practice will take you further.':'Every answer is a chance to learn something new. Give it another try.';window.scrollTo(0,0)}
$('start').onclick=start;$('next').onclick=()=>{if(index<qs.length-1){index++;render()}else finish()};$('exit').onclick=()=>{$('quiz').classList.add('hidden');$('home').classList.remove('hidden')};$('retry').onclick=start;$('homebtn').onclick=()=>{$('result').classList.add('hidden');$('home').classList.remove('hidden');window.scrollTo(0,0)};
