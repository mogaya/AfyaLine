import {
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createClient } from "../../services/clients";

const ClientFormSchema = z.object({
  full_name: z.string().min(3, { message: "Full name is required" }),
  email: z.string().email("Invalid email address"),
  phone_number: z.string().min(10, { message: "Phone number is too short" }),
  date_of_birth: z.string().min(1, { message: "Date of birth is required" }),
  gender: z.enum(["M", "F", "O"]),
});

export type ClientFormData = z.infer<typeof ClientFormSchema>;

const ClientForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClientFormData>({ resolver: zodResolver(ClientFormSchema) });

  const onSubmit = async (data: ClientFormData) => {
    // console.log(data);
    try {
      await createClient(data);
      console.log("Client created successfully");
    } catch (error) {
      console.error("Error creating client:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4} maxW={400} mt={10}>
          <FormControl isInvalid={!!errors.full_name}>
            <FormLabel>Full Name</FormLabel>
            <Input {...register("full_name")}></Input>
          </FormControl>

          <FormControl isInvalid={!!errors.email}>
            <FormLabel>Email</FormLabel>
            <Input {...register("email")}></Input>
          </FormControl>

          <FormControl isInvalid={!!errors.phone_number}>
            <FormLabel>Phone Number</FormLabel>
            <Input {...register("phone_number")}></Input>
          </FormControl>

          <FormControl isInvalid={!!errors.date_of_birth}>
            <FormLabel>Date of Birth</FormLabel>
            <Input {...register("date_of_birth")}></Input>
          </FormControl>

          <FormControl isInvalid={!!errors.gender}>
            <FormLabel>Gender</FormLabel>
            <Input {...register("gender")}></Input>
          </FormControl>

          <Button type="submit" colorScheme="blue" w={"full"}>
            Register Client
          </Button>
        </VStack>
      </form>
    </>
  );
};

export default ClientForm;
