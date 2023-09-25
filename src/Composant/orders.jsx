import {useEffect, useState} from "react";
import {ProductService} from "../Service/ProductService.js";
import {Button, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";

export function Orders(){
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchOrders();
    }, []);

    function fetchOrders() {
        setLoading(true);
        ProductService.GetOrders().then(async (data) => {
            setOrders(data);
            setLoading(false);
        });
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <TableContainer>
            <Button colorScheme="blue" onClick={() => navigate("/")}>
                Products
            </Button>
            <Table variant="simple">
                <TableCaption>Orders</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Prenom</Th>
                        <Th>Nom</Th>
                        <Th>Numéro de telephone</Th>
                        <Th isNumeric>Total (en €)</Th>
                        <Th>Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {orders.map((order) => (
                        <Tr key={order.id}>
                            <Td>
                                {order.clientDetails.firstName}
                            </Td>
                            <Td>{order.clientDetails.lastName}</Td>
                            <Td>{order.clientDetails.phone}</Td>
                            <Td isNumeric>{order.total}</Td>
                            <Td>
                                <Button onClick={() => navigate(`/order/${order._id}`)}>
                                    Detail
                                </Button>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    )
}