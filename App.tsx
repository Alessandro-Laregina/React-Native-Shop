import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { DATA } from './list.mock';
import Card from './src/Card';
import Title from './src/Title';

const App = () => {

  const renderItem = ({ item, index }: any) => {
    if (index == 0) return ( // fake status bar
      <>
        <Title title='amazon' />
        <Card item={item} />
      </>
    )
    return (<Card item={item} />)
  }

  return (
    // <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item, index) => `key_${index}`}
      />
    </View>
    // </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8'
  }
});

export default App;