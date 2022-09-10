//1.Array
// const dept = ['CSE','EEE','ME','BBA'];
// for (let i = 0 ; i<dept.length; i++)
// {
//     document.write(dept[i], " ");
// }

//2.Concat() method
// const arr1 = ["C", "C++","C#"];
// const arr2 = arr1.concat("JavaScript");
// document.write("After concat->",arr2);

//3.Filter() method
// const mark = ['100','90','80','60','55'];

// function check (value)
// {
//     return value>80;
// }

// document.write(mark.filter(check));


// const words = ['Apple','Orange','Mango'];

// function wordcount(value1)
// {
//     return value1.length> 5;
// }
// document.write(words.filter(wordcount));

//4.Find() Methods
// const salary = ['10000','15000','20000','25000','30000'];

// let res = salary.find(x=> x>'20000')
// document.write(res);

//5.Map() Methods
// const maap = [5,10,15,20];

// let mapres = maap.map(x=> x*5);
// document.write(mapres);

//6.push(last) method and unshift(first) method
const team = ['BNG','IND','PAK','AFG','SRI','HOK'];
//team.push('hok');
//team.unshift('hok');
//document.write(team);

//7.pop(last) methods shift(first) methods
//team.pop()
//team.shift()
//document.write(team);

//8.array splice() method is used to add/remove the elements to/from the existing array.
//team.splice(3,6,3);
//document.write(team);

//9.reverse() method method changes the sequence of elements of the given array
//team.reverse()
//document.write(team)

//10.sort() method is used to arrange the array elements in some order. 
//team.sort() //for acending order
//team.sort().reverse()
//document.write(team)

//11.forEach() methods calls a function for each element in an array.
// let sum =0;
// const  arr = [10,5,15,20];

// arr.forEach(function check(ele){
//     sum = sum+ele;
//     document.write(sum, " ")
// })

//12.join() method  combines all the elements of an array into a string and returns an array as a string.
// let res = team.join('-');
// document.write(res)

//indexOf() methods is used to search the position of a particular element in a given array. 
let res = team.indexOf('PAK');
document.write(res);

 