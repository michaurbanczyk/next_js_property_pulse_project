import "@/assets/styles/globals.css";

export const metadata = {
  title: "Property Pulse | Find The Perfect Rental",
  keywords: "rental, house",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
