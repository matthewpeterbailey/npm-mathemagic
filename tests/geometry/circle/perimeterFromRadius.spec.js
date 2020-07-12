import { equal } from "assert";
import { perimeterFromRadius } from "../../../src/index";

describe("Perimeter of circle", () => {
	it("should return correct positive length, even for negative input", () => {
		equal(perimeterFromRadius(3), 18.84955592153876);
		equal(perimeterFromRadius(-3), 18.84955592153876);
		equal(perimeterFromRadius(3), perimeterFromRadius(-3));
	});
});
