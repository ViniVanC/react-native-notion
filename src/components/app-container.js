import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import theme from "../theme";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../redux/reducers/todoReducer";

const store = createStore(rootReducer);

export default function AppContainer({ children }) {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NativeBaseProvider theme={theme} config={theme.config}>
          {children}
        </NativeBaseProvider>
      </NavigationContainer>
    </Provider>
  );
}
