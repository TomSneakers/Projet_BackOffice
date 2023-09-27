import { useEffect, useState } from "react";
import { ProductService } from "../Service/ProductService";
import "./Product.css";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Image,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export function Products() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  function fetchProducts() {
    setLoading(true);
    ProductService.GetProducts().then(async (data) => {
      const parsedData = await data.json();
      setProducts(parsedData);
      setLoading(false);
    });
  }

  function handleDelete(id) {
    ProductService.DeleteProduct(id);
    window.location.reload();
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <TableContainer className="TableContainer">
      <Button colorScheme="blue" onClick={() => navigate("/product/add")}>
        Ajouter un produit
      </Button>
      <Button colorScheme="blue" onClick={() => navigate("/orders")}>
        Commandes
      </Button>
      <Table variant="simple">
        <TableCaption>Products</TableCaption>
        <Thead>
          <Tr>
            <Th>Image</Th>
            <Th>Categorie</Th>
            <Th>Nom</Th>
            <Th isNumeric>Prix</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {products.map((product) => (
            <Tr key={product.id}>
              <Td>
                <Image
                  alt={product.name}
                  boxSize="100px"
                  src={product.imageUrl}
                />
              </Td>
              <Td>{product.category}</Td>
              <Td>{product.name}</Td>
              <Td isNumeric>{product.price}</Td>
              <Td>
                <Button
                  onClick={() => navigate(`/product/edit/${product._id}`)}
                >
                  modifier
                </Button>
                <Button onClick={() => handleDelete(product._id)}>
                  supprimer
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
