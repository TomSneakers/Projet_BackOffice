import { useState } from "react";
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
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [desctiption, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await ProductService.AddProduct(
        category,
        name,
        price,
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
    <form onSubmit={handleSubmit}>
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
            type="number"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
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
