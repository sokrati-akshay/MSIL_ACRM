// var a = require('./dealer.json')
// var b = require('./convertcsv.json')
// // var jsonDiff = require('json-diff')
// // var b = {};
// // for (i in a) {
// //     a[i].forEach(element => {
// //         if(b.hasOwnProperty(i)){

// //         }else{
// //             b[i]=[]
// //         }
// //         if (element.Dealer_Type__c.toUpperCase() == 'S' || element.Dealer_Type__c.toUpperCase() == '3S')
// //             b[i].push(element)
// //     });
// // }
// // console.log(JSON.stringify(b))
// // console.log(_.isEqual(a,b))
// // console.log(a.sort())


// // a= sortKeys(a)
// // b=sortKeys(b)
// // console.log(b)


// // console.log(jsonDiff.diff(JSON.stringify(a),JSON.stringify(b)))


// function getDifference(o1, o2) {
//   var diff = {};
//   var tmp = null;
//   if (JSON.stringify(o1) === JSON.stringify(o2)) return;

//   for (var k in o1) {
//       console.log(k)
//     if (Array.isArray(o1[k]) && Array.isArray(o2[k])) {
//       tmp = o1[k].reduce(function(p, c, i) {
//         var _t = getDifference(c, o2[k][i]);
//         if (_t)
//           p.push(_t);
//         return p;
//       }, []);
//       if (Object.keys(tmp).length > 0)
//         diff[k] = tmp;
//     } else if (typeof(o1[k]) === "object" && typeof(o2[k]) === "object") {
//       tmp = getDifference(o1[k], o2[k]);
//       if (tmp && Object.keys(tmp) > 0)
//         diff[k] = tmp;
//     } else if (o1[k] !== o2[k]) {
//       diff[k] = o2[k]
//     }
//   }
//   return diff;
// }

// var d = getDifference(a,b)
// console.log(d)
