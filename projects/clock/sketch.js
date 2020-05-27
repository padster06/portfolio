function setup() {
  createCanvas(430, 430);
  angleMode(DEGREES)
}


function draw() {
  background(0);
  let hr = hour();
  let mn = minute();
  let sc = second();
  let d = day();
  let m = month();  
  let yr = year();
  let DBtime = 360 / 30
  let dayBar = d * DBtime
  let MBtime = 360 / 12
  let mBar = m * MBtime
  let dv
  let maxDays = new Date(yr, m, 0).getDate()
console.log(maxDays)

  textSize(30)
  fill(255)
  noStroke()


  fill(0, 150, 0)
  text(String(hr).padStart(2,'0'), 163, 215)

  fill(255)
  text(':', 196, 215)

  fill(0, 150, 155)
  text(String(mn).padStart(2, '0'), 203, 215)

  fill(255, 0, 150)
  text(String(sc).padStart(2,'0'), 241, 215)

  fill(255)
  text(' :', 226, 215)

  text(String(d).padStart(2,'0') + ' : ' + String(m).padStart(2,'0') + ' : ' + String(yr).padStart(2,'0'), 125, 242)

  
  dv = 360/maxDays


  

  //hr arc
  strokeWeight(10)
  noFill()
  stroke(0, 150, 0);
  let end3 = map(hr, 0, 12, 0, 360)
  arc(215, 215, 200, 200, -90, end3 - 90)

  //mn arc
  strokeWeight(10)
  noFill()
  stroke(0, 155, 150);
  let end2 = map(mn, 0, 60, 0, 360)
  arc(215, 215, 250, 250, -90, end2 - 90)

  //sc arc
  strokeWeight(10)
  noFill()
  stroke(255, 0, 150);
  let end = map(sc, 0, 60, 0, 360)
  arc(215, 215, 300, 300, -90, end - 90);
  
  //day arc
  noFill()
  stroke(195,255,0)
 let end4 = d * dv
  arc(215, 215, 350, 350, -90, end4 - 90)
  
  
  stroke(255,70,0)
  let end5 = mBar
  arc(215, 215, 400, 400, -90, end5 - 90)
}

