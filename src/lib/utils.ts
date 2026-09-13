import { createCn } from "cn/config"

// The default engine only knows Tailwind's built-in font-size scale
// (xs, sm, base, lg, xl, 2xl…), so our custom text-* size tokens collide
// with same-named color utilities (e.g. text-body-sm vs text-cloud-50) in
// the "text-*" conflict group and one silently gets dropped. Registering
// them under "font-size" keeps them in their own group.
export const cn = createCn({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "display-lg",
            "display-md",
            "heading-2xl",
            "heading-xl",
            "heading-lg",
            "heading-md",
            "heading-sm",
            "heading-xs",
            "body-xl",
            "body-lg",
            "body-md",
            "body-sm",
            "body-xs",
          ],
        },
      ],
    },
  },
})
