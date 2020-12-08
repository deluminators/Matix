export default class Optimize {
	constructor(laptopList, backlogList, numberOfLines) {
		this.laptopList = laptopList;
		this.backlogList = backlogList;
		this.numberOfLines = numberOfLines;
	}

	getMinIndex = (sumArr) => {
		let minIndex = 0;
		for (let i = 1; i < sumArr.length; i++) {
			if (sumArr[i] <= sumArr[minIndex]) minIndex = i;
		}
		return minIndex;
	};

	dateToNum(d) {
		d = d.split("-");
		let num = Number(d[0] + d[1] + d[2]);
		// console.log(num);
		return num;
	}

	startProcess = () => {
		let sumArr = new Array(this.numberOfLines);
		let ans = new Array(this.numberOfLines);
		this.laptopList.sort((a, b) => this.dateToNum(a.date) - this.dateToNum(b.date) || parseInt(b.time) - parseInt(a.time));
		this.backlogList.sort((a, b) => this.dateToNum(a.date) - this.dateToNum(b.date) || parseInt(b.time) - parseInt(a.time));

		// console.log("laptop list :");
		// console.log(this.laptopList);
		// console.log("backlog list :");
		// console.log(this.backlogList);

		let laptopLength = this.laptopList.length;
		let backlogLength = this.backlogList.length;

		for (let index = 0; index < sumArr.length; index++) {
			sumArr[index] = 0;
			ans[index] = new Array();
		}

		let counterLaptop = 0,
			counterBacklog = 0,
			initialAnsCounter = 0;

		let isProductionDone = false;

		while (counterLaptop < laptopLength && counterBacklog < backlogLength) {
			if (initialAnsCounter < this.numberOfLines) {
				if (this.dateToNum(this.backlogList[counterBacklog].date) <= this.dateToNum(this.laptopList[counterLaptop].date)) {
					ans[initialAnsCounter].push(this.backlogList[counterBacklog]);
					sumArr[initialAnsCounter] += parseInt(this.backlogList[counterBacklog].time);
					counterBacklog++;
					initialAnsCounter++;
				} else {
					ans[initialAnsCounter].push(this.laptopList[counterLaptop]);
					sumArr[initialAnsCounter] += parseInt(this.laptopList[counterLaptop].time);
					counterLaptop++;
					initialAnsCounter++;
				}
			} else {
				let curMinIndexInSum = this.getMinIndex(sumArr);
				// console.log("minimum index: " + curMinIndexInSum);
				if (this.dateToNum(this.backlogList[counterBacklog].date) <= this.dateToNum(this.laptopList[counterLaptop].date)) {
					if (sumArr[curMinIndexInSum] + parseInt(this.backlogList[counterBacklog].time) > 24) {
						isProductionDone = true;
						break;
					}
					ans[curMinIndexInSum].push(this.backlogList[counterBacklog]);
					sumArr[curMinIndexInSum] += parseInt(this.backlogList[counterBacklog].time);
					counterBacklog++;
				} else {
					if (sumArr[curMinIndexInSum] + parseInt(this.laptopList[counterLaptop].time) > 24) {
						isProductionDone = true;
						break;
					}
					ans[curMinIndexInSum].push(this.laptopList[counterLaptop]);
					sumArr[curMinIndexInSum] += parseInt(this.laptopList[counterLaptop].time);
					counterLaptop++;
				}
			}
		}
		if (isProductionDone == false) {
			while (counterLaptop < laptopLength) {
				let curMinIndexInSum = this.getMinIndex(sumArr);
				// console.log("minimum index: " + curMinIndexInSum);
				if (sumArr[curMinIndexInSum] + parseInt(this.laptopList[counterLaptop].time) > 24) {
					isProductionDone = true;
					break;
				}
				ans[curMinIndexInSum].push(this.laptopList[counterLaptop]);
				sumArr[curMinIndexInSum] += parseInt(this.laptopList[counterLaptop].time);
				counterLaptop++;
			}
		}
		if (isProductionDone == false) {
			while (counterBacklog < backlogLength) {
				let curMinIndexInSum = this.getMinIndex(sumArr);
				// console.log("minimum index: " + curMinIndexInSum);
				if (sumArr[curMinIndexInSum] + parseInt(this.backlogList[counterBacklog].time) > 24) {
					isProductionDone = true;
					break;
				}
				ans[curMinIndexInSum].push(this.backlogList[counterBacklog]);
				sumArr[curMinIndexInSum] += parseInt(this.backlogList[counterBacklog].time);
				counterBacklog++;
			}
		}

		let quantityProcessed = counterBacklog + counterLaptop;

		let backlogLaptops = new Array();
		if (isProductionDone == true) {
			while (counterLaptop < laptopLength) {
				backlogLaptops.push(this.laptopList[counterLaptop]);
				counterLaptop++;
			}
			while (counterBacklog < backlogLength) {
				backlogLaptops.push(this.backlogList[counterBacklog]);
				counterBacklog++;
			}
		}

		console.log(`item processed ${quantityProcessed} out of ${this.laptopList.length + this.backlogList.length}`);

		// console.log(ans.toString());
		console.log(sumArr.toString());

		// for (let index = 0; index < ans.length; index++) {
		//   console.log(ans[index].length);
		//   for (let i = 0; i < ans[index].length; i++) {
		//     console.log(ans[index][i].name);
		//   }
		//   console.log("--------");
		// }

		// console.log("-------------------");
		// console.log("---------------------");

		// for (let index = 0; index < backlogLaptops.length; index++) {
		//   console.log(backlogLaptops[index].name);
		// }

		return { processedLaptops: ans, backlogLaptops, quantityProcessed, lines: sumArr };
	};
}
