import React from 'react';
import logo from './logo.svg';
import './App.css';
import DashBoard from './DashBoard';
import { number } from 'prop-types';


class App extends React.Component {

  state = {
    items: [
      {
        "id": 1,
        "name": null,
        "label": null,
        "type": "Textfield"

      },
      {
        "id": 2,
        "name": null,
        "label": null,
        "type": "Textfield"

      }, {
        "id": 3,
        "name": null,
        "label": null,
        "type": "Textfield"

      },

      {
        "id": 4,
        "name": null,
        "label": null,
        "type": "DropDown",
        "values": [
          "",
          "Andhra",
          "Karnataka",
          "TamilNadu",
          "Telangana",
          "kerala"
        ]

      }

    ]
  }

  handleChangeButton =() =>{
      
    console.log(this.state)

  }

  handleFieldChange = (e, Type) => {

    let index ;
    const { items } = this.state
    if (Type == "Text") {
       index = parseInt(e.target.id);
     
    } else {
       index = parseInt(e.target.name);
      
    }
    items[index].name = e.target.value;

    // this.setState({
    //   ...items,
    //   items
    // })
    console.log(items)
   // console.log(index)
    // console.log(txtName)

  };

  render() {
    const { handleFieldChange,handleChangeButton } = this;
    const { items } = this.state;
    debugger;
    return (


      <DashBoard Data={items} Handler={handleFieldChange} btnClick={handleChangeButton}> </DashBoard>


    );
  }
}

export default App;
