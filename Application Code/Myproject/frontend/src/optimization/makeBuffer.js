export default class MakeBuffer {
	constructor(laptopList, bufferDays, curDate) {
		this.laptopList = laptopList;
		this.bufferDays = bufferDays;
		this.curDate = curDate;
	}

	dateToNum(d) {
		d = d.split("-");
		let num = Number(d[0] + d[1] + d[2]);
		// console.log(num);
		return num;
	}

	startSplitting = () => {
		this.laptopList.sort((a, b) => this.dateToNum(a.date) - this.dateToNum(b.date));

		// console.log(this.laptopList);
		console.log(`current date : ${this.curDate.toLocaleDateString()}`);

		let bufferLaptop = new Array();
		let pendingLaptop = new Array();

		// let curDate = new Date(new Date().toLocaleDateString());

		for (let i = 0; i < this.laptopList.length; i++) {
			let laptopDate = new Date(this.laptopList[i].date).setHours(0, 0, 0, 0);

			let timeToDeadline = (laptopDate - this.curDate) / (1000 * 3600 * 24);

			// console.log(timeToDeadline);
			if (timeToDeadline <= this.bufferDays) {
				bufferLaptop.push(this.laptopList[i]);
				// this.laptopList.splice(i, 1);
			} else pendingLaptop.push(this.laptopList[i]);
		}

		// pendingLaptop = [...this.laptopList];
		// console.log(pendingLaptop);
		// console.log(bufferLaptop);

		return { pendingLaptop, bufferLaptop };
	};
}
