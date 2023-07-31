import { UP_ICON, DOWN_ICON, ICON_COLORS } from './constants';

export const updateIconAndColor = (value, prevState, setToggleIcon, setColor, setPrevState) => {
    if (value > prevState) {
      setToggleIcon(UP_ICON);
      setColor(ICON_COLORS.green);
      setPrevState(value);
    } else if (value < prevState) {
      setToggleIcon(DOWN_ICON);
      setColor(ICON_COLORS.red);
      setPrevState(value);
    } else {
      setColor(ICON_COLORS.neutral);
    }
  };