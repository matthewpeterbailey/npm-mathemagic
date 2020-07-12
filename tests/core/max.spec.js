import { max } from "../../src/index";
import { equal } from "assert";

describe("Max", () => {
	it("should return maximum of large array of numbers", () => {
		let numbers = [100, 23, 44, 72, -10, -3, 209, 109, 1, 2, 3, 4];
		equal(max(numbers), 209);
	});
});
