import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { create } from "framer-motion/client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createProgram } from "../../services/programs";

const ProgramFormSchema = z.object({
  name: z.string().min(3, { message: "Program name is required" }),
  description: z.string().min(10, { message: "Description is required" }),
  start_date: z.string().min(1, { message: "Start date is required" }),
  end_date: z.string().min(1, { message: "End date is required" }),
  is_active: z.boolean(),
});

export type ProgramFormData = z.infer<typeof ProgramFormSchema>;

const ProgramForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProgramFormData>({ resolver: zodResolver(ProgramFormSchema) });

  const onSubmit = async (data: ProgramFormData) => {
    // console.log(data);
    try {
      await createProgram(data);
      console.log("Program created successfully", data);
    } catch (error) {
      console.error("Error creating program:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4} maxW={400} mt={10}>
          <FormControl isInvalid={!!errors.name}>
            <FormLabel>Program Name</FormLabel>
            <Input {...register("name")}></Input>
          </FormControl>

          <FormControl isInvalid={!!errors.description}>
            <FormLabel>Description</FormLabel>
            <Textarea
              {...register("description")}
              placeholder="Enter a program description"
              rows={4}
            />
          </FormControl>

          <FormControl isInvalid={!!errors.start_date}>
            <FormLabel>Start Date</FormLabel>
            <Input {...register("start_date")}></Input>
          </FormControl>

          <FormControl isInvalid={!!errors.end_date}>
            <FormLabel>End Date</FormLabel>
            <Input {...register("end_date")}></Input>
          </FormControl>

          <FormControl isInvalid={!!errors.is_active}>
            <FormLabel>Status</FormLabel>
            <Select
              {...register("is_active", {
                setValueAs: (value) => value === "true",
              })}
              placeholder="Select Status"
            >
              <option value="true">Active</option>
              <option value="false">InActive</option>
            </Select>
          </FormControl>

          <Button type="submit" colorScheme="blue" w={"full"}>
            Add Program
          </Button>
        </VStack>
      </form>
    </>
  );
};

export default ProgramForm;
