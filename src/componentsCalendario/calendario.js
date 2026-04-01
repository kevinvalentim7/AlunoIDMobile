import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Calendar } from 'react-native-calendars';

const { width } = Dimensions.get('window');

export default function Calendario() {
  return (
    <View style={styles.container}>
      <Calendar
        style={styles.calendar}

        current={'2026-02-01'}

        hideExtraDays={false}
        showSixWeeks={true}

        enableSwipeMonths={true}

        theme={{
          calendarBackground: '#1e73be',
          monthTextColor: '#fff',
          textMonthFontSize: 18,
          textMonthFontWeight: 'bold',
          dayTextColor: '#fff',
          textDisabledColor: '#7fb3e6',
          arrowColor: '#fff',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  calendar: {
    width: width * 0.85,
    height: 360, // 🔥 ISSO RESOLVE DEFINITIVAMENTE
    borderRadius: 15,
  },
});