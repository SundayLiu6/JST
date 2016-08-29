window.onload = function() {
    //图片滚动效果
                var oDiv = document.getElementById("img-electro");
                var oUl = oDiv.getElementsByTagName('ul')[0];
                var aLi = oUl.getElementsByTagName('li');
                var speed = -1;            
                oUl.innerHTML += oUl.innerHTML;
                oUl.style.width = aLi[0].offsetWidth * aLi.length + 'px';
                function move() {
                    if (oUl.offsetLeft < -oUl.offsetWidth / 2) {
                        oUl.style.left = '0';
                    }
                    if (oUl.offsetLeft > 0) {
                        oUl.style.left = -oUl.offsetWidth / 2 + 'px';
                    }
                    oUl.style.left = oUl.offsetLeft + speed + 'px';
                }
                var timer = setInterval(move, 30);
                oDiv.onmouseover = function() {
                    clearInterval(timer);
                };
                oDiv.onmouseout = function() {
                    timer = setInterval(move, 30);
                };
                var oDiv2 = document.getElementById("img-truck");
                var oUl2 = oDiv2.getElementsByTagName('ul')[0];
                var aLi2 = oUl2.getElementsByTagName('li');
                var speed = -1;            
                oUl2.innerHTML += oUl2.innerHTML;
                oUl2.style.width = aLi2[0].offsetWidth * aLi2.length + 'px';
                function move2() {
                    if (oUl2.offsetLeft < -oUl2.offsetWidth / 2) {
                        oUl2.style.left = '0';
                    }
                    if (oUl2.offsetLeft > 0) {
                        oUl2.style.left = -oUl2.offsetWidth / 2 + 'px';
                    }
                    oUl2.style.left = oUl2.offsetLeft + speed + 'px';
                }
                var timer2 = setInterval(move2, 30);
                oDiv2.onmouseover = function() {
                    clearInterval(timer2);
                };
                oDiv2.onmouseout = function() {
                    timer2 = setInterval(move2, 30);
                };
                subnav();
            }
function getByClass(oParent,oClass){
    var tag = document.getElementsByTagName("*");
    var name = [];
    for (var i = 0; i < tag.length; i++) {
        if(tag[i].className == oClass){
            name.push(tag[i]);
        }
    }
    return name;
}
function subnav(){
    var list = getByClass("container","subnav")[0].getElementsByTagName("ul")[0].getElementsByTagName("li");
    var content = getByClass("container","subcontant")[0].getElementsByTagName("div");
    for (var i = 0; i < list.length; i++) {
        list[i].index = i;
        list[i].onclick = function(){   
            for (var j = 0; j < list.length; j++) {
                list[j].className = "";
                content[j].className = "off";
            }
            now = this.index;
            list[now].className = "select";
            content[now].className = "on";
        }
        list[i].onmouseover = function(){
            now = this.index;
            list[now].style.cursor = "pointer";
        }
    }
}