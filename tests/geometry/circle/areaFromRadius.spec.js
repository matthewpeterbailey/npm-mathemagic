import { equal } from "assert";
import { areaFromRadius } from "../../../src/index";

areaFromRadius(3);
describe("Area of circle", () => {
	it("should return correct positive area, even for negative input", () => {
		equal(areaFromRadius(3), 28.274333882308138);
		equal(areaFromRadius(-3), 28.274333882308138);
		equal(areaFromRadius(3), areaFromRadius(-3));
	});
});
