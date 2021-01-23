/**
 *  Write Utils Function Here. 
 *  Added some conversion function just in case
 */


export function vw2px(value) {
  var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

  var result = (x*value)/100;
  // document.getElementById("result_vw_px").innerHTML = result;  // affichage du résultat (facultatif)
  return result;
}

export function vh2px(value) {
  var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

  var result = (y*value)/100;
  // document.getElementById("result_vh_px").innerHTML = result;  // affichage du résultat (facultatif)
  return result;
}
export const groupby = (x,f)=>x.reduce((a,b)=>{
  if(!Array.isArray(a[f(b)])) a[f(b)] = []; 
  a[f(b)].push(b);
  return a;
},{});


