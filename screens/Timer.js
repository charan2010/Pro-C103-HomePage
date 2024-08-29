import React, { Component } from "react";
import { View, Text, StyleSheet, Picker } from "react-native";
import { Audio } from 'expo-av';

export default class TimerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 2,
      sound: new Audio.Sound()
    };
    this.intervalId = null;
  }

  componentDidMount() {
    this.loadSound();
  }

  componentWillUnmount() {
    this.clearInterval();
  }

  loadSound = async () => {
    await this.state.sound.loadAsync(require('../sound/sound.mp3'));
  }

  startTimer = () => {
    this.intervalId = setInterval(() => {
      if (this.state.seconds > 0) {
        this.setState({ seconds: this.state.seconds - 1 });
      } else if (this.state.minutes > 0) {
        this.setState({ minutes: this.state.minutes - 1, seconds: 59 });
      } else {
        this.playSound();
        this.clearInterval();
      }
    }, 1000);
  }

  clearInterval = () => {
    clearInterval(this.intervalId);
  }

  playSound = async () => {
    await this.state.sound.playAsync();
  }

  handlePickerChange = (itemValue) => {
    this.setState({ selectedValue: itemValue, minutes: parseInt(itemValue) });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Timer: {this.state.hours}:{this.state.minutes}:{this.state.seconds.toString().padStart(2, '0')}</Text>
        <Picker
          selectedValue={this.state.selectedHours}
          style={{ width: '30%', margin: 10, fontSize: 23, padding: 10 }}
          onValueChange={(itemValue) => this.setState({ selectedHours: itemValue, hours: parseInt(itemValue) })}
        >
          {Array(25).fill().map((_, i) => (
            <Picker.Item key={i} label={`${i.toString().padStart(2, '0')} hours`} value={i.toString()} />
          ))}
        </Picker>
        <Picker
          selectedValue={this.state.selectedMinutes}
          style={{ width: '30%', margin: 10, fontSize: 23, padding: 10 }}
          onValueChange={(itemValue) => this.setState({ selectedMinutes: itemValue, minutes: parseInt(itemValue) })}
        >
          {Array(60).fill().map((_, i) => (
            <Picker.Item key={i} label={`${i.toString().padStart(2, '0')} minutes`} value={i.toString()} />
          ))}
        </Picker>
        <Picker
          selectedValue={this.state.selectedSeconds}
          style={{ width: '30%', margin: 10, fontSize: 23, padding: 10 }}
          onValueChange={(itemValue) => this.setState({ selectedSeconds: itemValue, seconds: parseInt(itemValue) })}
        >
          {Array(58).fill().map((_, i) => (
            <Picker.Item key={i + 2} label={`${(i + 2).toString().padStart(2, '0')} seconds`} value={(i + 2).toString()} />
          ))}
        </Picker>
        <Text onPress={this.startTimer} style={styles.button}>Start</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fbf79f"
  },
  text: {
    color: "#4C5D70",
    fontSize: 205,
    color: 'black',
    fontFamily: 'Arial Black'
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    width: '40%',
    padding: 20,
    borderRadius: 5,
    marginTop: 20,
    fontSize: 50,
    textAlign: 'center'
  }
});