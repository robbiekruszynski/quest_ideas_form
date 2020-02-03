import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import imgHeader from "./mindBlast.png";
const useStyles = makeStyles({
  card: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "100%",
    minHeight: "400px"
  },
  title: {
    fontSize: 60
  },
  pos: {
    marginBottom: 12
  },
  body: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "100%",
    height: "100%",
    border: "1px solid blue"
  },
  form: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "100%",
    height: "100%",
    border: "1px solid purple"
  },
  header: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "100%",
    border: "3px solid blue"
  }
});

export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
    <div>
      <Card>
        <CardActionArea>
          <CardMedia alt="Quest Header" height="140" title="Quest Header" />
          <div className={classes.body}>
            <img src={imgHeader} />
          </div>
          <CardContent>
            <Typography gutterBottom variant="h3" component="h3">
              HELP US CREATE A QUEST!
            </Typography>
            <Typography variant="body2" color="primary" component="p">
              Tell us what you think our next quest within EthQuest should be!
              You'll be credited as a creator if selected!
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

{
  /* <Card className={classes.form}>
<form>
  <div>
    <TextField
      required
      id="standard-required"
      label="Required"
      defaultValue="Hello World"
    />
    <TextField
      id="standard-search"
      label="Search field"
      type="search"
    />
  </div>
  <div></div>
</form>
</Card> */
}
