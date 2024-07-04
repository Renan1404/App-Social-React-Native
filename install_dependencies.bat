@echo off
echo Instalando dependências do npm...
npm install @react-navigation/native @react-navigation/bottom-tabs

echo Instalando dependências do Expo...
npx expo install react-native-screens react-native-safe-area-context react-native-web react-dom @expo/metro-runtime

echo Todas as dependências foram instaladas com sucesso!
pause
