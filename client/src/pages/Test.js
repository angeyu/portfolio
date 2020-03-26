import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import "./style.css";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function GroupOrientation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div class="center">
        <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical outlined primary button group"
      >
        <Button>ABOUT</Button>
        <Button>PORTFOLIO</Button>
        <Button>CONTACT</Button>
        </ButtonGroup>
        </div>
      
    </div>
  );
}
