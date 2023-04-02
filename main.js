var ball_y=0;
var ball_x=0;
var hole_x=800;
var hole_y=400;
var canvas=new fabric.canvas("myCanvas");




block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.image.fromURL("golf-h.png",function(Img){
		hole_obj=Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
	});
	canvas.add(hole_obj);
	});
	new_image();
}

function new_image()
{
	fabric.image.fromURL("ball.png",function(Img){
		ball_obj=Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_y,
			left:ball_x
	});
	canvas.add(ball_obj);
	});
	new_image();
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if(ball_x==hole_x){
		if(ball_y==hole_y){
			canvas.remove(ball_obj);
			document.getElementById("hd3").innerHTML="you have hit the goal.";
			document.getElementById("myCanvas").style.borderColor="red";
		}
	}
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y>50){
			ball_y=ball_y-50;
			console.log("when up arrow is pressed x=" +ball_x +" , y=" +ball_y);
			canvas.remove(ball_obj);
			new_image();

		}
	}

	function down()
	{
		if(ball_y<450){
			ball_y=ball_y+50;
			console.log("when up arrow is pressed x="+ ball_x +" , y=" +ball_y);
			canvas.remove(ball_obj);
			new_image();

		} 
	}

	function left()
	{
		if(ball_x >5)
		{
				ball_x=ball_x-50;
				console.log("when up arrow is pressed x="+ ball_x +" , y=" +ball_y);
				canvas.remove(ball_obj);
				new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
				ball_y=ball_y+50;
				console.log("when up arrow is pressed x="+ ball_x +" , y=" +ball_y);
				canvas.remove(ball_obj);
				new_image();
		}
	}
	
}

