import "./globals.css";
import { FavoritesProvider } from "./context/FavouritesContext";
import { AppliedJobsProvider } from "./context/AppliedJobsContext";
import Nav from "./components/Nav";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="mx-2 sm:mx-4 md:mx-6 lg:mx-8 max-w-7xl xl:mx-auto">
        <AppliedJobsProvider>
          <FavoritesProvider>
            <Nav />
            <main className="pb-8">
              {children}
            </main>
          </FavoritesProvider>
        </AppliedJobsProvider>
      </body>
    </html>
  );
}