import { createElement } from "react";
import { View,Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    textError: {
        color: '#f44336',
        padding: 5,
      },
});

/**
 * Returns the Erros List for React Native.
 * @param {any} props Errors . 
 */
export function ErrorList(props:any){
  const { errors } = props;
  return (
    <View style={{flexDirection:"column"}} >
        <Text>Errors</Text>
        {errors.map((error:any, i:number) => {
          return (
            <Text key={i} style={styles.textError}>
              {error.message}
            </Text>
          );
        })}
    </View>
  );
}

/**
 * Returns the Error Message for React Native.
 * @param {string} message Error Message. 
 */
export function ErrorItem(props:any){
    const { message } = props;
    return (
      <View style={{flexDirection:"column"}} >
            <Text>Error</Text>
            <Text style={styles.textError}>
                {message}
            </Text>
      </View>
    );
  }
