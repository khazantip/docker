import { Outlet } from "react-router-dom";
import "./RootLayout.css";

const RootLayout = () => {
  return (
    <main>
      <header>
        <li>
          <a href="/">Фотографии с Марса</a>
        </li>
      </header>
      {/* Содержимое */}
      <Outlet />
      <footer>© Alexandr Grachev, {new Date().getFullYear()}</footer>
    </main>
  );
};

export default RootLayout;
