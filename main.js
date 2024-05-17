status="";

function draw(){
    if(status !="")
        {
          objectDetector.detect(video,gotResult);
          r=random(255);
          g=random(255);
          b=random(255);
        for(i= 0;i<object.lenght;i++){
          document.getElementById("status").innerHTML="status: detected Objects";
          document.getElementById("Number_of_Objects").innerHTML="number of objects detected are:"+object.length;
          fill(r,g,b);
           percent = floor(object[i].confidence * 100);
            text(object[i].label + " " + percent + "%", object[i].x + 15, object[i].y + 15);
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
      
              }
          }  
        }
