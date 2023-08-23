import { useEffect } from "react";
import { useState } from "react";
import { ProductService } from "../Service/ProductService";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

export function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    ProductService.GetProducts().then(async (data) => {
      const parsedData = await data.json();
      console.log(parsedData);
      setProducts(parsedData);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Products</TableCaption>
        <Thead>
          <Tr>
            <Th>Category</Th>
            <Th>Name</Th>
            <Th isNumeric>Price</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {products.map((product) => (
            <Tr key={product.id}>
              <Td>{product.category}</Td>
              <Td>{product.name}</Td>
              <Td isNumeric>{product.price}</Td>
              <Td>
                <button>Edit</button>
                <button>Delete</button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
