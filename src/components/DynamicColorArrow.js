import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Box } from '@mui/system';
import { useState, useEffect } from 'react';

const DynamicColorArrow = ({value}) => {
    const [prevState, setPrevState] = useState(0);
    const [toggleIcon, setToggleIcon] = useState('up');
    const [flag, setFlag] = useState('#969696');

    useEffect(() => {
        if (value > prevState) {
            setToggleIcon('up');
            setFlag('success');
            setPrevState(value);
        } else if (value < prevState) {
            setToggleIcon('down');
            setFlag('warning');
            setPrevState(value);
        } else {
            setFlag('#969696');
        }
    },[value])
    return (
        <Box>
            {toggleIcon === 'up' 
             ? <ArrowUpwardIcon color={flag} fontSize="small"/> 
             : <ArrowDownwardIcon  color={flag} fontSize="small"/>}
        </Box>
    )
}

export default DynamicColorArrow;