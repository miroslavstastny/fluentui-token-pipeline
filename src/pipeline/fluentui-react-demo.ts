// TODO: Output new versions of:
// https://github.com/microsoft/fluentui/blob/master/packages/react-theme/src/utils/light/colors.ts
// https://github.com/microsoft/fluentui/blob/master/packages/react-theme/src/global/borderRadius.ts

import StyleDictionary from "style-dictionary"
import _ from "lodash"

import { ValueToken } from "./types"
import * as Utils from "./utils"

StyleDictionary.registerTransformGroup({
	name: "fluentui/react",
	transforms: ["fluentui/attribute", "fluentui/name/json/grouped", "fluentui/alias/flatten", "fluentui/color/css"],
})

StyleDictionary.registerFormat({
	name: "fluentui/react/colors",
	formatter: (dictionary, config) =>
	{
		const c = (path: string) => JSON.stringify((Utils.findPropByPath(path, dictionary.properties.Set) as ValueToken).value)

		return (`import {
  NeutralColorTokens,
  SharedColorTokens,
  ColorVariants,
  GlobalSharedColors,
  BackgroundColorTokens,
  BrandVariants,
  BrandColorTokens,
} from '../../types';
import { grey, white, sharedColors } from '../../global/index';

export const ghostColorTokens: BackgroundColorTokens = {
  background: 'transparent',
  backgroundHover: grey[96],
  backgroundPressed: grey[88],
  backgroundSelected: grey[92],
};

export const transparentColorTokens: BackgroundColorTokens = {
  background: 'transparent',
  backgroundHover: 'transparent',
  backgroundPressed: 'transparent',
  backgroundSelected: 'transparent',
};

export function createBrandColorTokens(brand: BrandVariants): BrandColorTokens {
  return {
    brandBackground: brand.primary,
    brandBackgroundHover: brand.shade10,
    brandBackgroundPressed: brand.shade40,
    brandBackgroundSelected: brand.shade20,
    brandBackgroundStatic: brand.primary,
  };
}

export function createNeutralColorTokens(
  brand: ColorVariants,
  customValues: { [P in keyof NeutralColorTokens]?: string } = {},
): NeutralColorTokens {
  return {
    neutralForeground1: ${c("NeutralForeground1.Fill.Color.Rest")},

    neutralForeground2: ${c("NeutralForeground2.Fill.Color.Rest")},
    neutralForeground2Hover: ${c("NeutralForeground2.Fill.Color.Hover")},
    neutralForeground2Pressed: ${c("NeutralForeground2.Fill.Color.Pressed")},
    neutralForeground2Selected: ${c("NeutralForeground2Selected.Fill.Color.Rest")},
    brandForeground2Hover: ${c("NeutralForeground2Brand.Fill.Color.Hover")},
    brandForeground2Pressed: ${c("NeutralForeground2Brand.Fill.Color.Pressed")},
    brandForeground2Selected: ${c("NeutralForeground2BrandSelected.Fill.Color.Rest")},

    neutralForeground3: ${c("NeutralForeground3.Fill.Color.Rest")},
    neutralForeground3Hover: ${c("NeutralForeground3.Fill.Color.Hover")},
    neutralForeground3Pressed: ${c("NeutralForeground3.Fill.Color.Pressed")},
    neutralForeground3Selected: ${c("NeutralForeground3Selected.Fill.Color.Rest")},
    brandForeground3Hover: ${c("NeutralForeground2Brand.Fill.Color.Hover")},
    brandForeground3Pressed: ${c("NeutralForeground2Brand.Fill.Color.Pressed")},
    brandForeground3Selected: ${c("NeutralForeground2BrandSelected.Fill.Color.Rest")},

    neutralForeground4: ${c("NeutralForeground4.Fill.Color.Rest")},

    neutralForegroundDisabled: ${c("NeutralForeground1.Fill.Color.Disabled")},

    brandForeground: ${c("BrandForeground.Fill.Color.Rest")},
    brandForegroundHover: ${c("BrandForeground.Fill.Color.Hover")},
    brandForegroundPressed: ${c("BrandForeground.Fill.Color.Pressed")},
    brandForegroundSelected: ${c("BrandForegroundSelected.Fill.Color.Rest")},

    neutralForegroundInverted: ${c("NeutralForegroundInverted.Fill.Color.Rest")},

    neutralForegroundInvertedAccessible: ${c("NeutralForegroundInvertedAccessible.Fill.Color.Rest")},

    neutralBackground1: ${c("NeutralBackground1.Fill.Color.Rest")},
    neutralBackground1Hover: ${c("NeutralBackground1.Fill.Color.Hover")},
    neutralBackground1Pressed: ${c("NeutralBackground1.Fill.Color.Pressed")},
    neutralBackground1Selected: ${c("NeutralBackground1Selected.Fill.Color.Rest")},

    neutralBackground2: ${c("NeutralBackground2.Fill.Color.Rest")},
    neutralBackground2Hover: ${c("NeutralBackground2.Fill.Color.Hover")},
    neutralBackground2Pressed: ${c("NeutralBackground2.Fill.Color.Pressed")},
    neutralBackground2Selected: ${c("NeutralBackground2Selected.Fill.Color.Rest")},

    neutralBackground3: ${c("NeutralBackground3.Fill.Color.Rest")},
    neutralBackground3Hover: ${c("NeutralBackground3.Fill.Color.Hover")},
    neutralBackground3Pressed: ${c("NeutralBackground3.Fill.Color.Pressed")},
    neutralBackground3Selected: ${c("NeutralBackground3Selected.Fill.Color.Rest")},

    neutralBackground4: ${c("NeutralBackground4.Fill.Color.Rest")},
    neutralBackground4Hover: ${c("NeutralBackground4.Fill.Color.Hover")},
    neutralBackground4Pressed: ${c("NeutralBackground4.Fill.Color.Pressed")},
    neutralBackground4Selected: ${c("NeutralBackground4Selected.Fill.Color.Rest")},

    neutralBackground5: ${c("NeutralBackground5.Fill.Color.Rest")},
    neutralBackground5Hover: ${c("NeutralBackground5.Fill.Color.Hover")},
    neutralBackground5Pressed: ${c("NeutralBackground5.Fill.Color.Pressed")},
    neutralBackground5Selected: ${c("NeutralBackground5Selected.Fill.Color.Rest")},

    neutralBackground6: ${c("NeutralBackground6.Fill.Color.Rest")},

    neutralBackgroundDisabled: ${c("NeutralBackground1.Fill.Color.Disabled")},

    neutralStrokeAccessible: ${c("NeutralStrokeAccessible.Stroke.Color.Rest")},
    neutralStrokeAccessibleHover: ${c("NeutralStrokeAccessible.Stroke.Color.Hover")},
    neutralStrokeAccessiblePressed: ${c("NeutralStrokeAccessible.Stroke.Color.Pressed")},
    neutralStrokeAccessibleSelected: ${c("NeutralStrokeAccessibleSelected.Stroke.Color.Rest")},

    neutralStroke1: ${c("NeutralStroke1.Stroke.Color.Rest")},
    neutralStroke1Hover: ${c("NeutralStroke1.Stroke.Color.Hover")},
    neutralStroke1Pressed: ${c("NeutralStroke1.Stroke.Color.Pressed")},
    neutralStroke1Selected: ${c("NeutralStroke1Selected.Stroke.Color.Rest")},

    neutralStroke2: ${c("NeutralStroke2.Stroke.Color.Rest")},

    neutralStroke3: ${c("NeutralStroke3.Stroke.Color.Rest")},

    neutralStrokeDisabled: ${c("NeutralStroke1.Stroke.Color.Disabled")},

    strokeAccessible: ${c("StrokeAccessible.Stroke.Color")},
    strokeAccessibleInteractive: ${c("StrokeAccessibleInteractive.Stroke.Color")},
    strokeAccessibleDisabled: ${c("StrokeAccessibleDisabled.Stroke.Color")},

    neutralShadowAmbient: 'rgba(0,0,0,0.12)',
    neutralShadowKey: 'rgba(0,0,0,0.14)',
    neutralShadowAmbientLighter: 'rgba(0,0,0,0.06)',
    neutralShadowKeyLighter: 'rgba(0,0,0,0.07)',
    neutralShadowAmbientDarker: 'rgba(0,0,0,0.20)',
    neutralShadowKeyDarker: 'rgba(0,0,0,0.24)',
    ...customValues,
  };
}

function createSharedColorTokens(color: ColorVariants, customValues: Record<string, string> = {}): SharedColorTokens {
  return {
    background1: color.tint60,
    background2: color.tint40,
    background3: color.primary,
    foreground1: color.primary,
    foreground2: color.shade30,
    foreground3: color.primary,
    borderActive: color.primary,
    border2: color.primary,
    ...customValues,
  };
}

export const sharedColorTokens: Record<keyof GlobalSharedColors, SharedColorTokens> = {
  darkRed: createSharedColorTokens(sharedColors.darkRed),
  burgundy: createSharedColorTokens(sharedColors.burgundy),
  cranberry: createSharedColorTokens(sharedColors.cranberry),
  red: createSharedColorTokens(sharedColors.red),
  darkOrange: createSharedColorTokens(sharedColors.darkOrange),
  bronze: createSharedColorTokens(sharedColors.bronze),
  pumpkin: createSharedColorTokens(sharedColors.pumpkin),
  orange: createSharedColorTokens(sharedColors.orange),
  peach: createSharedColorTokens(sharedColors.peach),
  marigold: createSharedColorTokens(sharedColors.marigold),
  yellow: createSharedColorTokens(sharedColors.yellow),
  gold: createSharedColorTokens(sharedColors.gold),
  brass: createSharedColorTokens(sharedColors.brass),
  brown: createSharedColorTokens(sharedColors.brown),
  darkBrown: createSharedColorTokens(sharedColors.darkBrown),
  lime: createSharedColorTokens(sharedColors.lime),
  forest: createSharedColorTokens(sharedColors.forest),
  seafoam: createSharedColorTokens(sharedColors.seafoam),
  lightGreen: createSharedColorTokens(sharedColors.lightGreen),
  green: createSharedColorTokens(sharedColors.green),
  darkGreen: createSharedColorTokens(sharedColors.darkGreen),
  lightTeal: createSharedColorTokens(sharedColors.lightTeal),
  teal: createSharedColorTokens(sharedColors.teal),
  darkTeal: createSharedColorTokens(sharedColors.darkTeal),
  cyan: createSharedColorTokens(sharedColors.cyan),
  steel: createSharedColorTokens(sharedColors.steel),
  lightBlue: createSharedColorTokens(sharedColors.lightBlue),
  blue: createSharedColorTokens(sharedColors.blue),
  royalBlue: createSharedColorTokens(sharedColors.royalBlue),
  darkBlue: createSharedColorTokens(sharedColors.darkBlue),
  cornflower: createSharedColorTokens(sharedColors.cornflower),
  navy: createSharedColorTokens(sharedColors.navy),
  lavender: createSharedColorTokens(sharedColors.lavender),
  purple: createSharedColorTokens(sharedColors.purple),
  darkPurple: createSharedColorTokens(sharedColors.darkPurple),
  orchid: createSharedColorTokens(sharedColors.orchid),
  grape: createSharedColorTokens(sharedColors.grape),
  berry: createSharedColorTokens(sharedColors.berry),
  lilac: createSharedColorTokens(sharedColors.lilac),
  pink: createSharedColorTokens(sharedColors.pink),
  hotPink: createSharedColorTokens(sharedColors.hotPink),
  magenta: createSharedColorTokens(sharedColors.magenta),
  plum: createSharedColorTokens(sharedColors.plum),
  beige: createSharedColorTokens(sharedColors.beige),
  mink: createSharedColorTokens(sharedColors.mink), // TODO naming iteration -> clashing with grey
  silver: createSharedColorTokens(sharedColors.silver),
  platinum: createSharedColorTokens(sharedColors.platinum),
  anchor: createSharedColorTokens(sharedColors.anchor),
  charcoal: createSharedColorTokens(sharedColors.charcoal),
};
`)
	},
})
