const endDate = "8 june 2023 10:00 PM"
document.getElementById("end-date").innerText=endDate;

const inputs=document.querySelectorAll("input");

function clock(){
    const end=new Date(endDate);
    const now=new Date();
    const diff=(end-now)/1000;

    if(diff<0)return;

    //into days
    inputs[0].value=Math.floor(diff/3600/24);
    //remaining hours
    inputs[1].value=Math.floor(diff/3600)%24;
    //remaining minutes
    inputs[2].value=Math.floor(diff/60)%60;
    //remaining seconds
    inputs[3].value=Math.floor(diff)%60;
    /*
    1 day= 24 hrs
    1 hr=3600s
    */
}

//initial call
clock()

setInterval(
    ()=>{
        clock()
    },
    1000
)