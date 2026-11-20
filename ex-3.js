//Exercise #3
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};

let getJohnOrders = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve([
          {
            orderId: "001",
            items: ["apple", "banana"],
          },
          {
            orderId: "002",
            items: ["orange", "itim"],
          },
        ]),
      1500
    );
  });
};

getJohnProfile()
  .then(function (profile) {
    console.log(profile); // แสดงข้อมูลโปรไฟล์ก่อน
    return getJohnOrders(); // เริ่มดึงรายการสั่งซื้อหลังจากนั้น
  })
  .then(function (orders) {
    console.log(orders); // แสดงรายการสั่งซื้อ
  });