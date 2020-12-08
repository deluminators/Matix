import { laptopModel } from "./laptopModel";

export default class OrderListCreator {
	constructor(orderObject) {
		this.orderObject = orderObject;
	}

	startProcess = () => {
		// console.log(this.orderObject);
		let ans = new Array();

		for (let i = 0; i < this.orderObject.length; i++) {
			let obj = this.orderObject[i];
			for (let j = 1; j <= 10; j++) {
				if (obj[`Quantity${j}`] != 0) {
					ans.push({ id: obj.orderID, name: laptopModel[j - 1], time: laptopModel[j - 1].totalTime, quantity: obj[`Quantity${j}`], date: obj.deadline });
				}
			}
		}

		console.log(ans);

		return { ans };
	};
}
