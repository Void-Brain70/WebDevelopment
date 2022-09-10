//Q1. Print Odd numbers between 0 to 100.
// document.write("Q1.Odd number->\n");
// function odd(num) {
//     if (num % 2 != 0) {
//         document.writeln(num + " ");
//     }
// }
// let $numbers = [3, 4, 50, 5, 3, 10, 4, 6, 7, 8, 0, 8, 10, 1, 9, 32, 67, 9, 10];
// $numbers.forEach(odd);

//Q2. Arrange $numbers in ascending order.
// let $numbers1 = [3, 4, 50, 5, 3, 10, 4, 6, 7, 8, 0, 8, 10, 1, 9, 32, 67, 9, 10];
// value = $numbers1.sort(function comapre(a,b){
//     return a-b;
// }) 
// document.write(value);


//Q3. Calculate the sum of numbers within $numbers (reduce method)
// let $numbers1 = [3, 4, 50, 5, 3, 10, 4, 6, 7, 8, 0, 8, 10, 1, 9, 32, 67, 9, 10];
// let result = $numbers1.reduce(function(rvalue,cvalue)
// {
//     return rvalue+cvalue;
// },0);
// document.write("The sum of the number is: "+result);


//Q4. Remove similar numbers from $numbers. 
// function findSimilar(arr){
//     var $number3 = [];
//     for(let i=0; i <arr.length; i++){
//         if($number3.indexOf(arr[i]) === -1) {
//             $number3.push(arr[i]);
//         }
//     }
//     return $number3;
// }
// let $numbers2 = [3, 4, -1, -5, 3, 10, -7, 10, 1, 9, 7, -9, 0]
// let result = findSimilar($numbers2)
// document.write(result);

//Q5. Filter out negative numbers from $numbers2.
// let $numbers2 = [3, 4, -1, -5, 3, 10, -7, 10, 1, 9, 7, -9, 0]

// function negative(value)
// {
//     return value < 0;
// }
// document.write($numbers2.filter(negative));

//Q6. Return numbers in $numbers divisible by 10.
// function divisibleNumber(arr){
//     let $number3 = [];
//     for(let i= 0; i<arr.length;i++){
//         if(arr[i] % 10 === 0){
//             $number3.push(arr[i]);
//         }
//     }
//     return $number3;
// }
// let $numbers = [3, 4, 50, 5, 3, 10, 4, 6, 7, 8, 0, 8, 10, 1, 9, 32, 67, 9, 10];
// let res =  divisibleNumber($numbers);
// document.write(res);

//Q7. Return the number of vowels in a string. Example: vowels (‘ How are you ’) => 5
// const vowels = ["a", "e", "i", "o", "u"]
// function findVowels(v){
//     let cnt = 0;
//     for(let i of v.toLowerCase()){
//         if(vowels.includes(i)){
//             cnt++;
//         }
//     }
//     return cnt;
// }
// let str = "How are you";
// let res = findVowels(str);
// document.write(res);

//Q8. Arrange products from highest price to lowest.
const products= [
    {"name": "I Phone 13 Pro", "price": 899, "brand": "iphone", "rating": {"average": "4.2", "user_count": 200}, "discount": "20%"},
    {"name": "I Phone 7", "price": 399, "brand": "iphone", "rating": {"average": "3.9", "user_count": 600}, "discount": "0%"},
    {"name": "I Phone sr", "price": 599, "brand": "iphone", "rating": {"average": "4.24", "user_count": 450}, "discount": "20%"},
    {"name": "I Phone 12", "price": 599, "brand": "iphone", "rating": {"average": "4.3", "user_count": 167}, "discount": "14%"},
    {"name": "Samsung Note 10", "price": 699, "brand": "samsung", "rating": {"average": "3.2", "user_count": 154}, "discount": "0%"},
    {"name": "Samsung Note 11", "price": 799, "brand": "samsung", "rating": {"average": "4.7", "user_count": 312}, "discount": "5%"},
    {"name": "A52s", "price": 499, "brand": "samsung", "rating": {"average": "4.6", "user_count": 180}, "discount": "6%"},
    {"name": "A52s 5G", "price": 599, "brand": "samsung", "rating": {"average": "4.4", "user_count": 61}, "discount": "0%"},
    {"name": "I Phone 14", "price": 800, "brand": "iphone", "rating": {"average": "4.8", "user_count": 20}, "discount": "0%"},
    {"name": "I Phone 14 pro max", "price": 1200, "brand": "iphone", "rating": {"average": "5", "user_count": 1}, "discount": "50%"},
    {"name": "Xiaomi Poco M5", "price": 267, "brand": "xiaomi", "rating": {"average": "2.3", "user_count": 5}, "discount": "10%"},
    {"name": "Xiaomi A1", "price": 199, "brand": "xiaomi", "rating": {"average": "2.1", "user_count": 9}, "discount": "23%"},
    {"name": "Vivo Y75s", "price": 256, "brand": "vivo", "rating": {"average": "4.1", "user_count": 43}, "discount": "16%"},
    {"name": "Vivo iQOO 9T", "price": 476, "brand": "vivo", "rating": {"average": "4.5", "user_count": 134}, "discount": "20%"}
];
  
// let res = products.sort((a, b) => (a.price < b.price) ? 1 : -1);
// console.log(res);

//Q9. Using a javascript array method add a new field (discounted_price) to each of the objects in the array.
let newProducts = products.map(data => {
    let discountedPrice = data.price * (parseInt(data.discount) / 100);
    return { ...data, discounted_price: discountedPrice.toFixed(2) }
})
// console.log(res);

//Q10. Arrange products from highest discounted_price to lowest.
let updatedProducts = newProducts.sort((a, b) => b.discounted_price - a.discounted_price);
// console.log(updatedProducts);

//Q11. Arrange the products from the highest average rating to the lowest.
let updatedProducts1 = updatedProducts.sort((a, b) => b.rating.average - a.rating.average);
// console.log(updatedProducts1);

//Q12. Find iPhones that will cost less than $500
let updatedProducts2 = updatedProducts1.filter(x => {
    if (x.brand == 'iphone' && x.price > 500) {
        return x;
    }
})
// console.log(updatedProducts2);

//Q13. Get all phones from Samsung and iPhone which will cost more than $400
let updatedProducts3 = updatedProducts1.filter(x => {
    if (x.brand == 'iphone' || x.brand == 'samsung' && x.price > 400) {
        return x;
    }
})
// console.log(updatedProducts3);

//Q14. Print All children from this json  https://notepad.pw/wjcPdNjJ09U6HqYAXs6j  (recursive).
let recursiveData = [
  {
  "id": 1,
  "parent_id": null,
  "name": "Courses",
  "children": [
      {
        "id": 3,
        "parent_id": 1,
        "name": "Subject Wise Videos",
        "children": []
      },
      {
        "id": 4,
        "parent_id": 1,
        "name": "Bangla",
        "children": [
            {
              "id": 7,
              "parent_id": 4,
              "name": "Subject Wise Videos",
               "children": [
                 {
                    "id": 10,
                    "parent_id": 7,
                    "name": "Something",
                    "children": [
                      {
                        "id": 14,
                        "parent_id": 10,
                        "name": "Anything",
                        "children": [
                          {
                            "id": 18,
                            "parent_id": 10,
                            "name": "Im last level",
                            "children": []
                          }
                        ]
                      }
                    ]
                  }
                ]
            }
          ]
      }
    ]
  },
  {
  "id": 2,
  "parent_id": 16,
  "name": "Books",
  "children": [
      {
        "id": 7,
        "parent_id": 4,
        "name": "Subject Wise Videos",
        "children": []
      }
    ]
  }
]
let getChildren = [];

recursiveData.map(x1 => {
    let findData = (y) => {
        y.children.map(x2 => {
            getChildren.push(x2.name)
            findData(x2)
        })
    }
    findData(x1);
})
// console.log(getChildren);

//Q15. Print all children count and if parent name exists print parent name
let getParent = [];

recursiveData.map(x1 => {
    getParent.push({parent: x1.name, children:x1.children.length})
    let findData = (y) => {
        if (y.children.length > 0) {
            y.children.map(x2 => {
                if (x2.children.length > 0) {
                    getParent.push({parent: x2.name, children:x2.children.length})
                    findData(x2)
                }
        })
        }
    }
    findData(x1);
})
console.log(getParent);