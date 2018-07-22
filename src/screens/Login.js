import React, { Component } from 'react';
import {
    Text,
    Button, 
    View, 
    Image,
    StyleSheet,
    ActivityIndicator,
    ListView

} from 'react-native';

import {Navigation} from 'react-native-navigation';
import startTabs from './TabScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

class Login extends Component {
   
    constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.movies),
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }


    render() {
        if (this.state.isLoading) {
            return (
              <View style={{flex: 1, paddingTop: 20}}>
                <ActivityIndicator />
              </View>
            );
          }
      
          return (
            <View style={{flex: 1, paddingTop: 20}}>
              <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <Text>{rowData.title}, {rowData.releaseYear}</Text>}
              />
            </View>
          );
    }
}

 
const styles = StyleSheet.create(
    {
     
      Container: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
      }
     
    });

export default Login;