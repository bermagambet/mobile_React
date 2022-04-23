import React, {useState} from 'react';
import { Keyboard, ScrollView, StyleSheet, Text, View } from 'react-native';
import TaskInputField from './TaskInputField';
import TaskItem from './TaskItem';

export default function App() {
  const [tasks, setTasks] = useState<any>([]);

  const addTask = (task: any) => {
    if (task?.value == null) return;
    setTasks([...tasks, task]);
    Keyboard.dismiss();
  }

  const deleteTask = (deleteIndex: any) => {
    setTasks(tasks.filter((value: any, index: number) => index != deleteIndex));
  }

  const checkTask = (checkIndex: any) => {
    // setTasks(tasks.filter((value, index) => index != checkIndex));
    const tempTasks = tasks;

    const isCheckByUser = (element: any, index: number) => index === checkIndex;

    tempTasks[tempTasks.findIndex(isCheckByUser)].checked = !tempTasks[tempTasks.findIndex(isCheckByUser)].checked;
    console.log(tempTasks);
    setTasks(tempTasks);
  }

  return (
    <View style={styles.container}>
        <Text style={styles.heading}>To Do</Text>
      <ScrollView style={styles.scrollView}>
        {
        tasks.map((task: any, index: React.Key | null | undefined) => {
          return (
            <View key={index} style={styles.taskContainer}>
              <TaskItem index={typeof index === 'number' ? index + 1 : null} task={task} checkTask={() => checkTask(index)} deleteTask={() => deleteTask(index)}/>
            </View>
          );
        })
      }
      </ScrollView>
      <TaskInputField addTask={addTask}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1A3C',
  },
  heading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20,
  }
});