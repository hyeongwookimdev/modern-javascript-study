// 30.1 Date 생성자 함수

// 1. new Date()

new Date(); // 2022-11-08T01:59:22.567Z
Date(); // Tue Nov 08 2022 10:59:22 GMT+0900 (Korean Standard Time)

// 2. new Date(milliseconds)

new Date(0); // 1970-01-01T00:00:00.000Z
new Date(86400000); // 1970-01-02T00:00:00.000Z

/*
86400000ms는 1day를 의미한다.
1s = 1,000ms
1m = 60s * 1,000ms = 60,000ms
1h = 60m * 60,000ms = 3,600,000ms
1d = 24h * 3,600,000ms = 86,400,000ms
*/

// 3. new Date(dateString)

new Date("Nov 8, 2022 11:06:00"); // 2022-11-08T02:06:00.000Z
new Date("2022/11/08/11:06:00"); // 2022-11-08T02:06:00.000Z

// 30.2 Date 메서드

const today = new Date();

console.log(today.getFullYear()); // 2022년
console.log(today.getMonth()); // 10 -> 11월
console.log(today.getDate()); // 8일
console.log(today.getDay()); // 2 -> 화요일
console.log(today.getHours()); // 11시
console.log(today.getMinutes()); // 29분
console.log(today.getSeconds()); // 40초
console.log(today.getMilliseconds()); // 36
console.log(today.toDateString()); // Tue Nov 08 2022
console.log(today.toTimeString()); // 11:29:40 GMT+0900 (Korean Standard Time)
console.log(today.toISOString()); // 2022-11-08T02:29:40.036Z

// 활용
console.log(today.toISOString().slice(0, 10)); // 2022-11-08
console.log(today.toISOString().slice(0, 10).replace(/-/g, "")); // 20221108

console.log(today.toLocaleString()); // 11/8/2022, 11:29:40 AM
console.log(today.toLocaleString("ko-KR")); // 2022. 11. 8. 오전 11:29:40
console.log(today.toLocaleString("ja-JP")); // 2022/11/8 11:29:40

console.log(today.toLocaleTimeString()); // 11:29:40 AM
console.log(today.toLocaleTimeString("ko-KR")); // 오전 11:29:40
console.log(today.toLocaleTimeString("ja-JP")); // 11:29:40
