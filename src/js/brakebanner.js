class BrakeBanner{
	constructor(selector){
		this.app = new PIXI.Application({
			width:innerWidth,
			height:innerHeight,
			backgroundColor:0xffffff
		})
		document.querySelector("#brakebanner").appendChild(this.app.view);
		
		this.stage=this.app.stage;
		
		this.loader = new PIXI.Loader();
		
		this.loader.add("btn.png","images/btn.png");
		this.loader.add("btn_circle.png","images/btn_circle.png");
		this.loader.add("brake_bike.png","images/brake_bike.png");
		this.loader.add("brake_handlerbar.png","images/brake_handlerbar.png");
		this.loader.add("brake_lever.png","images/brake_lever.png");

		this.loader.load();
		
		this.loader.onComplete.add(()=>{
			this.show();
			
		})
	}

	show(){

	  let actionButton= this.createActionBtn();
	  
	  actionButton.x=actionButton.y=400;

	  const bickContainer  =  new PIXI.Container();
	  this.stage.addChild(bickContainer);


	  bickContainer.scale.x=bickContainer.scale.y=0.3
	  const  bikeImage =  new PIXI.Sprite(this.loader.resources['brake_bike.png'].texture);

	  bickContainer.addChild(bikeImage);

	}

	createActionBtn(){
		let actionBtn = new PIXI.Container();
		this.stage.addChild(actionBtn);

		let btn = new PIXI.Sprite(this.loader.resources['btn.png'].texture);
		
		let btnCircle = new PIXI.Sprite(this.loader.resources['btn_circle.png'].texture);

		let btnCircle2 = new PIXI.Sprite(this.loader.resources['btn_circle.png'].texture);

		

		actionBtn.addChild(btn);
		actionBtn.addChild(btnCircle);
		actionBtn.addChild(btnCircle2);

		btn.pivot.x= btn.pivot.y = btn.width/2;
		btnCircle.pivot.x= btnCircle.pivot.y = btnCircle.width/2;
		btnCircle2.pivot.x= btnCircle2.pivot.y = btnCircle2.width/2;

		

		gsap.to(btnCircle.scale,{duration:1,x:1.3,y:1.3,repeat:-1});
		gsap.to(btnCircle,{duration:1,alpha:0,repeat:-1});
		return   actionBtn;
	}


}