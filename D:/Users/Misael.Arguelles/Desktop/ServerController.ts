import express from 'express';
import http from 'http';

export interface ServerCOntroller{
        app:express.Application;
        port:number;
        httpServer:http.Server;
}