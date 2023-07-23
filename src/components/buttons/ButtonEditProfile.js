import ModeEditIcon from '@mui/icons-material/ModeEdit';
import IconButton from '@mui/material/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { setModalEditProfileDisplayed } from '../../redux/ModalStateSlice';;

const ButtonEditProfile = () => {
    const dispatch = useDispatch();
    const { modalEditProfileDisplayed } = useSelector(state => state.modalState)

    const handleEditProfileButtonClick = () => {
        dispatch(setModalEditProfileDisplayed(!modalEditProfileDisplayed))
      }

    return (
        <IconButton style={{position: 'absolute', top: '0', right: '0'}}
                    variant='contained'
                    onClick={handleEditProfileButtonClick}
                    >
                        <ModeEditIcon/>
        </IconButton>
    )
}

export default ButtonEditProfile;