import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default function Feed() {
  const userName = "Wade Wilson"; // Nome do usuário
  const profileImageUrl = "https://w7.pngwing.com/pngs/483/498/png-transparent-deadpool-desktop-film-cable-deadpool-superhero-fictional-character-deadpool.png"; // URL da foto de perfil
  const description = "Mercenário Tagarela | Ama chimichangas e quebrar a quarta parede."; // Descrição do usuário

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={{ uri: profileImageUrl }} style={styles.profileImage} />
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginTop: 8,
    textAlign: 'center',
    color: '#666',
  },
});
