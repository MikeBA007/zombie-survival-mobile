import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { ActionButton } from "@/components/game/ActionButton";
import { EventCard } from "@/components/game/EventCard";
import { InventoryCard } from "@/components/game/InventoryCard";
import { StatBar } from "@/components/game/StatBar";
import { drink, eat, explore, heal, rest, scavenge } from "@/game/actions";
import { initialPlayer } from "@/game/initialPlayer";
import type { ActionResult, Player } from "@/game/types";

export default function HomeScreen() {
  const [player, setPlayer] = useState<Player>(initialPlayer);
  const [latestMessage, setLatestMessage] = useState<string>(
    initialPlayer.eventLog[0],
  );

  function handleAction(action: (player: Player) => ActionResult) {
    const result = action(player);
    setPlayer(result.player);
    setLatestMessage(result.message);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Zombie Survival</Text>
        <Text style={styles.subtitle}>Day {player.day}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Survivor Status</Text>

        <StatBar label="Health" value={player.health} />
        <StatBar label="Hunger" value={player.hunger} />
        <StatBar label="Thirst" value={player.thirst} />
        <StatBar label="Fatigue" value={player.fatigue} />
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Weather</Text>
        <Text style={styles.weatherName}>{player.currentWeather.name}</Text>
        <Text style={styles.bodyText}>{player.currentWeather.description}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Inventory</Text>

        <View style={styles.inventoryGrid}>
          <InventoryCard label="Food" amount={player.inventory.food} />
          <InventoryCard label="Water" amount={player.inventory.water} />
          <InventoryCard label="Medicine" amount={player.inventory.medicine} />
          <InventoryCard label="Weapons" amount={player.inventory.weapons} />
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Actions</Text>

        <ActionButton label="Scavenge" onPress={() => handleAction(scavenge)} />
        <ActionButton label="Explore" onPress={() => handleAction(explore)} />
        <ActionButton label="Rest" onPress={() => handleAction(rest)} />
        <ActionButton label="Eat" onPress={() => handleAction(eat)} />
        <ActionButton label="Drink" onPress={() => handleAction(drink)} />
        <ActionButton label="Heal" onPress={() => handleAction(heal)} />
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Latest Event</Text>
        <EventCard message={latestMessage} />
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Event Log</Text>
        {player.eventLog.map((event, index) => (
          <EventCard key={`${event}-${index}`} message={event} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#020617",
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 20,
    paddingTop: 20,
  },
  title: {
    color: "#ffffff",
    fontSize: 32,
    fontWeight: "800",
  },
  subtitle: {
    color: "#94a3b8",
    fontSize: 18,
    marginTop: 4,
  },
  card: {
    backgroundColor: "#0f172a",
    borderRadius: 18,
    padding: 18,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#1e293b",
  },
  sectionTitle: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 14,
  },
  weatherName: {
    color: "#e5e7eb",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 6,
  },
  bodyText: {
    color: "#cbd5e1",
    fontSize: 15,
    lineHeight: 22,
  },
  inventoryGrid: {
    gap: 10,
  },
});
