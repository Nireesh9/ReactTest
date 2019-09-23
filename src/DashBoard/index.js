import React from 'react'
import CommonInput from '../Components/CommonInput/index'
import CommonDropDown from '../Components/CommonDropDown/index'
class dashBoard extends React.Component{
    state = 
    {
        "Name" :null,
        "Type" : null
    }


    // handleFieldChange = (e, Type) => {
    //     let txtName = e.target.value;
    //   console.log(txtName)
    //     this.setState({
    //         Name: txtName,
    //       Type: Type
    //     });
    //   };

    //   handleChangeButton =() =>{
      
    //     console.log(this.state)

    //   }

    render() {
        let type = "Textfield";
        const { Data, Handler, btnClick } = this.props;
        console.log(btnClick)
        debugger;
        console.log(Data);
        let SampleArry = [];
        let indexData;
        let count = Data.length;
        for (let i = 0; i < count; i++) {

            if (Data[i].type == "Textfield") {
                SampleArry.push("Textfield")
            } else {
                SampleArry.push("DropDown")
            }

        }

        console.log(SampleArry)

        return (
            <div>


{SampleArry.map((data, index) => (

   
           
    ( data == "Textfield")? <CommonInput handle ={Handler} indexData = {index} />:<CommonDropDown handle ={Handler} indexData = {index} DropDownData = {Data[index].values}></CommonDropDown>
    ))}

                {/* {( type == "Textfield")? <CommonInput  onChange={e => {
           this.handleFieldChange(e, "textField");
           }}/>:""}
              
               <CommonDropDown DropDownData = {Data[1].values}></CommonDropDown> */}
 
               <button onClick = { btnClick }>Submit</button>
            </div>
            );
    }
}
export default dashBoard;