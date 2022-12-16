let num = 100;
let lattice = [];
let tile;
let base = [];
let scalar
let unit = 200;
let state = [];
let mod = 10;


function setup() {
    createCanvas(800, 800);
    for(let i=0; i<num; i++){
      let row = [];
      for(let j=0; j<num; j++){
        row.push(0);
      }
      state.push(row);
    }
    state[0][0]=1;
    scalar = height * 2.0/ num;
    makeHexVector();
    lattice = makeLattice();
    console.log(lattice);
    drawTiling();

  }
  
  function transition(i,j){
    let d = 0;
    d = state[i][j]
    + state[(i-1+num)%num][j]
    + state[(i-1+num)%num][(j+1)%num]
    + state[i][(j+1)%num]
    + state[(i+1)%num][j]
    + state[(i+1)%num][(j-1+num)%num]
    + state[i][(j-1+num)%num];
    d = d%mod
    return d;
  }

  function polygon(x, y, radius, npoints) {
    let angle = TWO_PI / npoints;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a + PI/6) * radius;
      let sy = y + sin(a + PI/6) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
  

  function makeHexVector(){
    base.push({x:1, y:0})
    base.push({x:1/2, y:sqrt(3)/2})
  }

  function makeLattice(){
    let mat = []
    for (let i = -35; i < num + 1; i++){
	  let row = [];
	  for (let j = 0; j < num + 1; j++){
	    let v = {x: (i*scalar)*base[0].x + (j*scalar)*base[1].x,
		     y: (i*scalar)*base[0].y + (j*scalar)*base[1].y
		    } 
	    row.push(v);
	}
	mat.push(row);
    }
    return(mat);
}

function drawTiling(){ 
  for (let i=0; i<num; i++){
    for (let j=0; j<num; j++){
    //fill(color('hsba('+ floor(random(255)) +',100%,100%,0.5)'));
    fill(color(255,255/10*state[i%num][j%num],255/10*state[i%num][j%num]))
    polygon(lattice[i][j].x+100, lattice[i][j].y, scalar/sqrt(3), 6);
}
}
}

function draw() {
  let nextState = [];
  for(let i=0; i<num; i++){
    let row = [];
    for(let j=0; j<num; j++){
      row.push(transition(i,j));
    }
    nextState.push(row);
  }
  state = nextState
  drawTiling();
}
