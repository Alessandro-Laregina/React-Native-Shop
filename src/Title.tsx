import React from "react"
import { View, Text, StyleSheet } from 'react-native';

interface Props {
    title: string
}

const Title = (props: Props) => {

    const { title } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 40,
        textTransform: 'uppercase'
    }
})


export default Title;