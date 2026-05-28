import { StyleSheet, Text, View } from "react-native";

type StatBarProps = {
  label: string;
  value: number;
  dangerHigh?: boolean;
};

function getBarColor(value: number, dangerHigh: boolean) {
  if (dangerHigh) {
    if (value >= 75) return "#ef4444";
    if (value >= 40) return "#facc15";
    return "#22c55e";
  }

  if (value >= 75) return "#22c55e";
  if (value >= 40) return "#facc15";
  return "#ef4444";
}

export function StatBar({ label, value, dangerHigh = false }: StatBarProps) {
  const safeValue = Math.max(0, Math.min(100, value));
  const barColor = getBarColor(safeValue, dangerHigh);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{safeValue}/100</Text>
      </View>

      <View style={styles.track}>
        <View
          style={[
            styles.fill,
            {
              width: `${safeValue}%`,
              backgroundColor: barColor,
            },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 14,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  label: {
    color: "#e5e7eb",
    fontSize: 16,
    fontWeight: "600",
  },
  value: {
    color: "#94a3b8",
    fontSize: 14,
  },
  track: {
    height: 12,
    borderRadius: 999,
    backgroundColor: "#2f2f2f",
    overflow: "hidden",
  },
  fill: {
    height: "100%",
    borderRadius: 999,
  },
});
