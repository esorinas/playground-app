
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheetExample from './BottomSheetExample';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetExample />
    </GestureHandlerRootView>
  );
}
