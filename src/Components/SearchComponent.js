import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight } from 'react-native'; 

class SearchComponent extends Component {
    comstructor(props) {
        super(props);
        this.state = {
            username: '',
            error: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
            username: e.nativeEvent.txt
        });
    }
    handleSubmit(e) {
        console.log(this.state.username);
    }

    render() {
        return (
            <View style = {styles.main}>
                <Text style = {styles.title}>
                    Search For github area
                </Text>
                <TextInput style = {styles.searchInput}/>
                    <TouchableHighlight 
                        style = {styles.button} 
                        underlayColor = "white" 
                        onPress = {this.handleSubmit}>
                        <Text style = {styles.buttonText}>Button</Text>
                    </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 30,
        marginTop: 65,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: "rgb(146,168,209)"
    },
    title: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center'
    },
    searchInput: {
        height: 50,
        padding: 4,
        marginRight: 5,
        fontSize: 23,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 8,
        color: 'white'
    },
    button: {
        height: 45,
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 8,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: '#111',
        alignSelf: 'center'
    }
});

export default SearchComponent;