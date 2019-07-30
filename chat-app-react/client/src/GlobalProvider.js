import React, {Component} from 'react';
import axios from 'axios';
const chatAxios = axios.create();

chatAxios.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

const { Provider, Consumer } = React.createContext();

class GlobalProvider extends Component {
    constructor() {
        super()
        this.state = {
            conversations: [],
            user: JSON.parse(localStorage.getItem("user")) || {},
            token: localStorage.getItem("token") || ""
        }
    }

    componentDidMount() {
        this.getConversations()
    }
    
    signup = userInfo => {
         return chatAxios.post("/auth/signup", userInfo)
            .then(response => {
                const { user, token } = response.data
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                this.setState({
                    user,
                    token
                });
                return response;
        });   
    }

    login = credentials => {
        return chatAxios.post("/auth/login", credentials)
        .then(response => {
            const { token, user } = response.data;
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            this.setState({
                user,
                token
            });
            
            this.getConversations();
            return response;
        })
    }

    getConversations = () => {
        return chatAxios.get("/api/chat")
            .then(response => {
                this.setState({ conversations: response.data });
                return response;
            })
    }
    
    logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        this.setState({
            conversations: [],
            user: {},
            token: ""
        })
    }
    
    render() {
        return (
            <Provider
                value={{
                    ...this.state,
                    signup: this.signup,
                    login: this.login, 
                    logout: this.logout,
                    getConversations: this.getConversations,
                }}
            >
                {this.props.children}
            </Provider>
        )
    }
}
 
export default GlobalProvider;

export const withProvider = Component => props => (
    <Consumer>
        {value => <Component {...value} {...props} /> }
    </Consumer>
)