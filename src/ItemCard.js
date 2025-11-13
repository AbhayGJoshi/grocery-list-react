// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";

// const ItemCard = (props) => {
//   return (
//     <Card
//       sx={{
//         minWidth: "19%",
//         minHeight: "10%",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "space-between",
//         flexWrap: "wrap",
//       }}
//     >
//       <CardContent
//         sx={{
//           textAlign: "center",
//           display: "flex",
//           flexDirection: "row",
//           alignItems: "center",
//           justifyContent: "space-between",
//           flexWrap: "wrap",
//         }}
//       >
//         <Typography gutterBottom variant="h6" component="div">
//           {props.name}
//         </Typography>
//         <Button size="small" onClick={props.deleteFunction}>
//           ❌
//         </Button>
//       </CardContent>

//       <CardActions sx={{ justifyContent: "center" }}>
//         <Typography
//           variant="h6"
//           sx={{
//             color: "text.secondary",
//             textAlign: "start",
//             marginLeft: "16px",
//           }}
//         >
//           lives in <span style={{ fontWeight: "bold" }}>{props.city}</span>
//         </Typography>
//       </CardActions>
//     </Card>
//   );
// };

// export default ItemCard;

import {
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ItemCard = ({ name, city, deleteFunction }) => {
  return (
    <Card
      sx={{
        flex: "1 1 250px", // responsive base width
        maxWidth: 280, // limit max width
        minWidth: 220, // minimum width for small screens
        height: 180, // fixed height for uniformity
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: 3,
        boxShadow: 3,
        bgcolor: "#fff",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 6,
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, color: "primary.main" }}
          >
            {name}
          </Typography>
          <IconButton
            color="error"
            size="small"
            onClick={deleteFunction}
            aria-label="delete"
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Stack>

        <Typography
          variant="body1"
          sx={{
            mt: 2,
            color: "text.secondary",
            textAlign: "center",
          }}
        >
          Lives in <b>{city}</b>
        </Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: "center", pb: 1 }}>
        {/* Optional: future actions */}
      </CardActions>
    </Card>
  );
};

export default ItemCard;
