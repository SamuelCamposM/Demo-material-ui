import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {

  Card,
  CardContent,
  CardActions,
  Collapse,
  
  IconButton,
  Typography,
} from "@material-ui/core";
import { ExpandMore,  Folder } from "@material-ui/icons";
import clsx from "clsx";

import { red } from "@material-ui/core/colors";

import { Divider } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    flexGrow:1,
    marginLeft: "20px",
    marginRight: "20px"
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  flex: {
    display: "flex",
    width: "100%",
    justifyContent:"space-around"
  },
  flexGrow: {
    flexGrow: 1,
  },
  center :{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    fontSize:"30px",
    
    height:"100px"
  }
}));

export default function Tarjeta() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (

    <div  className={classes.flex} >
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.flex}>
          <div className={classes.flexGrow}>
            <Typography variant="h2" color="textSecondary" component="h3">
              <div className={classes.center}>
                <Folder />
              </div>
            </Typography>
          </div>
          <div>
            <Typography variant="h5" color="textSecondary" component="p">
              Used Space
            </Typography>
            <Typography variant="h3" color="textSecondary" component="p">
              49 / 50
            </Typography>
            <Typography variant="h5" color="textSecondary" component="p">
              GB
            </Typography>
          </div>
        </div>
      </CardContent>
      <Divider />
      
      <CardActions disableSpacing>

        <Typography variant="h6" color="initial">
          Get more space
        </Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMore />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>


    <Card className={classes.root}>
      <CardContent>
        <div className={classes.flex}>
          <div className={classes.flexGrow}>
            <Typography variant="h2" color="textSecondary" component="h3">
              <div className={classes.center}>
                <Folder />
              </div>
            </Typography>
          </div>
          <div>
            <Typography variant="h5" color="textSecondary" component="p">
              Used Space
            </Typography>
            <Typography variant="h3" color="textSecondary" component="p">
              49 / 50
            </Typography>
            <Typography variant="h5" color="textSecondary" component="p">
              GB
            </Typography>
          </div>
        </div>
      </CardContent>
      <Divider />
      
      <CardActions disableSpacing>

        <Typography variant="h6" color="initial">
          Get more space
        </Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMore />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>


    <Card className={classes.root}>
      <CardContent>
        <div className={classes.flex}>
          <div className={classes.flexGrow}>
            <Typography variant="h2" color="textSecondary" component="h3">
              <div className={classes.center}>
                <Folder />
              </div>
            </Typography>
          </div>
          <div>
            <Typography variant="h5" color="textSecondary" component="p">
              Used Space
            </Typography>
            <Typography variant="h3" color="textSecondary" component="p">
              49 / 50
            </Typography>
            <Typography variant="h5" color="textSecondary" component="p">
              GB
            </Typography>
          </div>
        </div>
      </CardContent>
      <Divider />
      
      <CardActions disableSpacing>

        <Typography variant="h6" color="initial">
          Get more space
        </Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMore />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>




    <Card className={classes.root}>
      <CardContent>
        <div className={classes.flex}>
          <div className={classes.flexGrow}>
            <Typography variant="h2" color="textSecondary" component="h3">
              <div className={classes.center}>
                <Folder />
              </div>
            </Typography>
          </div>
          <div>
            <Typography variant="h5" color="textSecondary" component="p">
              Used Space
            </Typography>
            <Typography variant="h3" color="textSecondary" component="p">
              49 / 50
            </Typography>
            <Typography variant="h5" color="textSecondary" component="p">
              GB
            </Typography>
          </div>
        </div>
      </CardContent>
      <Divider />
      
      <CardActions disableSpacing>

        <Typography variant="h6" color="initial">
          Get more space
        </Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMore />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
  );
}
