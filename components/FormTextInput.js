import React from "react";
import { StyleSheet, TextInput, TextInputProps} from "react-native";
import colors from "../constants/Colors";

type Props = TextInputProps;

class FormTextInput extends React.Component<Props> {
    render(){
        const { style } = this.props;

        return (
            <TextInput
                selectionColor={colors.DODGER_BLUE}
                style={[styles.textInput, style]}
            />
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        borderColor: colors.SILVER,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginBottom: 20
    }
});

export default FormTextInput;