let str = str => str.replace(/[^-0-9]/g,"_").split("_").reduce((akk,curr)=>akk+ +curr,0);

console.log(str('Wert12lop-12'));
