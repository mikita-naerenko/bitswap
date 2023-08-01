import { Typography } from "@mui/material";







const CompareWithBalance = ({user, calculatedPrice}) => {
    return (
        <Typography height={'100%'}
        sx={{
            bgcolor: 'primary.light',
            borderRadius: 2 ,
            display: 'flex', justifyContent: 'center', alignItems: 'center', 
        }}
        style={Number(user.balance)< calculatedPrice ? {backgroundColor: '#f6685e'} : null}
        >
        {
            Number(user.balance) > calculatedPrice 
            ? `In USD: ${calculatedPrice ? calculatedPrice.toFixed(2) : "Enter amount"}`
            : 'insufficient funds'
        }
</Typography>
    )
}

export default CompareWithBalance;