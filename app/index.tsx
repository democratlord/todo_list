import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  View,
  Platform,
  Keyboard,
} from "react-native";
import Task from "../components/Task";

export default function App() {
  const [task, setTask] = useState("");
  const [taskItems, setTaskItems] = useState([]);
  const handleAddTask = () => {
    if (task.trim() === "") return;
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask("");
  };

  const completeTask = (index) => {
    let itemCopy = [...taskItems];
    itemCopy.splice(index, 1);
    setTaskItems(itemCopy);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Список дел</Text>

        <View style={styles.items}>
          {taskItems.map((item, index) => {
            return (
              <Pressable
                key={index}
                onPress={() => {
                  completeTask(index);
                }}
              >
                <Task text={item} />
              </Pressable>
            );
          })}
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Впишите задачу"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <Pressable onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(50 219 200)",
  },
  tasksWrapper: { paddingTop: 80, paddingHorizontal: 20,},
  sectionTitle: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color:"rgb(39 39 39)",
  },

  items: { marginTop: 30 },

  writeTaskWrapper: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    fontSize: 16,
    color: "rgb(39 39 39)",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderColor: "#0d584f",

    width: 250,
    fontSize: 17,
    color:"rgb(39 39 39)",
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#0d584f",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#0d584f",
    borderWidth: 1,
    color:"rgb(39 39 39)",
  },
  addText:{
    textAlign: "center",
    marginTop: -6,
    fontSize: 30,
    color: "white"
  }
});
