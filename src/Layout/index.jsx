import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
// Composant Layout pour définir la structure globale de la page
function Layout({ children }) {
  return (
    <div className="layout">
      <Header /> {/* Inclut le composant d'en-tête */}
      {children} {/* Affiche le contenu dynamique de chaque page */}
      <Footer /> {/* Inclut le composant de pied de page */}
    </div>
  );
}
export default Layout; // Exporte le composant Layout
