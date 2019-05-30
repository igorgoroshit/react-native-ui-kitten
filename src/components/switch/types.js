export const RkSwitchTypes = (theme) => ({
  _base: {
    component: { },
  },
  primary: {
    trackColor: {true:theme.colors.button.primary,false:'transparent'},
  },
  warning: {
    trackColor: {true:theme.colors.button.warning,false:'transparent'},
  },
  danger: {
    trackColor: {true:theme.colors.button.danger,false:'transparent'},
  },
  success: {
    trackColor: {true:theme.colors.button.success,false:'transparent'},
  },
  info: {
    trackColor: {true:theme.colors.button.info,false:'transparent'},
  },
});
