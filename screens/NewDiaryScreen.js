import React from 'react';
import { TouchableHighlight,
  PixelRatio,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TextInput } from 'react-native';
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
    key:0,
    item:[]
  };
  constructor(props) {
    super(props);
    this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
  }
  hadleSetText = (key, text) => {
    const { item } = this.state;
    this.setState({
      item: this.state.item.map(
        info => key === info.key
          ? { ...info, text: text } // 새 객체를 만들어서 기존의 값과 전달받은 data 을 덮어씀
          : info // 기존의 값을 그대로 유지
      )
    })
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
        console.warn('OK'+response.timestamp);
        this.setState({
          item:this.state.item.concat({
            key:this.state.key++,
            avatarSource: source,
            latitude: response.latitude,
            longitude: response.longitude,
            timestamp: response.timestamp
          })
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
        <View  style={{flex:3}}>
          <ScrollView style={{alignSelf: "stretch"}} showsVerticalScrollIndicator={true}>
            <View style={styles.inputContainer}>
              <TextInput style={styles.inputs}
                placeholder="제목"
                UnderlineColorAndroid='transparent'
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.inputs}
                placeholder="테마 설정 #서울 #뉴욕 #데이트 ..."
                UnderlineColorAndroid='transparent'
              />
            </View>
            <ImageList item={this.state.item} hadleSetText={this.handleSetText}/>
          </ScrollView>
        </View>
        <View style={{ position: 'absolute', bottom:0, right:0}}>
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
  inputContainer: {
      borderBottomColor: '#FFFFFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
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
