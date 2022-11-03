url="<url to tabunder to>";
imgsrc="ffox.svg";
clk=false;
if (window.location.hash == "#1") {
	window.opener.location = url;
} else{

document.addEventListener("click", pop);
if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1 && !clk){
    image=document.createElement("img");
    image.src=imgsrc;
    image.width=900;
    image.style="margin: 0;position: absolute;top: 50%; left: 50%;-ms-transform: translateY(-50%);transform: translate(-50%, -50%);";
    document.body.appendChild(image);
    clk=true;
}
function pop() {
window.open("#1");
}
}
