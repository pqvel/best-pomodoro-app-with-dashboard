import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/best-pomodoro-app-with-dashboard/",
  plugins: [react()],
});
