import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



const SingleCardContent = ({data}) => {
    return (
        <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Selected coin
                </Typography>
                <Typography variant="h5" component="div">
                    {data.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Price USD: {Number(data.priceUsd).toFixed(5)}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Market cap: {Number(data.marketCapUsd).toFixed(5)}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Volume (24h): {Number(data.volumeUsd24Hr).toFixed(5)}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Supply: {Number(data.supply).toFixed(5)}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Max. supply: {Number(data.maxSupply).toFixed(5)}
                </Typography>
      </CardContent>
    )
}


export default SingleCardContent;