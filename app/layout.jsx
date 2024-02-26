import "@/assets/styles/globals.css";

export const metadata = {
  title: "property pulse",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>;
      </body>
    </html>
  );
};

export default MainLayout;
