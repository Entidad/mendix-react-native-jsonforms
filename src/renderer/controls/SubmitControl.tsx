import { createElement } from 'react'
import { StyleSheet, View, Button } from "react-native";

const styles = StyleSheet.create({
    SubmitContainer: {
        marginLeft: 12,
        marginRight: 12,
        justifyContent: 'center',
        marginHorizontal: 16
    }
});

export function SubmitControl(props:any){    
    return (
        <View style={styles.SubmitContainer}>
            <Button
                color="#000"
                title="Submit"
                onPress={props.onPress}
            />
        </View>   
    )
}
