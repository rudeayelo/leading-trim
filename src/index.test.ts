import { leadingTrim } from ".";

it("outputs styles correctly", () => {
  const leadingTrimCSS = leadingTrim({
    lineHeight: 1.5,
    reference: {
      topCrop: 7,
      bottomCrop: 7,
      fontSize: 40,
      lineHeight: 1.1,
    },
    correction: {
      top: 1,
      bottom: -1,
    },
  });

  expect(leadingTrimCSS).toMatchSnapshot();
});
