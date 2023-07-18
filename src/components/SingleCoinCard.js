import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function SingleCoinCard({data}) {
  const {data: selectedCoin} = data;
  return (
    <Card sx={{ minWidth: 275 }}>
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
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}