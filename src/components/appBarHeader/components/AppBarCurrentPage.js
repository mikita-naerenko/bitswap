import Typography from '@mui/material/Typography';





const AppBarCurrentPage = ({currentPage}) => {


    return (
        <Typography variant="h6" component="div" sx={{ flexGrow: 0, textTransform: 'capitalize', width: 100 }}>
            {currentPage}
        </Typography>
    )

}

export default AppBarCurrentPage;