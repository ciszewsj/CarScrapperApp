import {Button, Text} from 'react-native';
import {SafeAreaView, TextInput} from 'react-native';
import React from 'react';

const MainScreen = ({navigation}) => {
  const [parcelId, setParcelId] = React.useState();
  return (
    <SafeAreaView>
      <Text>Parcel id</Text>

      <TextInput keyboardType="numeric" onChangeText={e => setParcelId(e)} />
      <Button
        title="Find parcel"
        onPress={() => {
          console.log(parcelId);
          navigation.navigate({
            name: 'ParcelScreen',
            params: {parcelId: parcelId},
          });
        }}
      />
    </SafeAreaView>
  );
};

export default MainScreen;
