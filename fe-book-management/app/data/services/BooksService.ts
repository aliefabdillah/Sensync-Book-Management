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

  getDetailsBooks = (id: string) => {
    return this.instance
      .get(`/${id}`)
      .then((res) => {
        return res.data;
      })
      .catch(function (error) {
        if(error.response) {
          const errorResponse = {
            code: error.response.data.code,
            message: error.response.data.message,
          }
          return errorResponse
        } else {
          const errorResponse = {
            code: error.code,
            message: error.message,
            name: error.name
          }
          return errorResponse;
        }
      });
    }

  createBooks = (body: unknown) => {
    return this.instance
      .post(`/`, body)
      .then((res) => {
        return res.data;
      })
      .catch(function (error) {
        console.log(error)
        if(error.response) {
          const errorResponse = {
            code: error.response.status,
            message: error.response.statusText,
          }
          return errorResponse
        } else {
          const errorResponse = {
            code: error.code,
            message: error.message,
            name: error.name
          }
          return errorResponse;
        }
      });
  };
}
