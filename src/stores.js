import { writable } from "svelte/store";

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 10,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta augue porta orci aliquam, laoreet tincidunt mauris varius. Morbi et pretium arcu. Sed egestas malesuada varius.",
  },
  {
    id: 2,
    rating: 8,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta augue porta orci aliquam, laoreet tincidunt mauris varius. Morbi et pretium arcu. Sed egestas malesuada varius.",
  },
  {
    id: 3,
    rating: 9,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta augue porta orci aliquam, laoreet tincidunt mauris varius. Morbi et pretium arcu. Sed egestas malesuada varius.",
  },
]);
