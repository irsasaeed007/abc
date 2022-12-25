
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WrapperAuth } from './Context/AuthWrapper';
import MainApp from './MainApp';






const App = () => {
  return (

    <>
      <WrapperAuth>
        <MainApp />
      </WrapperAuth>
    </>
  );
};

export default App;

