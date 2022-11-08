// 31.6 자주 사용하는 정규표현식

// 31.6.1 특정 단어로 시작하는지 검사
const url = "https://hyeongwookimdev.github.io";
/^https?:\/\//.test(url); // true
/io$/.test(url); // true

// 31.6.3 숫자로만 이루어진 문자열인지 검사
const targetNum = "819";
/^\d+$/.test(targetNum); // true

// 31.6.4 하나 이상의 공백으로 시작하는지 검사
const targetSpace = " 공백포함";
/^[\s]+/.test(targetSpace); // true

// 31.6.5 아이디로 사용 가능한지 검사
const id = "taesan819";
/^[A-Za-z0-9]{4,10}$/.test(id);

// 31.6.6 메일 주소 형식에 맞는지 검사
const email = "hyeongwookim.dev@gmail.com";
/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z{2,3}$]/.test(
  email
); // true

// 31.6.7 핸드폰 번호 형식에 맞는지 검사
const cellphone = "010-1234-5678";
/^\d{3}-\d{3,4}-\d{4}$/.test(cellphone); // true

// 31.6.8 특수 문자 포함 여부 검사
const target = "abc#123";
/[^A-Za-z0-9]/gi.test(target); // true
