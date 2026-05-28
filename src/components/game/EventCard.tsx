import { StyleSheet, Text, View } from "react-native";

type EventCardProps = {
  message: string;
};

export function EventCard({ message }: EventCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1f2937",
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#374151",
  },
  message: {
    color: "#f3f4f6",
    fontSize: 14,
    lineHeight: 20,
  },
});
