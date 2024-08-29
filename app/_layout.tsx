import { Stack } from "expo-router";

// Componente principal de la aplicación que utiliza un Stack para la navegación.
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" /> 
    </Stack>
  );
}
