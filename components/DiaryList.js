import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Alert } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../styles/SlideEntry.style';
import DiaryCard from './DiaryCard';

const SLIDER_1_FIRST_ITEM = 0;
const Realm = require('realm');
const authUrl = 'http://106.10.55.192:9080';

/*const journal ={
    name: 'journal',
    primaryKey: 'uuid',
    properties: {
        'title':  'string' ,
        'date': 'date' ,
        'imgs': 'images[]' ,
        'hashtags': 'string[]',
        'explanation': 'string?',
        'visibility': 'bool',
    }
}
const images ={
    name: 'images',
    primaryKey: 'uuid',
    properties: {
        'img':  'data' ,
        'date':  'date' ,
        'latitude':  'double' ,
        'logitude': 'double' ,
        'explanation':  'string?' ,
    }
}
*/

export default class DiaryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
      ENTRIES1: [ {title: 'TITLE',
                  subtitle: '#서울 #한강 #데이트',
                  illustration: 'https://i.imgur.com/UYiroysl.jpg'},],
    };
    //let users = Realm.Sync.User.all;
    //for(const key in users){
    let creds = Realm.Sync.Credentials.usernamePassword("realm-admin", "gwnucs1!", false);
    Realm.Sync.User.login(authUrl, creds).then(user => {
      // user is logged in
      // do stuff ...
      const config = user.createConfiguration({
        sync: { url: "realm://106.10.55.192:9080/~/journals",
            error: err =>  Alert.alert('error 1', 'error1')
        },
        schema: [],
      });
      Realm.open(config).then(realm => {
        
          // ...use the realm instance here
        let results = realm.objects('images');
        realm.close();
        //const result = results[0];
        //Alert.alert(result.hashtags, result.title);
        //this.setState({
        //  ENTRIES1: [this.state.ENTRIES1,{title: result.title, subtitle: result.hashtags[0], illustration: result.imgs[0].img},]
        //});
      }).catch(error => {
        // Handle the error here if something went wrong
        Alert.alert('error 2',' error2');
      });
    }).catch(error => {
      // an auth error has occurred
      Alert.alert("Alert", "Invalid ID & Password");
    });
      
  // do something with the user object.
    //}
  }

  _renderItemWithParallax({ item }, parallaxProps) {
    return (
      <DiaryCard
        data={item}
        parallax={true}
        parallaxProps={parallaxProps}
      />
    );
  }
  onScreen = 0;
  render() {
    const { slider1ActiveSlide, ENTRIES1 } = this.state;
    return (
      <View style={styles.exampleContainer}>
        <ImageBackground
          source={{ uri: ENTRIES1[slider1ActiveSlide].illustration }}
          style={{
            width: '100%',
            height: '100%',
          }}
          blurRadius={1}
        >
          <Carousel
            ref={c => this._slider1Ref = c}
            data={ENTRIES1}
            renderItem={this._renderItemWithParallax}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            hasParallaxImages={true}
            firstItem={SLIDER_1_FIRST_ITEM}
            inactiveSlideScale={0.94}
            inactiveSlideOpacity={0.7}
            containerCustomStyle={styles.slider}
            contentContainerCustomStyle={styles.sliderContentContainer}
            onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index })}
          />
          <Pagination
            dotsLength={ENTRIES1.length}
            activeDotIndex={slider1ActiveSlide}
            containerStyle={styles.paginationContainer}
            //dotColor={'rgba(0, 175, 255, 0.92)'} // blue color
            dotColor={'rgba(255, 255, 255, 0.95)'}
            dotStyle={styles.paginationDot}
            inactiveDotColor={'rgba(255, 255, 255, 0.75)'}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            carouselRef={this._slider1Ref}
            tappableDots={!!this._slider1Ref}
          />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  exampleContainer: {
    paddingVertical: 30
  },
  slider: {
    marginTop: 15,
    overflow: 'visible' // for custom animations
  },
  sliderContentContainer: {
    paddingVertical: 10 // for custom animation
  },
  paginationContainer: {
    paddingVertical: 8
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8
  }
})
