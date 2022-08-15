/* eslint-disable prettier/prettier */
import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const users=new  User();

    Object.assign(users,{ 
        name, 
        email,
        created_at: new Date(),
        updated_at:new Date(),
      });

      this.users.push(users);
      return users
  }

  findById(id: string): User | undefined {
    const users = this.users.find(user => user.id === id);
    return users;
  }

  findByEmail(email: string): User | undefined {
    const users = this.users.find(user => user.email === email);
    return users;
  }

  turnAdmin(receivedUser: User): User {
    const user=receivedUser;
    user.admin=true;
    user.updated_at=new Date();
    return user;
  }

  list(): User[] {
   return this.users;
  }
}

export { UsersRepository };
