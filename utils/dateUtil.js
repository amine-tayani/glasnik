import moment from "moment";

// eslint-disable-next-line arrow-body-style
export const tfnow = (dt) => {
  return moment(dt).fromNow();
};

export const DateToNoun = (_date) => {
  const fromNow = moment(_date).fromNow();
  return moment(_date).calendar(null, {
    lastWeek: "[Last] dddd",
    lastDay: "[Yesterday]",
    sameDay: "[Today]",
    nextDay: "[Tomorrow]",
    nextWeek: "dddd",
    sameElse() {
      return `[${fromNow}]`;
    },
  });
};

// eslint-disable-next-line arrow-body-style
export const toHourMinuteFmt = (dt) => {
  return moment(dt).format("h:mm a");
};

// eslint-disable-next-line arrow-body-style
export const mntFormat = (dt) => {
  return moment(dt).format("MMM D [at] h:mm A");
};
