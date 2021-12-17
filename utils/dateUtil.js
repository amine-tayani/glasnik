import moment from "moment";

// eslint-disable-next-line arrow-body-style
export const tfnow = (dt) => {
  return moment(dt).fromNow();
};

export const DateToNoun = (_date) => {
  var fromNow = moment(_date).fromNow();
  return moment(_date).calendar(null, {
    lastWeek: "[Last] dddd",
    lastDay: "[Yesterday]",
    sameDay: "[Today]",
    nextDay: "[Tomorrow]",
    nextWeek: "dddd",
    sameElse: function () {
      return "[" + fromNow + "]";
    },
  });
};

export const toHourMinuteFmt = (dt) => {
  return moment(dt).format("h:mm a");
};
