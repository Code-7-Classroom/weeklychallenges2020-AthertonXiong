import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //super allows you to call functionality from a class that was extended.
    this.state = {
      newPerson: {
        name: "name",
        phone: "phone",
        dob: "dob",
        email: "email"
      },
      persons: [
        {
          name: "Alan Vang",
          phone: "704-450-1179",
          dob: "August 25,1994",
          email: "vangnalan@gmail.com"
        },
        {
          name: "Shaina Yang",
          phone: "980-450-1326",
          dob: "October 2, 1996",
          email: "shainayang@gmail.com"
        },
        {
          name: "Nathan Cha",
          phone: "704-111-1234",
          dob: "December 25, 1990",
          email: "nathancha@gmail.com"
        },
        {
          name: "Atherton Xiong",
          phone: "704-534-6611",
          dob: "November 12, 1997",
          email: "athertonxiong@gmail.com"
        }
      ]
    }
  }

  handleChange(event) {
    switch (event.target.name) {
      case "name":
        this.setState({
          ...this.state,
          newPerson: {
            ...this.state.newPerson,
            name: event.target.value,
          }
        })
        break;
      case "phone":
        this.setState({
          ...this.state,
          newPerson: {
            ...this.state.newPerson,
            phone: event.target.value,
          }
        })
        break;

      case "email":
        this.setState({
          ...this.state,
          newPerson: {
            ...this.state.newPerson,
            email: event.target.value,
          }
        })
        break;
      case "dob":
        this.setState({
          ...this.state,
          newPerson: {
            ...this.state.newPerson,
            dob: event.target.value,
          }
        })
        break;

    }
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      persons: [...this.state.persons, this.state.newPerson],
      newPerson: {
        name: "name",
        phone: "phone",
        dob: "dob",
        email: "email"
      }
    })

  }

  render() {
    return (
      <div className="App">
        {this.state.persons.map(person => {
          // map works like for Each.
          return (
            <BasicInfo phone={person.phone} name={person.name} dob={person.dob} email={person.email} />
          )
        })}
        <form onSubmit={this.handleSubmit}>
          <label>
            Name: 
          <input name="name" type="text" value={this.state.value} onChange={this.handleChange} />
          phone:
          <input name="phone" type="text" value={this.state.value} onChange={this.handleChange} />
          email:
          <input name="email" type="text" value={this.state.value} onChange={this.handleChange} />
          dob:
          <input name="dob" type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}


export default App;

// *********Very Easy********
// render() {
//   return (
//     <div>
//       <p>Name: Alan Vang</p>
//       <p>Number: 704-000-9191(Hot line number)</p>
//       <p>Date Of Birth: 08/25/1994</p>
//     </div>
//   )
// };

// **********Easy**************
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       person: {
//       }
//     }
//   }

// ********Medium*********
// import BasicInfo from './person';
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       person: {
//         name: "Alan Vang",
//         phone: "704-450-1179",
//         dob: "August 25, 1994",
//         email: "vangnalan@gmail.com"
//       }
//     }
//   }
//   render() {
//     return (
//       <div className="App">
//         <BasicInfo name={this.state.person.name} phone={this.state.person.phone} dob={this.state.person.dob} email={this.state.person.dob}></BasicInfo>
//       </div>
//     )
//   }
// }

// *********Hard********* 
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       persons: [
//         {
//           name: "Alan Vang",
//           phone: "704-450-1179",
//           dob: "August 25,1994",
//           email: "vangnalan@gmail.com"
//         },
//         {
//           name: "Shaina Yang",
//           phone: "980-450-1326",
//           dob: "October 2, 1996",
//           email: "shainayang@gmail.com"
//         },
//         {
//           name: "Nathan Cha",
//           phone: "704-111-1234",
//           dob: "December 25, 1990",
//           email: "nathancha@gmail.com"
//         },
//         {
//           name: "Atherton Xiong",
//           phone: "704-534-6611",
//           dob: "November 12, 1997",
//           email: "athertonxiong@gmail.com"
//         }
//       ]
//     }
//   }

//   render() {
//     return (
//       <div className="App">
//         {this.state.persons.map(person => {
//           return (
//             <BasicInfo name={person.name} phone={person.phone} dob={person.dob} email={person.email} />
//           )
//         })}
//       </div>
//     );
//   }
// }


// ****** Extra Challenge done with Tech Mentor ******** lets you type in a persons Basicinfo.
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     //super allows you to call functionality from a class that was extended.
//     this.state = {
//       newPerson: {
//         name: "name",
//         phone: "phone",
//         dob: "dob",
//         email: "email"
//       },
//       persons: [
//         {
//           name: "Alan Vang",
//           phone: "704-450-1179",
//           dob: "August 25,1994",
//           email: "vangnalan@gmail.com"
//         },
//         {
//           name: "Shaina Yang",
//           phone: "980-450-1326",
//           dob: "October 2, 1996",
//           email: "shainayang@gmail.com"
//         },
//         {
//           name: "Nathan Cha",
//           phone: "704-111-1234",
//           dob: "December 25, 1990",
//           email: "nathancha@gmail.com"
//         },
//         {
//           name: "Atherton Xiong",
//           phone: "704-534-6611",
//           dob: "November 12, 1997",
//           email: "athertonxiong@gmail.com"
//         }
//       ]
//     }
//   }

//   handleChange(event) {
//     switch (event.target.name) {
//       case "name":
//         this.setState({
//           ...this.state,
//           newPerson: {
//             ...this.state.newPerson,
//             name: event.target.value,
//           }
//         })
//         break;
//       case "phone":
//         this.setState({
//           ...this.state,
//           newPerson: {
//             ...this.state.newPerson,
//             phone: event.target.value,
//           }
//         })
//         break;

//       case "email":
//         this.setState({
//           ...this.state,
//           newPerson: {
//             ...this.state.newPerson,
//             email: event.target.value,
//           }
//         })
//         break;
//       case "dob":
//         this.setState({
//           ...this.state,
//           newPerson: {
//             ...this.state.newPerson,
//             dob: event.target.value,
//           }
//         })
//         break;

//     }
//   }
//   handleSubmit(event) {
//     event.preventDefault();
//     this.setState({
//       persons: [...this.state.persons, this.state.newPerson],
//       newPerson: {
//         name: "name",
//         phone: "phone",
//         dob: "dob",
//         email: "email"
//       }
//     })

//   }

//   render() {
//     return (
//       <div className="App">
//         {this.state.persons.map(person => {
//           // map works like for Each.
//           return (
//             <BasicInfo phone={person.phone} name={person.name} dob={person.dob} email={person.email} />
//           )
//         })}
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Name: 
//           <input name="name" type="text" value={this.state.value} onChange={this.handleChange} />
//           phone:
//           <input name="phone" type="text" value={this.state.value} onChange={this.handleChange} />
//           email:
//           <input name="email" type="text" value={this.state.value} onChange={this.handleChange} />
//           dob:
//           <input name="dob" type="text" value={this.state.value} onChange={this.handleChange} />
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//       </div>
//     );
//   }
// }
