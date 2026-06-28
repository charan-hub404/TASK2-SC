let startTime=0,elapsed=0,timer=null,running=false;
const t=document.getElementById("time"),laps=document.getElementById("laps");
function fmt(ms){let h=Math.floor(ms/3600000),m=Math.floor(ms%3600000/60000),s=Math.floor(ms%60000/1000),x=ms%1000;
    return`${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}.${String(x).padStart(3,"0")}`;
}
function update(){elapsed=Date.now()-startTime;
    t.textContent=fmt(elapsed);}function start(){if(running)return;running=true;
        startTime=Date.now()-elapsed;timer=setInterval(update,10);
    }
    function pause(){running=false;clearInterval(timer);

    }
    function resetWatch(){pause();elapsed=0;
        t.textContent=fmt(0);laps.innerHTML="";
    }
    function lap(){if(!running)return;
        let li=document.createElement("li");
        li.textContent="Lap "+(laps.children.length+1)+" - "+fmt(elapsed);
        laps.prepend(li);}