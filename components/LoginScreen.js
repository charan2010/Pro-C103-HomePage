import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Modal, Pressable, Image, ImageBackground } from 'react-native';
import BottomTabNavigator from '../components/BottomTabNavigator';

const LoginScreen = () => {
    const [username, setUsername] = useState('abc');
    const [password, setPassword] = useState('123');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const handleLogin = () => {
        if (username === 'abc' && password === '123') {
            setIsLoggedIn(true);
        } else {
            setModalVisible(true);
        }
    };

    if (isLoggedIn) {
        return <BottomTabNavigator />;
    }

    return (
        <ImageBackground source={require('../assets/background.jpg')} style={styles.backgroundImage}>
            <View style={styles.container}>
                <Text style={styles.welcomeText}>Welcome to Timerr</Text>
                <Image source={require('../assets/logo.png')} style={styles.logo} />
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Invalid username or password.<br/> Username: abc<br/> Password: 123</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>OK</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <Text style={styles.title}>Login</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <Button title="Login" onPress={handleLogin} style={styles.button} />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcomeText: {
        fontSize: 30,
        marginBottom: 20,
        color: '#black',
        fontWeight: 'bold',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 40,
        marginBottom: 30,
        color: '#fff',
        fontWeight: 'bold',
    },
    input: {
        width: 400,
        height: 60,
        borderColor: '#3a3c40',
        borderWidth: 4,
        marginBottom: 15,
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        margin: 30,
        backgroundColor: 'white',
        borderRadius: 30,
        padding: 75,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 30,
        padding: 15,
        elevation: 2,
        width: 200
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
    },
    modalText: {
        marginBottom: 45,
        textAlign: 'center',
        fontSize: 24,
        color: '#333',
    },
    backgroundImage: {
        width: '100%',
        height: '100%'
    },
});

export default LoginScreen;