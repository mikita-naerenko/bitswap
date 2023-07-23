import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PurchaseButton from './buttons/PurchaseButton';
import ButtonAddToFavorites from './buttons/ButtonAddToFavorites';


export default function SingleCoinCard({data}) {
  const {data: selectedCoin} = data;
  return (
    <Card sx={{ width: 475, mt: 5 }} style={{position: 'relative'}}>
      <Box style={{position: 'absolute', top: '0', right: '0'}}>
        <PurchaseButton coin={selectedCoin}/>
        <ButtonAddToFavorites id={selectedCoin.id}/>
      </Box>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Selected coin
        </Typography>
        <Typography variant="h5" component="div">
          {selectedCoin.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Price USD: {Number(selectedCoin.priceUsd).toFixed(5)}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Market cap: {Number(selectedCoin.marketCapUsd).toFixed(5)}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Volume (24h): {Number(selectedCoin.volumeUsd24Hr).toFixed(5)}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Supply: {Number(selectedCoin.supply).toFixed(5)}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Max. supply: {Number(selectedCoin.maxSupply).toFixed(5)}
        </Typography>
        <Typography variant="body2">
          
        </Typography>
      </CardContent>
    </Card>
  );
}