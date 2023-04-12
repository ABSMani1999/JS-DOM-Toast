var btns=document.querySelector("button");
var body=document.querySelector('body');



	btns.addEventListener("click",function(){
		
//toast message
	let	div=document.createElement("div");
		div.classList.add("toast-massage");
		body.appendChild(div);
		
//toast header
	let divOne=document.createElement("div");
		divOne.classList.add("toast-header");
		div.appendChild(divOne);
	
	let icon=document.createElement("i");
		icon.classList.add("gg-danger");
		divOne.appendChild(icon);
	let head=document.createElement("h2");
		head.innerHTML="Danger";
		divOne.appendChild(head);
	// let time=new Date();
	// let	stdTime=time.getHours()+':'+time.getMinutes()+':'+time.getSeconds();
		// divOne.appendChild(stdTime);
	let btn=document.createElement("button");
		btn.classList.add('closebtn');
		btn.innerHTML="X";
		divOne.appendChild(btn);
		
//toast body
	let divTwo=document.createElement("div");
		divTwo.classList.add("toast-body");
		div.appendChild(divTwo);
		
	let para=document.createElement("p");
		para.innerHTML="Hello, user your device virus!";
		divTwo.appendChild(para);

//closebtn		
	btn.addEventListener('click', function(){
		div.remove();
	});

});
	


	
	
	