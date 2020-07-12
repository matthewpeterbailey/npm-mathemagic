import { min } from "../../src/index";
import { equal } from "assert";

describe("Min", () => {
	it("should return minimum of large array of numbers", () => {
		let numbers = [100, 23, 44, 72, -10, -3, 209, 109, 1, 2, 3, 4];
		equal(min(numbers), -10);
	});
});
