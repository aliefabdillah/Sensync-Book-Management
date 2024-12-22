import { addFormSchema } from "@/app/types/ZodSchema";
import { booksService } from "../services";

/* eslint-disable @typescript-eslint/no-explicit-any */
export async function addBookAction(prevState: any, formData: FormData) {
  const validatedFields = addFormSchema.safeParse({
    title: formData.get("title"),
    author: formData.get("author"),
    year: formData.get("year") ? formData.get("year")!.toString() : "",
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      isLoading: false,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      apiErrors: null,
      message: "Missing Fields. Failed to Create",
    };
  }

  const bodyData = {
    title: validatedFields.data.title,
    author: validatedFields.data.author,
    year: validatedFields.data.year.toString(),
  };

  const response = await booksService.createBooks(bodyData);

  if (!response) {
    return {
      ...prevState,
      isLoading: false,
      apiErrors: null,
      zodErrors: null,
      message: "Ops! Something went wrong. Please try again.",
    };
  }

  if (response.statusCode !== 201) {
    return {
      ...prevState,
      isLoading: false,
      isError: true,
      apiErrors: {
        code: response.code,
        message: response.message
      },
      zodErrors: null,
      message: "Failed to create books",
    };
  }

  return {
    isLoading: false,
    isSuccess: true,
    apiErrors: null,
    zodErrors: null,
    message: response.message,
  };
}

export async function editBookAction(prevState: any, formData: FormData) {
  const validatedFields = addFormSchema.safeParse({
    title: formData.get("title"),
    author: formData.get("author"),
    year: formData.get("year") ? formData.get("year")!.toString() : "",
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      isLoading: false,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      apiErrors: null,
      message: "Missing Fields. Failed to Create",
    };
  }

  const bodyData = {
    title: validatedFields.data.title,
    author: validatedFields.data.author,
    year: validatedFields.data.year.toString(),
  };

  const bookId = formData.get("id")?.toString()
  const response = await booksService.editBooks(bodyData, bookId ? bookId : "");

  if (!response) {
    return {
      ...prevState,
      isLoading: false,
      apiErrors: null,
      zodErrors: null,
      message: "Ops! Something went wrong. Please try again.",
    };
  }

  if (response.statusCode !== 201) {
    return {
      ...prevState,
      isLoading: false,
      isError: true,
      apiErrors: {
        code: response.code,
        message: response.message
      },
      zodErrors: null,
      message: "Failed to create books",
    };
  }

  return {
    isLoading: false,
    isSuccess: true,
    apiErrors: null,
    zodErrors: null,
    message: response.message,
  };
}
