let link="https://api.nationalize.io/?name=";
const cname = new Intl.DisplayNames(['EN'], { type: 'region' });
const form=document.querySelector("form")

function rounding(percent) {
    return Math.round(parseFloat(percent)*1000)/10;
}

form.addEventListener("submit",getStats)







function getStats() {
    document.querySelector('.e_container').style.display='none';
    event.preventDefault();
    let x=document.querySelector("input").value;
    document.querySelector("input").value=""
    let result=document.querySelector(".results")
    result.innerHTML="";
    
    
    
        
    fetch(link+x)
    
    .then(res => {
        return res.json();

    })
    .then(res => {
        console.log(res)
    if(res.country.length!=0){
        result.style.opacity=1;
    let h1=document.createElement('h1');
    h1.innerHTML=x
    result.appendChild(h1)
     for(const country of res.country){
        let out = document.createElement('div');
        result.appendChild(out)

        let p = document.createElement('p');
        p.innerHTML=`${cname.of(country.country_id)} ${rounding(country.probability)}%`
        out.appendChild(p);

        let ins = document.createElement('div');
        ins.style.width=`0`;
        out.appendChild(ins)
        ins.style.width=`${rounding(country.probability)}%`;
        }
    }
        else{
            result.style.opacity=0;
            document.querySelector('.e_container').style.display='block';
        }
    
    })
   .catch(res => {
        console.log(res);
    })



}






