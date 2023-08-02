import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import PurchaseButton from '../buttons/PurchaseButton';
import ButtonAddToFavorites from '../buttons/ButtonAddToFavorites';
import SingleCardContent from './components/SingleCardContent';
import ButtonAddToWatchList from '../buttonAddToWatchList/ButtonAddToWatchList';

const SingleCoinCard = ({data}) => {
  return (
    <Card sx={{ width: 475, mt: 5 }} style={{position: 'relative'}}>
      <CardActions style={{position: 'absolute', top: '0', right: '0'}}>
        <PurchaseButton coin={data}/>
        <ButtonAddToFavorites id={data.id}/>
        <ButtonAddToWatchList coin={data} />
      </CardActions>
      <SingleCardContent data={data}/>
    </Card>
  );
}

export default SingleCoinCard;