function preload()
{}

function setup()
{
    canvas = createCanvas(500,400);
    canvas.position(70, 200);

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
   image(video,30,30,430,320);

   stroke(74, 78, 105);
   fill(154, 140, 152);

   circle(40,40,50);
   circle(460,40,50);
   circle(40,360,50);
   circle(460,360,50);

   stroke(201, 173, 167);
   fill(242, 233, 228);

   rect(63,27,375,25);
   rect(63,347,375,25);
   rect(27,63,25,275);
   rect(448,63,25,275);

}

function take_snapshot()
{
    save('image.jpg');
}