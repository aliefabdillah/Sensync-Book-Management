import axios, { AxiosInstance } from "axios";

export class BooksService {
  protected readonly instance: AxiosInstance;
  public constructor(url: string) {
    this.instance = axios.create({
      baseURL: url,
      timeout: 30000,
      timeoutErrorMessage: "URL Time Out!",
    });
  }

  getListBooks = () => {
    return this.instance
      .get(`/`)
      .then((res) => {
        return res.data;
      })
      .catch(function (error) {
        const errorResponse = {
          code: 500,
          message: error.message,
          name: error.name
        }
        return errorResponse;
      });
  };
}
