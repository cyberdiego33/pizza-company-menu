import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

const AppLayout = function () {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      {isLoading && <Loader />}
      <Header />

      <main>
        <div className="max-w-3xl mx-auto">
          <Outlet />
        </div>
      </main>

      <CartOverview />
    </div>
  );
};

export default AppLayout;
