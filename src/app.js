import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import  LoginForm  from './components/LoginForm';




class App extends Component {
state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCEFANZ88fmgBEPWuCfABLzdzRhAqEGCu4",
            authDomain: "authentication-29e5e.firebaseapp.com",
            databaseURL: "https://authentication-29e5e.firebaseio.com",
            projectId: "authentication-29e5e",
            storageBucket: "authentication-29e5e.appspot.com",
            messagingSenderId: "787425012179"
          });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false  });
                }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                <Button onPress={() => firebase.auth().signOut() }>
                    Log Out
                </Button>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />
        }     
    }

    render() {
        return(
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>

        );
    }
}

export default App;