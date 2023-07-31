import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Box } from '@mui/system';
import { useState, useEffect } from 'react';
import { UP_ICON, DOWN_ICON, ICON_COLORS } from './constants';
import { updateIconAndColor } from './helper';

const DynamicColorArrow = ({value}) => {
    const [prevState, setPrevState] = useState(0);
    const [toggleIcon, setToggleIcon] = useState(UP_ICON);
    const [color, setColor] = useState(ICON_COLORS.neutral);

    useEffect(() => {
        updateIconAndColor(value, prevState, setToggleIcon, setColor, setPrevState);
      }, [value]);

    return (
        <Box>
            {toggleIcon === UP_ICON 
             ? <ArrowUpwardIcon color={color} fontSize="small"/> 
             : <ArrowDownwardIcon  color={color} fontSize="small"/>}
        </Box>
    )
}

export default DynamicColorArrow;