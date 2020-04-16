import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";
import { systemMonoFontLeadingTrim } from "../../dist";

const textSizes = {
  1: {
    fontSize: 12,
    lineHeight: 1.6,
  },
  2: {
    fontSize: 16,
    lineHeight: 1.4,
  },
  3: {
    fontSize: 24,
    lineHeight: 1.3,
    correction: {
      top: 1,
      bottom: -1,
    },
  },
  4: {
    fontSize: 40,
    lineHeight: 1.1,
    correction: {
      bottom: -1,
    },
  },
  5: {
    fontSize: 56,
    lineHeight: 1,
    correction: {
      bottom: -1,
    },
  },
};

const getLeadnigTrimCSS = size =>
  systemMonoFontLeadingTrim({
    lineHeight: textSizes[size].lineHeight,
    correction: {
      top: textSizes[size].correction?.top,
      bottom: textSizes[size].correction?.bottom,
    },
  });

const Text = styled("div")(props => ({
  ...getLeadnigTrimCSS(props.size),
  fontSize: textSizes[props.size].fontSize,
  backgroundColor: "#A1C5E9",
}));

const App = () => (
  <>
    <div
      style={{
        padding: 32,
        backgroundColor: "#C3DEB8",
      }}
    >
      <Text size={4}>leading-trim</Text>
    </div>
    <br />

    <Text size={5} style={{ fontWeight: "bold" }}>
      Using a monospace system font
    </Text>
    <br />
    <Text size={4}>
      Beauty is in the eye of the beholder and it may be necessary from time to
      time to give a stupid or misinformed beholder a black eye.
    </Text>
    <br />
    <Text size={3}>
      There is never a time or place for true love. It happens accidentally, in
      a heartbeat, in a single flashing, throbbing moment.
    </Text>
    <br />
    <Text size={2}>
      Sometimes, you read a book and it fills you with this weird evangelical
      zeal, and you become convinced that the shattered world will never be put
      back together unless and until all living humans read the book.
    </Text>
    <br />
    <Text size={1}>
      You may not be her first, her last, or her only. She loved before she may
      love again. But if she loves you now, what else matters? She's not
      perfect—you aren't either, and the two of you may never be perfect
      together but if she can make you laugh, cause you to think twice, and
      admit to being human and making mistakes, hold onto her and give her the
      most you can. She may not be thinking about you every second of the day,
      but she will give you a part of her that she knows you can break—her
      heart. So don't hurt her, don't change her, don't analyze and don't expect
      more than she can give. Smile when she makes you happy, let her know when
      she makes you mad, and miss her when she's not there.
    </Text>
  </>
);

ReactDOM.render(<App />, document.getElementById("root"));
