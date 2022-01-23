import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Data } from "../list.mock";
import AddRemove from "./AddRemove";

interface Props {
    item: Data
}

const Card = (props: Props) => {

    const { name, price, quantity, avail, uri } = props.item;

    return (
        <View style={[styles.containerCard, styles.shadow, !avail && styles.notAvail]} pointerEvents={!avail ? 'none' : 'auto'}>
            {/* <TouchableOpacity> */}
            <View style={{ justifyContent: 'space-between' }}>
                <Text style={[styles.text, styles.bold, styles.title]}>{name}</Text>
                <Text style={styles.text}>Prezzo:
                    <Text style={styles.bold}> {price}€</Text>
                </Text>
                <Text style={styles.text}>Quantità:
                    <Text style={styles.bold}> {quantity}</Text>
                </Text>
                <AddRemove quantity={quantity} />
            </View>
            <Image style={styles.image} source={{ uri: uri }} />
            {/* </TouchableOpacity> */}
        </View>
    );
}

const styles = StyleSheet.create({
    containerCard: {
        backgroundColor: '#555588',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    shadow: {
        shadowOpacity: 0.5,
        shadowColor: '#555',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 6
    },
    notAvail: {
        opacity: 0.2,
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    text: {
        color: '#fff',
        margin: 5
    },
    title: {
        fontSize: 18,
        color: '#ffff99'
    },
    bold: {
        fontWeight: 'bold'
    }
});

export default Card;