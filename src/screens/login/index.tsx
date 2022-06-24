import React from 'react';
import {
    Button,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = ({ navigation }: any) => {
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
            <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Login Screen</Text>
                <Button
                    title="Go to Login... again"
                    onPress={() => navigation.push('Login')}
                />
                <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
                <Button title="Go back" onPress={() => navigation.goBack()} />
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export { LoginScreen };
