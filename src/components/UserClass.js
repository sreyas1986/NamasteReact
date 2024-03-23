import React from "react"
import UserContext from "../util/UserContext";
class UserClass extends React.Component {
constructor(props){
    super(props);
    this.state ={
        count : 0,
        count2:10,
        userinfo:{
            name:"Dummy",
            location:"India",
            avatar_url:""
        }
    };
}
async componentDidMount(){
    const data= await fetch("https://api.github.com/users/sreyas1986");
    const jsonusers = await data.json();
    console.log(jsonusers);
    this.setState({
        userinfo:jsonusers,
    })
}
    render(){
       const{name,location,avatar_url} = this.state.userinfo;
        return(
            <div className="card">
                <h3>Count:{this.state.count}</h3>
                <h3>Count:{this.state.count2}</h3>
                <button onClick={() => {
                        this.setState({
                            count: this.state.count+1,
                        })
                }}>Count+</button>
                    <img src={avatar_url} />
                    <h4>Name:{name}</h4>
                    <h4>Location:{this.state.userinfo.location}</h4>
                    <div>
                        Logged in user : <UserContext.Consumer>{(data)=> data.loggedInUser}</UserContext.Consumer>
                    </div>

            </div>)
    }
}
export default UserClass
