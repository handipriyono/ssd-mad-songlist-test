import NavigationList from "./app/navigations";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as Notifications from "expo-notifications";
import useNotifHook from "./app/commons/hooks/useNotif";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function App() {
  useNotifHook();
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationList />
    </QueryClientProvider>
  );
}
