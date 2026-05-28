import { StyleSheet, Text, View } from "react-native";

type InventoryCardProps = {
  label: string;
  amount: number;
};

export function InventoryCard({ label, amount }: InventoryCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.amount}>{amount}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#111827",
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#374151",
  },
  amount: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
  },
  label: {
    color: "#d1d5db",
    fontSize: 14,
    textAlign: "center",
    marginTop: 4,
  },
});
