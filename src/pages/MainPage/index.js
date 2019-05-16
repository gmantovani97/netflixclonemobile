import React from 'react';
import {
  View, Image, StatusBar, ScrollView, Text, TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '~/styles';
import thumbnailImage from '~/resources/images/logos/the-society-bg.png';
import thumbnailLogo from '~/resources/images/logos/the-society-logo.png';
import styles from './styles';

function MainPage() {
  const categories = ['Teen', 'TV', 'Drama', 'Soapy', 'Suspenseful', 'Dark'];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView>
        <Image source={thumbnailImage} style={styles.thumbnailbg} />
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={[colors.darker, colors.darkTransparent, colors.transparent]}
          style={styles.fadeHeader}
        />
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={[colors.transparent, colors.darkTransparent, colors.darker]}
          style={styles.fade}
        />
        <View style={styles.thumbnailLogoView}>
          <Image source={thumbnailLogo} style={styles.thumbnailLogoImage} resizeMode="contain" />
        </View>
        <View style={styles.mainCategories}>
          <Text style={styles.categoriesText}>{categories[0]}</Text>
          <View style={styles.dot} />
          {categories.slice(1, categories.length - 1).map(element => (
            <View style={styles.dotView} key={Math.random()}>
              <Text style={styles.categoriesText}>{element}</Text>
              <View style={styles.dot} />
            </View>
          ))}
          <Text style={styles.categoriesText}>{categories[categories.length - 1]}</Text>
        </View>
        <View style={styles.mainOptions}>
          <View style={styles.mainOptionsButtons}>
            <Icon name="plus" size={30} color={colors.white} />
            <Text style={styles.mainTexts}>Minha lista</Text>
          </View>
          <View style={styles.mainOptionsButtons}>
            <View style={styles.watchButton}>
              <Icon name="play" size={30} color={colors.black} />
              <Text style={styles.watchText}>Assistir</Text>
            </View>
          </View>
          <View style={styles.mainOptionsButtons}>
            <Icon name="information-outline" size={30} color={colors.white} />
            <Text style={styles.mainTexts}>Saiba mais</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.header}>
        <Image
          source={require('~/resources/images/logos/netflixlogomini.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <TouchableOpacity style={styles.headerButtons}>
          <Text style={styles.headerTexts}>Séries</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerButtons}>
          <Text style={styles.headerTexts}>Filmes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerButtons}>
          <Text style={styles.headerTexts}>Minha lista</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default MainPage;
