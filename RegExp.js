// /*
// 正则表达式
// */
// var str="abceeFgAbcdddddss";
// // 目标字符串中包含对应的字符
// console.log(/fga/gim.test(str));
// console.log(new RegExp('fga','gim').test(str))
// // ^ 是指以什么开始
// var str='abceeFgAbcdddddss';
// console.log(/^fga/gim.test(str));
// console.log(/^abc/gim.test(str));
// // 转义字符，以\标识
// var str='abcee^FgAbcdddddss';
// console.log(/\^fga/gim.test(str));
// // $是指以什么结束
// console.log(/ss$/.test(str));
// console.log(/ss\$/.test(str));
// var str='abcfss'
// //表示，字符串中包含f 而且f后面必须还有至少一个字符
// console.log(/f./.test('abcddesfss'));
// //以abc 开头，并且以ss 结束的字符串:.*:. 匹配除了换行符 \n 以外的任意一个字符，*匹配多个任意字符，.*匹配上一个元素零次或多次。
// console.log(/^abc.*ss$/.test(str));

// var str='abcffffssdfffddsssj';
// // | 表示或的关系
// console.log(/^abc|dd$/.test(str));


// let str='1,988.3'
// str=str.replace(/,/gim,'');
// console.log(str);
// console.log(/^(-?\d+)(\.\d+)?$/.test(str));

// let sdate='2016-10-5';
// // console.log(/^\d{4}\-\d{1,2}-\d{1,2}$/.test(sdate));

// console.log(/^\d{4}[-,/]\d{1,2}[-,/]\d{1,2}$/.test(sdate));

// let sdate01='2016/10/5';



// console.log(/^\d{4}[-,/]\d{1,2}[-,/]\d{1,2}$/.test(sdate01));


// //let s='-1,11---22/44.34'.toUpperCase();
// let s='n/a'.toUpperCase();

// s=s.replace(/[\,.,\-,/]/gim,'');
// console.log(s);
// console.log(/^(-?\d+)$/.test(s));
/*
验证电话号码
^0表示是0开头
\d{2,3}表示2到3位数字
[- ]？表示一个 - 或者空位，？ 表示出现0次或者一次
\d{7,8}表示有7到8位数字
$表示结束
 */
 
 
console.log(/^0\d{2,3}[- ]?\d{7,8}$/.test('07558670570'));
/*
验证邮箱
\w:[a-zA-Z_0-9]

 */
console.log(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test('5+94774261@qefq.comss'))

/*
验证URL
\s:空白字符
 */
console.log(/[a-zA-z]+:[^\s]*/.test('htp://www.baidu.com'));
/*
验证负数且两位小数
 */
console.log(/^-[1-9]\d+\.[1-9]{2}$/.test(-123.12));

/*
http://www.baidu.com?name=ivan&age=18&sex
 */





