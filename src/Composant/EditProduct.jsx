import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { ProductService } from "../Service/ProductService";

export function EditProduct() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [updatedCategory, setUpdatedCategory] = useState("");
  const [updatedName, setUpdatedName] = useState("");
  const [updatedPrices, setUpdatedPrices] = useState("");
  const [updatedImageUrl, setUpdatedImageUrl] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");

  useEffect(() => {
    ProductService.GetProduct(id).then(async (data) => {
      console.log(data);
      setUpdatedCategory(data.category);
      setUpdatedName(data.name);
      setUpdatedPrices(data.prices);
      setUpdatedImageUrl(data.imageUrl);
      setUpdatedDescription(data.description);
      setLoading(false);
    });
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await ProductService.UpdateProduct(
        id,
        updatedName,
        updatedCategory,
        updatedPrices,
        updatedImageUrl,
        updatedDescription
      );
      if (response.status === 200) {
        navigate("/"); // Rediriger vers la liste des produits après la mise à jour
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour du produit :", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={handleUpdate}>
      <VStack spacing={4} align="start">
        <FormControl>
          <FormLabel>Catégorie</FormLabel>
          <Input
            type="text"
            value={updatedCategory}
            onChange={(e) => setUpdatedCategory(e.target.value)}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>Nom</FormLabel>
          <Input
            type="text"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>Prix</FormLabel>
          <Input
            type="number"
            step="0.01"
            value={updatedPrices["sm"]}
            onChange={(e) =>
              setUpdatedPrices({ ...updatedPrices, sm: e.target.value })
            }
            required
          />
          <Input
            type="number"
            step="0.01"
            value={updatedPrices["md"]}
            onChange={(e) =>
              setUpdatedPrices({ ...updatedPrices, md: e.target.value })
            }
            required
          />
          <Input
            type="number"
            step="0.01"
            value={updatedPrices["lg"]}
            onChange={(e) =>
              setUpdatedPrices({ ...updatedPrices, lg: e.target.value })
            }
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>Image</FormLabel>
          <Input
            type="text"
            value={updatedImageUrl}
            onChange={(e) => setUpdatedImageUrl(e.target.value)}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Input
            type="text"
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
            required
          />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Mettre à jour le produit
        </Button>
      </VStack>
    </form>
  );
}
