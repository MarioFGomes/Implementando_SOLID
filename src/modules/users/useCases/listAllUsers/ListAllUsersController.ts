/* eslint-disable prettier/prettier */
import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
      const {user_id}=request.headers;  
      try {
       const userList= this.listAllUsersUseCase.execute({user_id});
        return response.status(200).json(userList);
      }catch (e) {
          return response.status(400).json({error: e.message})
      }
  }
}

export { ListAllUsersController };
