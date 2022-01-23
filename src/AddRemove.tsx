import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';

interface Props {
    quantity: number,
    // onAddPress: () => void,
    // onRemovePress: () => void
}

const AddRemove = (props: Props) => {
    const [myValue, setMyValue] = useState(0);

    const { quantity } = props;

    const add = () => {
        if (quantity >= myValue + 1) setMyValue(myValue + 1);
    }
    const remove = () => {
        if (myValue > 0) setMyValue(myValue - 1);
    }

    const reset = () => {
        if (myValue > 0) setMyValue(0);
    }

    const trash = () => myValue > 0 ?
        (<TouchableOpacity style={styles.button} onPress={reset}>
            <Image style={styles.trash} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1632/1632602.png' }} />
        </TouchableOpacity>) : (<></>)

    return (
        <View style={styles.container}>
            <TextInput style={styles.value} editable={false}>{myValue}</TextInput>
            <TouchableOpacity style={styles.button} onPress={add}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={remove}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            {trash()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 5
    },
    value: {
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 5,
        minWidth: 30,
        textAlign: 'center'
    },
    button: {
        marginLeft: 5,
        backgroundColor: '#ffff99',
        borderRadius: 3,
        padding: 3,
        minWidth: 30,
        justifyContent: 'center'
    },
    buttonText: {
        color: '#333',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '600'
    },
    trash: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        alignSelf: 'center'
    }
});

export default AddRemove;