import { Provider } from "react-redux";
import { store } from "./store";
import ServiceForm from "./components/ServiceForm";
import SearchFilter from "./components/SearchFilter";
import FilterStats from "./components/FilterStats";
import ServiceList from "./components/ServiceList";

export default function App() {
  return (
    <Provider store={store}>
      <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
        <h1>Управление услугами</h1>
        <ServiceForm />
        <SearchFilter />
        <FilterStats />
        <ServiceList />
      </div>
    </Provider>
  );
}
