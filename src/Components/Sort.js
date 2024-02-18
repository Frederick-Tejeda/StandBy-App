import { View, Text, Pressable } from 'react-native';
import { useDataContext } from '../Context/DataContext'

export default function SortScreen({ navigation }) {

  const { user } = useDataContext()

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sort Screen, Hello, {user?.name}</Text>
    </View>
  );
}