import React, { useState } from 'react';
import {
  View, Image, Text, StatusBar, TouchableOpacity, TextInput,
} from 'react-native';
import { colors } from '~/styles';
import netflixlogo from '~/resources/images/logos/netflixlogo.png';
import styles from './styles';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <View style={styles.flex} />
        <View style={styles.flex}>
          <Image source={netflixlogo} style={styles.image} resizeMode="contain" />
        </View>
        <View style={[styles.flex, { alignItems: 'flex-end' }]}>
          <TouchableOpacity>
            <Text style={styles.helpText}>Ajuda</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <View>
          <TextInput
            value={email}
            onChangeText={value => setEmail(value)}
            autoCapitalize="none"
            autoCorrect={false}
            style={[
              styles.input,
              {
                backgroundColor: colors.dark,
                borderColor: colors.regular,
              },
            ]}
            placeholder="Email ou número de telefone"
            placeholderTextColor={colors.whiteRegular}
            underlineColorAndroid={colors.transparent}
            textContentType="emailAddress"
          />
          <View style={styles.inputView}>
            <TextInput
              value={password}
              onChangeText={value => setPassword(value)}
              autoCapitalize="none"
              autoCorrect={false}
              style={[
                styles.input,
                {
                  backgroundColor: colors.dark,
                  borderColor: colors.regular,
                  marginHorizontal: 0,
                },
              ]}
              placeholder="Senha"
              placeholderTextColor={colors.whiteRegular}
              underlineColorAndroid={colors.transparent}
              secureTextEntry={!isPasswordVisible}
              textContentType="password"
            />
            <TouchableOpacity
              onPress={() => setPasswordVisible(!isPasswordVisible)}
              style={styles.showPasswordButton}
            >
              {isPasswordVisible ? (
                <Text style={styles.showPasswordText}>OCULTAR</Text>
              ) : (
                <Text style={styles.showPasswordText}>MOSTRAR</Text>
              )}
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {}}
            style={[
              styles.button,
              { borderColor: colors.regular },
              !!email && !!password && { backgroundColor: colors.primaryColor },
            ]}
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
            <Text
              style={[
                styles.recoverPassword,
                !!email && !!password && { color: colors.white },
              ]}
            >
              Recuperar senha
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Login;
