function dot(v1,v2) {
    let ps=0;
    for (let i = 0; i < v1.length; i++) {
        ps+=v1[i]*v2[j];
        
    }
    return ps;
}
let test=false;
let i=0;
let v1,v2=ARRAY;
ps1=0;
for (let i = 0; i < v1.length; i++) {
    console.log(v1[i]);
    
}

for (let i = 0; i < v2.length; i++) {
    console.log(v2[i]);
    
}
if (v1.length==v2.length) {
    ps1=dot(v1,v2);
if (ps1==0) {
    test=true;
}
  else{
   test=false;  
  }  
}