/* eslint-disable prettier/prettier */
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
          const User = this.usersRepository.findById(user_id);
          if(!User) {
            throw new Error("User not found");
          }
          return this.usersRepository.turnAdmin(User);
  }
}

export { TurnUserAdminUseCase };
