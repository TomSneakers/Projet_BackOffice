import {useNavigate, useParams} from "react-router-dom";
import {ProductService} from "../Service/ProductService.js";
import {useEffect, useState} from "react";
import {
    Image,
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    VStack,
    Box,
    Text,
    Button
} from "@chakra-ui/react";

export function OrderDetail() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [order, setOrder] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        ProductService.GetOrder(id).then(async (data) => {
            setOrder(data);
            setLoading(false);
        });
    }, []);

    if (loading)
        return <div>Loading...</div>;

    return (
        <VStack>
            <Button colorScheme="blue" onClick={() => navigate("/orders")}>
                Liste de commandes
            </Button>
            <Box>
                <Text>Prénom : {order.clientDetails.firstName}</Text>
                <Text>Nom: {order.clientDetails.lastName}</Text>
                <Text>Numéro de téléphone : {order.clientDetails.phone}</Text>
            </Box>
            <TableContainer>
                <Table variant="simple">
                    <TableCaption>Products</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Image</Th>
                            <Th>Name</Th>
                            <Th>Size</Th>
                            <Th isNumeric>Price</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {order.items.map((product) => (
                            <Tr key={product.id}>
                                <Td>
                                    <Image alt={product.name} boxSize="100px" src={product.imageUrl}/>
                                </Td>
                                <Td>{product.category}</Td>
                                <Td>{product.name}</Td>
                                <Td>{product.size}</Td>
                                <Td isNumeric>{product.price}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </VStack>
    );

}