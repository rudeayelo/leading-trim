type Reference = {
  topCrop: number;
  bottomCrop: number;
  lineHeight: number;
  fontSize: number;
};

type Correction = {
  top?: number;
  bottom?: number;
};

interface Params {
  lineHeight: number;
  reference: Reference;
  correction?: Correction;
}

export function leadingTrim({
  lineHeight,
  reference,
  correction = {},
}: Params) {
  const correctionTop = correction?.top || 0;
  const correctionBottom = correction?.bottom || 0;

  const topCropHeight =
    Math.max(
      reference.topCrop +
        (lineHeight - reference.lineHeight) * (reference.fontSize / 2),
      0,
    ) / reference.fontSize;

  const bottomCropHeight =
    Math.max(
      reference.bottomCrop +
        (lineHeight - reference.lineHeight) * (reference.fontSize / 2),
      0,
    ) / reference.fontSize;

  return {
    lineHeight,
    display: "block",
    "&::before, &::after": {
      content: '""',
      display: "block",
      height: 0,
      width: 0,
      paddingTop: "1px", // To avoid collapsing
    },
    "&::before": {
      marginBottom: `calc(-${topCropHeight}em - 1px + ${correctionTop}px)`,
    },
    "&::after": {
      marginTop: `calc(-${bottomCropHeight}em - 1px + ${correctionBottom}px)`,
    },
  };
}

type SystemFontLeadingTrimParams = Omit<Params, "reference">;

const systemFontReference = {
  topCrop: 11,
  bottomCrop: 10,
  fontSize: 32,
  lineHeight: 1.4,
};

export function systemFontLeadingTrim({
  lineHeight,
  correction,
}: SystemFontLeadingTrimParams) {
  return leadingTrim({
    lineHeight,
    reference: systemFontReference,
    correction,
  });
}

const systemMonoFontReference = {
  topCrop: 10,
  bottomCrop: 11,
  fontSize: 32,
  lineHeight: 1.4,
};

export function systemMonoFontLeadingTrim({
  lineHeight,
  correction,
}: SystemFontLeadingTrimParams) {
  return leadingTrim({
    lineHeight,
    reference: systemMonoFontReference,
    correction,
  });
}
