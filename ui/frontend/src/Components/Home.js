import React from 'react';

class Home extends Component{
    logoutFunction(){

    }

    render() {
        return (
            <div>
                <input type="submit" onClick={this.logoutFunction()} value="Logout"/>
            </div>
        );
    }

}
export default Home;