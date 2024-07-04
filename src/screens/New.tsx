import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker'; // Importa corretamente o ImagePicker

export default function New() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploading, setUploading] = useState(false); // Estado para controlar o envio da imagem

  const handleUpload = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });

      if (!result.cancelled) {
        setUploading(true); // Inicia o estado de envio

        // Simulação de envio (substitua com sua lógica real de envio)
        setTimeout(() => {
          console.log('Imagem enviada:', result.uri);
          setUploading(false); // Finaliza o estado de envio
          Alert.alert('Sucesso', 'Imagem enviada com sucesso!');
          setSelectedImage(result.uri); // Define a imagem selecionada para exibição
        }, 2000); // Simula um tempo de envio de 2 segundos
      }
    } catch (error) {
      console.error('Erro ao selecionar imagem:', error);
      Alert.alert('Erro', 'Falha ao selecionar imagem.');
      setUploading(false); // Finaliza o estado de envio em caso de erro
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Novo</Text>
      <TouchableOpacity style={styles.uploadButton} onPress={handleUpload} disabled={uploading}>
        <MaterialIcons name="cloud-upload" size={24} color="white" style={styles.buttonIcon} />
        <Text style={styles.buttonText}>Upload</Text>
      </TouchableOpacity>

      {uploading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007bff" />
          <Text style={styles.loadingText}>Enviando imagem...</Text>
        </View>
      )}

      {selectedImage && !uploading && (
        <View style={styles.imageContainer}>
          <Text style={styles.imageText}>Imagem selecionada:</Text>
          <Image source={{ uri: selectedImage }} style={styles.imagePreview} resizeMode="contain" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  uploadButton: {
    backgroundColor: '#007bff',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  buttonIcon: {
    marginLeft: 5,
  },
  loadingContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  imageText: {
    fontSize: 16,
    marginBottom: 10,
  },
  imagePreview: {
    width: 200,
    height: 200,
  },
});
