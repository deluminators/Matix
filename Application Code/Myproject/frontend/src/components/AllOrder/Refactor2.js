const options = {
  Laptop1: 'XPS 13',
  Laptop2: 'XPS 15',
  Laptop3: 'Inspiron 3567',
  Laptop4: 'Inspiron 5379',
  Laptop5: 'Inspiron 7567',
  Laptop6: 'Vostro 3568',
  Laptop7: 'Vostro 5370',
  Laptop8: 'Latitude 5480',
  Laptop9: 'Alienware 15',
  Laptop10: 'Alienware 17',
};

const Refactor2 = (data) => {
  // data = {
  //   orderID: 20,
  //   orderDate: '2020-11-21',
  //   deadline: '2020-11-21',
  //   Laptop1: 1,
  //   Quantity1: 120,
  //   Laptop2: 2,
  //   Quantity2: 6,
  //   Laptop3: 3,
  //   Quantity3: 0,
  //   Laptop4: 4,
  //   Quantity4: 0,
  //   Laptop5: 5,
  //   Quantity5: 0,
  //   Laptop6: 6,
  //   Quantity6: 9,
  //   Laptop7: 7,
  //   Quantity7: 0,
  //   Laptop8: 8,
  //   Quantity8: 10,
  //   Laptop9: 9,
  //   Quantity9: 0,
  //   Laptop10: 10,
  //   Quantity10: 0,
  // };
  const obj = {};
  obj['orderID'] = data['orderID'];
  obj['orderDate'] = data['orderDate'];
  obj['deadline'] = data['deadline'];
  let tot = 0;
  Object.keys(options).forEach((el, ind) => {
    let key = 'Quantity' + (ind + 1);
    if (data[key] > 0) obj[options[el]] = data[key];
    tot = tot + data[key]*1;
  });
  obj['Total'] = tot;
  console.log(obj);
  return obj;
};

export default Refactor2;
