import { equal } from "assert";
import { areaOfSquare, square } from "../../../src/index";

describe("Area of square", () => {
	it("should return correct positive length, even for negative input", () => {
		equal(areaOfSquare(2), 4);
		equal(areaOfSquare(-2), 4);
		equal(areaOfSquare(3), areaOfSquare(-3));
	});
});

describe("Square and AreaOfSquare functions", () => {
	it("should be return the same value", () => {
		equal(square(1), areaOfSquare(1));
	});
});
