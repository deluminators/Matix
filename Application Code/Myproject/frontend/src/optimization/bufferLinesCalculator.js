export default class BufferLinesCalculator {
	constructor(laptopList, numberOfLines) {
		this.laptopList = laptopList;
		this.numberOfLines = numberOfLines;
	}

	getMinIndex = (sumArr) => {
		let minIndex = 0;
		for (let i = 1; i < sumArr.length; i++) {
			if (sumArr[i] <= sumArr[minIndex]) minIndex = i;
		}
		return minIndex;
	};

	startProcess = () => {
		let sumArr = new Array(this.numberOfLines);
		let ans = new Array(this.numberOfLines);
		this.laptopList.sort((a, b) => b.time - a.time);

		for (let index = 0; index < sumArr.length; index++) {
			sumArr[index] = 0;
			ans[index] = new Array();
		}

		let counter = 0;
		for (counter = 0; counter < this.laptopList.length; counter++) {
			if (counter < this.numberOfLines) {
				ans[counter].push(this.laptopList[counter]);
				sumArr[counter] += this.laptopList[counter].time;
			} else {
				let curMinIndexInSum = this.getMinIndex(sumArr);
				
				if (sumArr[curMinIndexInSum] + this.laptopList[counter].time > 24) break;
				ans[curMinIndexInSum].push(this.laptopList[counter]);
				sumArr[curMinIndexInSum] += this.laptopList[counter].time;
			}
		}

		let backlogLaptops = new Array();
		for (let i = counter; i < this.laptopList.length; i++) {
			backlogLaptops.push(this.laptopList[i]);
		}

		
		if (backlogLaptops.length == 0) return true;
		else return false;

		
	};
}
