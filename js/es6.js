/**
 * Created by PX on 2017/4/28.
 */

var allDoms = {
    oStartCon: document.getElementById('startCon'),
    oStartBtn : document.getElementById('startBtn'),
    oInbox : document.getElementById('inBox'),
    span : document.getElementsByTagName('span')
};
var colors = ["#44FF16","#0633FF","#FF19C7","#FFDE0D","#7678EF","#F47920","#7CFC00","#FF0000"];
var fSize = ['24', '18', '20', '16', '22','12'];
var fStyle = ["宋体","楷体","方正姚体","微软雅黑","隶书","黑体","方正卡通简体","方正康体简体","华文琥珀","华文彩云"];
allDoms.oStartBtn.onclick = function(){outIn();}

function outIn() {
    var idx=0;
    setInterval(outIntext, 200);
    function outIntext(){
        if (idx < allDoms.oStartCon.value.length) {
            allDoms.oInbox.innerHTML +=`<span>${allDoms.oStartCon.value[idx]}</span>`;

            var coIndex = Math.ceil(Math.random()*colors.length);
            allDoms.span[idx].style.color = colors[coIndex];

            var fsIndex = Math.ceil(Math.random()*fSize.length);
            allDoms.span[idx].style.fontSize = fSize[fsIndex] + "px";

            var fsyIndex = Math.ceil(Math.random()*fStyle.length);
            allDoms.span[idx].style.fontFamily = fStyle[fsyIndex];
        }
        idx++;
    }
}



