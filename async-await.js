// 3개의 비동기 처리는 서로 연관이 없이 개별적으로 수행되는 비동기 처리이므로
// 앞선 비동기 처리가 완료될 때까지 대기해서 순차적으로 처리할 필요가 없다.

async function foo() {
  const res = await Promise.all([
    new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
    new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
    new Promise((resolve) => setTimeout(() => resolve(3), 1000)),
  ]);

  console.log(res);
}
foo();
