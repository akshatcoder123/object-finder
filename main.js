
var status="";
var floor111="";
array=[];
var r,g,b;
var textinputvalue;
var spkk;




    function setup(){
    canvas=createCanvas(480,380);
    canvas.position(525,300);
    video=createCapture(VIDEO);
    video.size(480,380);
    video.hide();
    
   
   
    }

function modelloaded(){
    console.log("henlo");
status="true";


}


function start(){
    coco=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML="detecting objects";
    textinputvalue=document.getElementById("text").value;
}









function Gotresult(error,results){
if(error){
    console.log(error);
}
else{
console.log(results);
array=results;
}

}











function draw(){
    image(video,0,0,480,380);

    if(status=="true"){
        r=random(255);
        g=random(255);
        b=random(255);
        coco.detect(video,Gotresult);
        for(i=0; i<array.length; i++){
        document.getElementById("status").innerHTML="objects detected";       
            floor111=floor(array[i].confidence*100);

            text(array[i].label+" "+floor111+"%",array[i].x+10,array[i].y+10);
            noFill();
            stroke(r,g,b);
            rect(array[i].x,array[i].y,array[i].width,array[i].height);
            
            if (array[i].label==textinputvalue){
                 document.getElementById("objects").innerHTML= textinputvalue+ " found";
                 spkk=window.speechSynthesis;
                 spkk1=new SpeechSynthesisUtterance( textinputvalue+"has been found");
                 spkk.speak(spkk1);
            }
           else{
               
            document.getElementById("objects").innerHTML=textinputvalue+" not found";
           

           }
           
           
            
       


            
            }
       
        }



       
} 
setInterval(draw(),100);
