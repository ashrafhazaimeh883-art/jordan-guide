
const more=document.getElementById("more-info")
more.onclick=function(){
    const moreGov=document.getElementById("more-imges")
    if(moreGov.style.display==="none"){
        moreGov.style.display="grid"
        OtherGovernorates.textContent="باقي المحافظات"
    }else{
        moreGov.style.display="none"
        OtherGovernorates.textContent="باقي المحافظات"

    }
 }