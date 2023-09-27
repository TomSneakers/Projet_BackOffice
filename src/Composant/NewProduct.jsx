import { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ProductService } from "../Service/ProductService";

export function NewProduct() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [desctiption, setDescription] = useState("");
  const [prices, setPrices] = useState({});

  function handlePriceChange(e) {
    const { id, value } = e.target;
    setPrices({ ...prices, [id]: value });
  }

  useEffect(() => {
    console.log(prices);
  }, [prices]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await ProductService.AddProduct(
        category,
        name,
        prices,
        imageUrl,
        desctiption
      );
      if (response.status === 200) {
        navigate("/");
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout du produit :", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add_product">
      <VStack spacing={4} align="start">
        <FormControl>
          <FormLabel>Catégorie</FormLabel>
          <Input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>Nom</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>Prix</FormLabel>
          <Input
            onChange={handlePriceChange}
            id={"sm"}
            type="number"
            placeholder={"Petite"}
            required
          />
          <Input
            onChange={handlePriceChange}
            id={"md"}
            type="number"
            placeholder={"Moyenne"}
            required
          />
          <Input
            onChange={handlePriceChange}
            id={"lg"}
            type="number"
            placeholder={"Grande"}
            required
          />
        </FormControl>

        <FormControl>
          <FormLabel>Image</FormLabel>
          <Input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </FormControl>

        <FormControl>
          <FormLabel>Description</FormLabel>
          <Input
            type="text"
            value={desctiption}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Ajouter le produit
        </Button>
      </VStack>
    </form>
  );
}
