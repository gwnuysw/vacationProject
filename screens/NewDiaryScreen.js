import React from 'react';
import { TouchableHighlight,
  PixelRatio,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  ScrollView} from 'react-native';
import { Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Text } from 'native-base';
import ImagePicker from 'react-native-image-picker';
import addicon from '../assets/images/addicon.png';
import ImageList from '../components/ImageList';
export default class NewDiaryScreen extends React.Component {
  state = {
    avatarSource: []
  };
  constructor(props) {
    super(props);
    this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
  }
  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = {uri: response.uri};

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        console.warn('OK'+response.latitude);
        console.warn('OK'+response.longitude);
        this.setState({
          avatarSource: this.state.avatarSource.concat(source)
        });
      }
    });
  }

  render(){
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <TouchableHighlight onPress={() => this.props.navigation.navigate("Main")}>
                <Icon name='arrow-back' />
              </TouchableHighlight>
            </Button>
          </Left>
          <Body>
            <Title>New Diary</Title>
          </Body>
          <Right>
            <Button transparent>
              <Text>
                등록
              </Text>
            </Button>
          </Right>
        </Header>
        <View   style={{flex:2, backgroundColor: 'green'}} >
        </View>
        <View style={styles.container} >
          <ScrollView style={{alignSelf: "stretch"}} showsVerticalScrollIndicator={true}>
            <ImageList avatarSource={this.state.avatarSource}/>
          </ScrollView>
        </View>
        <View style={{ position: 'absolute', bottom:0, right:0}}>
          <TextInput style={styles.inputs}
            placeholder="제목"
            UnderlineColorAndroid='transparent'
          />
          <TextInput style={styles.inputs}
            placeholder="테마 설정"
            UnderlineColorAndroid='transparent'
          />
          <TouchableHighlight onPress={this.selectPhotoTapped}>
            <Image
             style={styles.addIcon}
             source={addicon}/>
          </TouchableHighlight>
        </View>
      </Container>

    );
  }
}
const styles = StyleSheet.create({
  addIcon:{
    width:50,
    height:50
  },
  container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  avatar: {
    width: 250,
    height: 250,
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  }
})
