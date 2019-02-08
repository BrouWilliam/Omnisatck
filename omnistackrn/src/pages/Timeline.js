import React, { Component } from 'react';
import api from '../services/api';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Timeline extends Component {
    static navigationOptions = {
        title: 'Inicio',
        headerRight: (
            <TouchableOpacity onPress={() => {} }>
                <Icon style={{ marginRight: 25 }} name="add-circle-outline"size={24} color="#4BB0EE"></Icon>
            </TouchableOpacity>
        ),
    };

    state = {
        tweets: [],
    };

    async componentDidMount() {
        try {
            const response = api.get('tweets');
            this.setState({ tweets: response.data });
          } catch (err) {
            console.log(err)
          }
    } 

    render(){
        return (
            <View style={styles.container}>
                {this.state.tweets.map(tweet => <Text>{tweet.author}</Text>)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFF"
    }
  });