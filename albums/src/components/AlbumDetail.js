//import libraries
import React, {Component} from 'react';
import {Text, ScrollView, View, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
//prop
import Button from './Button';

const AlbumDetail = ({album}) =>{

    const {title, artist, thumbnail_image, image,url} = album;
    const {thumbnailStyle, 
        headerContentStyle,
        headerTextStyle,
        thumbnailContainerStyle,
        imageStyle
        } = styles;

    return (
        <Card>
            <CardSection>
                    <View style={thumbnailContainerStyle}>
                        <Image style={thumbnailStyle}
                         source={{uri: thumbnail_image}} />
                    </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
                <CardSection>
                 <Image style={imageStyle}  source={{uri:image}} />
                </CardSection>

                <CardSection>
                      <Button onPress={()=> Linking.openURL(url)} >
                          Buy Album
                          </Button>
                </CardSection>
        </Card>
    );

};

const styles= {

    headerContentStyle:{
        flexDirection:'column',
        justifyContent:'space-around'
    },
    thumbnailStyle:{
        height:50,
        width:50
    },
    headerTextStyle:{
        fontSize:18
    },
    thumbnailContainerStyle:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10
    },
    imageStyle:{
        height: 300,
        flex:1,
        width:null

    }
};

export default AlbumDetail;