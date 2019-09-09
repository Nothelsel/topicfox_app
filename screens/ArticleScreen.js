import * as rssParser from 'react-native-rss-parser';
import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';




class ArticleScreen extends Component {
    render() {
        return (
            <View>
                 <View style={styles.background}>
                    <Text style={styles.title}>Les artcilzpdkjhazpkdaizdpaizdpoijazpd</Text>
                 </View>
                <View style={styles.background}>
                
                </View>
            </View>
        );
    }
}

export default ArticleScreen;






const styles = StyleSheet.create({
    title:{
        marginBottom: 20,
        textAlign: "center",
    },
    background:{
        flex: 1,
        backgroundColor: "#1E90FF"
    }
});