const easy=['BERLIN','LONDON','WARSAW','PARIS','MADRIT'];
const medium=['WARDROBE','CUPBOARD','DESK','CHAIR','TABLE'];
const hard=['GIRAFFE','RHINO', 'MONKEY','TURTLE','CROCODILE' ];
const cat=document.getElementById('cat')
const lifeV=document.getElementById('life')
const empty=document.getElementById('empty');
const opt=document.getElementById('opt')
function num() {
	liczba=Math.floor(Math.random()*5)
	return liczba
}

let w='test';

function word() {
	switch (opt.value) {
  case 'Cities':
    	w=easy[num()]
    break;
  case 'Furniture':
  		w=medium[num()]
  	break;
  case 'Animals':
  		w=hard[num()]
    break;
  default:
  	w=easy[num()]
	
}
return w;
}















function blanks() {

	for(let i=0;i<w.length;i++){
		const diw = document.createElement('div');
		diw.classList.add('czyste');
		diw.setAttribute('id',i+'l');
		empty.appendChild(diw);
	}
}



















function life() {
	liczba=parseInt(lifeV.innerHTML);
	if(liczba>0 )
		lifeV.innerHTML=liczba-1;
		if(liczba-1==0 && document.getElementById('win').style.display!='block')
			document.getElementById('endgame').style.display='block';
	

}







function check(id) {
	let letter=document.getElementById(id);
	let spr=true;
	
	let win=0;
	for(let i =0; i<w.length;i++){
		if(w[i]==letter.innerHTML){
			document.getElementById(i+'l').innerHTML=letter.innerHTML;
			letter.style.backgroundColor='green';
			for(let i =0; i<w.length;i++){
			if(document.getElementById(i+'l').innerHTML!=''){
				win++;
			}
			else {
				win=0;
				break;
			}

			
		}
		if(win==w.length && document.getElementById('endgame').style.display!='block')
			document.getElementById('win').style.display='block'
			spr=false
		}
		
			
	
		}
		
		if(spr){
			
			if(letter.style.backgroundColor!='red'){
				letter.style.backgroundColor='red';
				life()
			}
			
		}
	
}





function start() {
	empty.innerHTML=''
	document.getElementById('endgame').style.display='none';
	document.getElementById('win').style.display='none';
	cat.innerHTML='Guess the word. Category: '
	lifeV.innerHTML=5;
	for(let i=0;i<=25;i++)
		document.getElementById(i).style.backgroundColor='#f7ffc2'
	w=word();
	cat.innerHTML+=opt.value;
	
	blanks(w);


}


start();
