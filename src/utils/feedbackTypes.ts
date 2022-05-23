export const FeedbackTypes = {
  BUG: {
    title: 'Problema',
    image: require('../assets/bug.png'),
  },
  IDEA: {
    title: 'Ideia',
    image: require('../assets/idea.png'),
  },
  OTHER: {
    title: 'Outro',
    image: require('../assets/thought.png'),
  },
};

export type FeedbackType = keyof typeof FeedbackTypes;
