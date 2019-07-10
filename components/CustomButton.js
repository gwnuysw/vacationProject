import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
} from 'react-native';

export default class Button extends React.Component {
    static defaultProps = {
        label : 'untitled',
        buttonColor : '#000',
        labelColor : '#fff',
        onPress: () => null,
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity style={[
                styles.button,
                {backgroundColor : this.props.buttonColor}
            ]}
            onPress={this.props.onPress}>
                <Text style={[
                    styles.label,
                    {color : this.props.labelColor}
                ]}>
                {this.props.label}
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button : {
        flex : 1,
        alignItems : 'center',
        alignSelf : 'center',
        justifyContent : 'center',
        marginTop : 10,
        borderRadius : 5,
        width : '75%',
        padding : 10
    },
    label : {
        fontSize : 15,
    },
})