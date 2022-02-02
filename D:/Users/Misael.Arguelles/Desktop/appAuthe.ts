import { ServerCOntroller } from "./../Interfaces/ServerController";
import express from "express";
import cors from "cors";
import http, { createServer } from "http";

export default class AppAuth implements ServerCOntroller {
  app: express.Application;
  port: number;
  httpServer: http.Server;

  constructor(controllers: any, port: number) {
    this.app = express();
    this.port = port;
    this.httpServer = createServer(this.app).listen(port);
    this.initializeMiddlewares();
    this.initialController(controllers);
  }

  private initialController(controllers: any): void {
    controllers.forEach((element: any) => {
      this.app.use("/", element.router);
    });
  }
  private initializeMiddlewares() {
    this.app.use(cors({ origin: true, credentials: true }));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }
  public listenn() {
    console.log(`Auth escucha en el puerto ${this.port}`);
}
}
