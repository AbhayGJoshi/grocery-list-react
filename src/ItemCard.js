import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ItemCard = (props) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
          lives in <h3> {props.city}</h3>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={props.deleteFunction}>
          ❌
        </Button>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
