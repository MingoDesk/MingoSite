import {
  EmojiHappyIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/solid";

import { colors } from "../Other/themes";

export const information = [
  {
    img: <EmojiHappyIcon width="3rem" fill="#0DD2A3" />,
    id: "happyFace",
    title: "Easy to use",
    description: "MingoDesk was developed with all users in mind.",
    background: "#215463",
  },
  {
    img: <ChartBarIcon width="3rem" fill="#9E6DD5" />,
    id: "analytics",
    title: "Advanced analytics",
    description: "See your teams perfomance and where customers are hurting.",
    background: "#474477",
  },
  {
    img: <ShieldCheckIcon width="3rem" fill="#D55B89" />,
    id: "secure",
    title: "Secure",
    description:
      "Unlike other helps desks, MingoDesk doesn't make use of an open CDN.",
    background: "#553F64",
  },
  {
    img: <CurrencyDollarIcon width="3rem" fill="#12B0FF" />,
    id: "freeshit",
    title: "Free*",
    description:
      "If you have the experience and time, you can self-host MingoDesk.",
    background: "#235581",
  },
];
