javascript:(()=>{let c=document.querySelector("iframe");c.contentWindow.console.log.call(window,"%c Blooket Cheats %c\n\tBy 05Konz on GitHub","color: #0bc2cf; font-size: 3rem","color: #8000ff; font-size: 1rem"),c.contentWindow.console.log.call(window,"%c\tgetDailyRewards.js","color: #0bc2cf; font-size: 1rem"),c.contentWindow.console.log.call(window,"%c\tStar the github repo!%c  https://github.com/05Konz/Blooket-Cheats","color: #ffd000; font-size: 1rem","");const r=async()=>{var e,t,o=document.createElement("iframe");document.body.append(o),window.alert=o.contentWindow.alert.bind(window),o.remove(),location.href.includes("play.blooket.com")?(o=(await fetch("https://play.blooket.com/api/playersessions/solo",{body:JSON.stringify({gameMode:"Factory",questionSetId:["60101da869e8c70013913b59","625db660c6842334835cb4c6","60268f8861bd520016eae038","611e6c804abdf900668699e3","60ba5ff6077eb600221b7145","642467af9b704783215c1f1b","605bd360e35779001bf57c5e","6234cc7add097ff1c9cff3bd","600b1491d42a140004d5215a","5db75fa3f1fa190017b61c0c","5fac96fe2ca0da00042b018f","600b14d8d42a140004d52165","5f88953cdb209e00046522c7","600b153ad42a140004d52172","5fe260e72a505b00040e2a11","5fe3d085a529560004cd3076","5f5fc017aee59500041a1456","608b0a5863c4f2001eed43f4","5fad491512c8620004918ace","5fc91a9b4ea2e200046bd49a","5c5d06a7deebc70017245da7","5ff767051b68750004a6fd21","5fdcacc85d465a0004b021b9","5fb7eea20bd44300045ba495"][Math.floor(24*Math.random())]}),credentials:"include",method:"POST"}).then(e=>e.json()))["t"],{name:e,blook:{name:t}}=(await fetch("https://play.blooket.com/api/playersessions/landings",{body:JSON.stringify({t:o}),credentials:"include",method:"POST"}),await fetch("https://play.blooket.com/api/playersessions/questions?t="+o,{credentials:"include"}),Object.values(function e(t=document.querySelector("body>div")){return Object.values(t)[1]?.children?.[0]?._owner.stateNode?t:e(t.querySelector(":scope>div"))}())[1].children[0]._owner.stateNode.props.user.data),await fetch("https://play.blooket.com/api/users/factorystats",{body:JSON.stringify({blookUsed:t,t:o,name:e,cash:Math.floor(9e7*Math.random())+1e7,correctAnswers:Math.floor(500*Math.random())+500,upgrades:Math.floor(300*Math.random())+300,mode:"Time-Solo",nameUsed:"You",place:1,playersDefeated:0}),credentials:"include",method:"PUT"}),fetch("https://play.blooket.com/api/users/add-rewards",{body:JSON.stringify({t:o,name:e,addedTokens:500,addedXp:300}),credentials:"include",method:"PUT"}).then(e=>e.json()).then(({dailyReward:e})=>alert(`Added max tokens and xp, and got ${e} daily wheel tokens!`)).catch(()=>alert("There was an error when adding rewards."))):(alert("This cheat only works on play.blooket.com, opening a new tab."),window.open("https://play.blooket.com/"))};let s=new Image;s.src="https://raw.githubusercontent.com/05Konz/Blooket-Cheats/main/autoupdate/timestamps/global/getDailyRewards.png?"+Date.now(),s.crossOrigin="Anonymous",s.onload=function(){var e=document.createElement("canvas").getContext("2d");e.drawImage(s,0,0,this.width,this.height);let t=e.getImageData(0,0,this.width,this.height)["data"],o="",a;for(let e=0;e<t.length;e+=4){var n=String.fromCharCode(256*t[e+1]+t[e+2]);if(o+=n,"/"==n&&"*"==a)break;a=n}var[,e,d]=o.match(/LastUpdated: (.+?); ErrorMessage: "((.|\n)+?)"/);(parseInt(e)<=1710881116174||c.contentWindow.alert(d))&&r()},s.onerror=s.onabort=()=>{s.onerror=s.onabort=null,r()}})();
