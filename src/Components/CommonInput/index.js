import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});

class OutlinedTextFields extends React.Component {

    


  render() {
    const { classes,handle,indexData } = this.props;
console.log(handle)
debugger
console.log(indexData)
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id={indexData}
          label="Email"
          className={classes.textField}
          type="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
          onChange={e => {
            handle(e,"Text");}}
       
        />
      </form>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OutlinedTextFields);
