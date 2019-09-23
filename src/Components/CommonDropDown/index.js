import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { withStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 150
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

class NativeSelects extends React.Component {
  state = {
    
    name: null,
    labelWidth: 0,
    stateData: [
      "",
      "Andhra",
      "Karnataka",
      "TamilNadu",
      "Telangana",
      "kerala"

    ]
  };

 
  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
    });
  }

 

  render() {
    const { classes,DropDownData ,indexData , handle} = this.props;
    console.log(indexData)
    console.log(DropDownData)
console.log(handle)
    return (
      <div className={classes.root}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-age-native-simple"
          >
            Select State
          </InputLabel>
          <Select
          id={indexData}
          
            value={this.state.age}
            onChange={e => {
              handle(e,"DropDown");}}
            input={
              <OutlinedInput
                name={indexData}
                labelWidth={this.state.labelWidth}
                id={indexData}
              />
            }
          >
            {DropDownData.map((data, index) => (
           
            <option value={data}>{data}</option>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  }
}

NativeSelects.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NativeSelects);
