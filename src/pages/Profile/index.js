import React, { useState } from 'react';
import {
  View, Image, Text, StatusBar, TouchableOpacity, FlatList,
} from 'react-native';
import { colors } from '~/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import netflixlogo from '~/resources/images/logos/netflixlogo.png';
import profileicon from '~/resources/images/logos/profileicon.png';
import styles from './styles';

function Profile() {
  const [edit, setEdit] = useState(false);

  const profiles = [
    {
      id: 1,
      name: 'Giovani',
      thumbnail: profileicon,
    },
    {
      id: 2,
      name: 'Camila',
      thumbnail: profileicon,
    },
    {
      id: 3,
      name: 'Murilo',
      thumbnail: profileicon,
    },
    {
      id: 4,
      name: 'Gisele',
      thumbnail: profileicon,
    },
    {
      id: 5,
      name: 'Mantovani',
      thumbnail: profileicon,
    },
  ];

  const renderItem = item => (
    <View>
      <TouchableOpacity style={styles.thumbnailView}>
        <Image style={styles.thumbnail} source={item.thumbnail} />
        <Text style={styles.thumbnailText}>{item.name}</Text>
      </TouchableOpacity>
      {edit ? (
        <TouchableOpacity style={styles.editOpacity}>
          <Icon name="pencil" size={80} color={colors.white} />
        </TouchableOpacity>
      ) : (
        <View />
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <View style={[styles.flex, { alignItems: 'flex-start' }]}>
          {edit ? (
            <TouchableOpacity onPress={() => setEdit(false)}>
              <Text style={styles.editText}>Concluir</Text>
            </TouchableOpacity>
          ) : (
            <View />
          )}
        </View>
        <View style={styles.flex}>
          <Image source={netflixlogo} style={styles.image} resizeMode="contain" />
        </View>
        <View style={[styles.flex, { alignItems: 'flex-end' }]}>
          {!edit ? (
            <TouchableOpacity onPress={() => setEdit(true)}>
              <Text style={styles.editText}>Editar</Text>
            </TouchableOpacity>
          ) : (
            <View />
          )}
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.titleView}>
          <Text style={styles.title}>Quem está asssistindo?</Text>
        </View>
        <FlatList
          data={profiles}
          keyExtractor={item => String(item.id)}
          numColumns={2}
          style={styles.flatlist}
          columnWrapperStyle={styles.columnStyle}
          renderItem={({ item }) => renderItem(item)}
        />
      </View>
    </View>
  );
}

export default Profile;
