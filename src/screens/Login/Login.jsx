import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, ImageBackground, TouchableOpacity } from 'react-native';

export default function Login() {

  const navigation = useNavigation();




  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ImageBackground 
      source={{ uri: 'https://img.freepik.com/premium-vector/abstract-blue-geometric-shapes-background_697972-1591.jpg?w=740' }}
      style={styles.loginContainer}
    >
      <View style={styles.loginBox}>
        
        {/* Logo and Title */}
        <View style={styles.logoContainer}>
          <Image 
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt1WqAhsjbTEz_IxcDDdYmqQOeC1dd6sXd7nr52vBY0OmcAhavLE9olYW5SV8p2WDjVfU&usqp=CAU' }} 
            style={styles.logoImage} 
          />
          <Text style={styles.titleText}>Welcome Back!</Text>
          <Text style={styles.subtitleText}>Sign in to continue</Text>
        </View>

        {/* Form Container */}
        <View style={styles.formContainer}>
          {/* Email Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
            />
          </View>
          
          {/* Password Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Enter your password"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity 
                onPress={() => setShowPassword(!showPassword)}
                style={styles.eyeIcon}
              >
                <Text style={styles.eyeIconText}>{showPassword ? '👁️' : '👁️‍🗨️'}</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Forgot Password Link */}
          <TouchableOpacity style={styles.forgotPasswordContainer}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>

          {/* Sign In Button */}
          <TouchableOpacity 
            onPress={() => navigation.navigate('BottomDrawer')}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>

          {/* Or Divider */}
          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>OR</Text>
            <View style={styles.divider} />
          </View>

          {/* Go to Sign up Button */}
          <View style={styles.signupButtonContainer}>
            <Text style={styles.noAccountText}>Don't have an account?</Text>
            <TouchableOpacity 
              onPress={() => navigation.navigate('Register')}
              style={styles.signupButton}
            >
              <Text style={styles.signupButtonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginBox: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 10,
    alignItems: 'center',
    paddingTop: 25,
    overflow: 'hidden',
  },

  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  logoImage: {
    width: 70,
    height: 70,
    borderRadius: 15,
    resizeMode: 'cover',
    marginBottom: 10,
  },

  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3b84ef',
    marginBottom: 5,
  },

  subtitleText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },

  formContainer: {
    width: '100%',
    backgroundColor: '#3b84ef',
    padding: 25,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 8,
  },

  inputContainer: {
    width: '90%',
    marginBottom: 15,
  },

  inputLabel: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 5,
    fontWeight: '500',
    marginLeft: 5,
  },

  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#f8f8f8',
    fontSize: 14,
    color: '#333',
  },

  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#f8f8f8',
  },

  passwordInput: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 15,
    fontSize: 14,
    color: '#333',
  },

  eyeIcon: {
    paddingHorizontal: 15,
    height: '100%',
    justifyContent: 'center',
  },

  eyeIconText: {
    fontSize: 16,
  },

  forgotPasswordContainer: {
    width: '90%',
    alignItems: 'flex-end',
    marginBottom: 20,
  },

  forgotPasswordText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '500',
  },

  button: {
    width: '70%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  buttonText: {
    color: '#3b84ef',
    fontSize: 16,
    fontWeight: 'bold',
  },

  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginBottom: 20,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },

  dividerText: {
    color: '#fff',
    paddingHorizontal: 10,
    fontSize: 12,
    fontWeight: '600',
  },

  signupButtonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 5,
  },

  noAccountText: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 8,
  },

  signupButton: {
    width: '50%',
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#fff',
  },

  signupButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});